import MarkdownIt from "markdown-it";

export const stratboardPlugin = (md: MarkdownIt) => {
	function stratboardBlockTokenizer(state: any, startLine: number, endLine: number, silent: boolean): boolean {
		const startPos = state.bMarks[startLine] + state.tShift[startLine];
		const maxPos = state.eMarks[startLine];
		const marker = "[stgy:";

		if (state.src.slice(startPos, startPos + marker.length) !== marker) {
			return false;
		}

		let pos = startPos + marker.length;

		const closingBracket = state.src.indexOf("]", pos);
		if (closingBracket === -1) {
			return false;
		}

		const fullStgy = state.src.slice(startPos, closingBracket + 1);

		const lineEnd = state.eMarks[startLine];
		if (closingBracket + 1 < lineEnd) {
			const trailingText = state.src.slice(closingBracket + 1, lineEnd).trim();
			if (trailingText !== "") {
				return false;
			}
		}

		if (silent) {
			return true;
		}

		const token = state.push("stratboard_block", "div", 0);
		token.block = true;
		token.content = fullStgy;
		token.meta = { stgy: fullStgy };
		state.line = startLine + 1;

		return true;
	}

	md.block.ruler.before("fence", "stratboard_block", stratboardBlockTokenizer, {
		alt: ["paragraph", "reference", "blockquote", "list"],
	});

	md.renderer.rules["stratboard_block"] = (tokens, idx, _options, _env, _self) => {
		const token = tokens[idx];
		const { stgy } = token.meta;
		return `<StratBoard stgy="${stgy}" />`;
	};
};
