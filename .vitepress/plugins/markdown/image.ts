import MarkdownIt from "markdown-it";

interface Options {
	basePath?: string;
	lazyLoading?: boolean;
}

export const imagePlugin = (md: MarkdownIt, options: Options = {}) => {
	const {basePath = "/materiaraiding", lazyLoading = false} = options;

	md.renderer.rules.image = (tokens, idx, options, env, self) => {
		const token = tokens[idx];
		const src = token.attrGet("src") || "";
		const width = token.attrGet("width") || "";
		const caption = token.attrGet("caption") || "";
		const alt = token.content || "";

		const adjustedSrc = src.startsWith("http") ? src : `${basePath}${src}`;
		token.attrSet("src", adjustedSrc);

		if (lazyLoading) {
			token.attrSet("loading", "lazy");
		}

		return `<ImageEmbed src="${adjustedSrc}" alt="${alt}" width="${width}" caption="${caption}" />`;
	};
};
