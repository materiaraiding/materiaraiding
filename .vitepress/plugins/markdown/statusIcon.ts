import MarkdownIt from "markdown-it";

export const statusIconPlugin = (md: MarkdownIt) => {
	function statusIconInlineTokenizer(state: any, silent: boolean) {
		const marker = "^[";
		let pos = state.pos;

		if (state.src.slice(pos, pos + marker.length) !== marker) {
			return false;
		}

		const start = pos + marker.length;
		const end = state.src.indexOf("]", start);
		if (end < 0) {
			return false;
		}

		const value = state.src.slice(start, end).trim();
		if (!value) {
			return false;
		}

		if (silent) {
			return false;
		}

		const [name, id] = value.split(":");

		const token = state.push("statusIcon_inline", "", 0);
		token.meta = {name, id: id ?? null};

		state.pos = end + 1;

		return true;
	}

	md.inline.ruler.before("emphasis", "statusIcon_inline", statusIconInlineTokenizer);

	md.renderer.rules.statusIcon_inline = (tokens, idx) => {
		const {name, id} = tokens[idx].meta;
		return `<StatusIcon name="${name}"${id ? ` id="${id}"` : ""}" />`;
	};
};
