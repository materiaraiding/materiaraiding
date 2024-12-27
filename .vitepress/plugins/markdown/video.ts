import MarkdownIt from "markdown-it";

export const youtubeEmbedPlugin = (md: MarkdownIt) => {
	md.inline.ruler.before("image", "video", function (state, silent) {
		if (state.src.charCodeAt(state.pos) !== 0x40 /* @ */ || state.src.charCodeAt(state.pos + 1) !== 0x5b /* [ */) {
			return false;
		}

		const titleStart = state.pos + 2;
		const titleEnd = state.src.indexOf("]", state.pos + 2);

		if (titleEnd < 0) {
			return false;
		}
		const linkStart = state.src.indexOf("(", titleEnd + 1);
		const linkEnd = state.src.indexOf(")", linkStart + 1);

		if (linkStart === -1 || linkEnd === -1) {
			return false;
		}

		const title = state.src.slice(titleStart, titleEnd);
		const url = state.src.slice(linkStart + 1, linkEnd);

		if (!silent) {
			const token = state.push("video", "", 0);
			token.attrs = [
				["url", url],
				["title", title],
			];
		}

		state.pos = linkEnd + 1;
		return true;
	});

	md.renderer.rules.video = function (tokens, idx) {
		const url = tokens[idx].attrGet("url");
		const title = tokens[idx].attrGet("title");

		return `<YoutubeEmbed :url="'${url}'" :title="'${title}'" />`;
	};
};
