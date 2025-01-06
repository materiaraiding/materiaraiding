import MarkdownIt from "markdown-it";

export const youtubeEmbedPlugin = (md: MarkdownIt) => {
	function youtubeBlockTokenizer(state: any, startLine: number, endLine: number, silent: boolean): boolean {
		const startPos = state.bMarks[startLine] + state.tShift[startLine];
		const maxPos = state.eMarks[startLine];
		const marker = "@[";

		if (state.src.slice(startPos, startPos + marker.length) !== marker) {
			return false;
		}

		let pos = startPos + marker.length;

		const titleEnd = state.src.indexOf("]", pos);
		if (titleEnd === -1 || titleEnd > maxPos) {
			return false;
		}

		const title = state.src.slice(pos, titleEnd).trim();

		pos = titleEnd + 1;

		if (pos >= maxPos || state.src.charCodeAt(pos) !== 0x28 /* '(' */) {
			return false;
		}
		pos++;

		const urlEnd = state.src.indexOf(")", pos);
		if (urlEnd === -1 || urlEnd > maxPos) {
			return false;
		}

		const url = state.src.slice(pos, urlEnd).trim();
		pos = urlEnd + 1;

		if (pos < maxPos) {
			const trailingText = state.src.slice(pos, maxPos).trim();
			if (trailingText !== "") {
				return false;
			}
		}

		if (silent) {
			return true;
		}

		const token = state.push("youtube_block", "div", 0);
		token.block = true;
		token.meta = {title, url};
		state.line = startLine + 1;

		return true;
	}

	md.block.ruler.before("fence", "youtube_block", youtubeBlockTokenizer, {
		alt: ["paragraph", "reference", "blockquote", "list"],
	});

	md.renderer.rules["youtube_block"] = (tokens, idx) => {
		const {title, url} = tokens[idx].meta;

		return `<YoutubeEmbed url="${url}" title="${title}" />`;
	};
};
