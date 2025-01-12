import MarkdownIt from "markdown-it";

export const statusIconPlugin = (md: MarkdownIt) => {
	function statusIconInlineTokenizer(state: any, silent: boolean) {
		const marker = "$[";
		let pos = state.pos;

		if (state.src.slice(pos, pos + marker.length) !== marker) {
			return false;
		}

		const start = pos + marker.length;
		const end = state.src.indexOf("]", start);
		if (end < 0) {
			return false;
		}

		const name = state.src.slice(start, end).trim();
		if (!name) {
			return false;
		}

		if (silent) {
			return false;
		}

		const token = state.push("statusIcon_inline", "", 0);
		token.meta = { name };

		state.pos = end + 1;

		return true;
	}

	md.inline.ruler.before("emphasis", "statusIcon_inline", statusIconInlineTokenizer);

	md.renderer.rules.statusIcon_inline = (tokens, idx) => {
		const { name } = tokens[idx].meta;
		return `<StatusIcon name="${name}" />`;
	};
};
