import MarkdownIt from "markdown-it";

interface options {
	basePath?: string;
	lazyLoading?: boolean;
}

export const imagePlugin = (md: MarkdownIt, options: options = {}) => {
	const {basePath = "", lazyLoading = false} = options;

	function imageBlockTokenizer(state: any, startLine: number, endLine: number, silent: boolean): boolean {
		const startPos = state.bMarks[startLine] + state.tShift[startLine];
		const maxPos = state.eMarks[startLine];
		const marker = "![";

		if (state.src.slice(startPos, startPos + marker.length) !== marker) {
			return false;
		}

		let pos = startPos + marker.length;

		const closingBracket = state.src.indexOf("]", pos);
		if (closingBracket === -1 || closingBracket > maxPos) {
			return false;
		}

		const altText = state.src.slice(pos, closingBracket).trim();

		pos = closingBracket + 1;

		if (pos >= maxPos || state.src.charCodeAt(pos) !== 0x28 /* '(' */) {
			return false;
		}
		pos++;

		const closingParen = state.src.indexOf(")", pos);
		if (closingParen === -1 || closingParen > maxPos) {
			return false;
		}

		const src = state.src.slice(pos, closingParen).trim();
		pos = closingParen + 1;

		if (pos < maxPos) {
			const trailingText = state.src.slice(pos, maxPos).trim();
			if (trailingText !== "") {
				return false;
			}
		}

		if (silent) {
			return true;
		}

		const token = state.push("image_block", "div", 0);
		token.block = true;
		token.content = "";
		token.meta = {alt: altText, src};
		state.line = startLine + 1;

		return true;
	}

	md.block.ruler.before("fence", "image_block", imageBlockTokenizer, {
		alt: ["paragraph", "reference", "blockquote", "list"],
	});

	md.renderer.rules["image_block"] = (tokens, idx, _options, _env, _self) => {
		const token = tokens[idx];
		const {alt, src} = token.meta;

		const adjustedSrc = src.startsWith("http") ? src : `${basePath}${src}`;

		if (lazyLoading) {
			token.attrSet("loading", "lazy");
		}

		return `<ImageEmbed src="${adjustedSrc}" alt="${alt}" />`;
	};
};
