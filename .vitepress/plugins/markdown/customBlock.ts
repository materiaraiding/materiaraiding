import type MarkdownIt from "markdown-it";
import container from "markdown-it-container";
import type {RenderRule} from "markdown-it/lib/renderer.mjs";

export const customBlockPlugin = (md: MarkdownIt, containerOptions?: ContainerOptions) => {
	md.use(...createCustomContainer("tank", containerOptions?.tankLabel || "TANK", md))
		.use(...createCustomContainer("healer", containerOptions?.healerLabel || "HEALER", md))
		.use(...createCustomContainer("damage", containerOptions?.damageLabel || "DAMAGE", md))
		.use(...createCustomContainer("everyone", containerOptions?.everyoneLabel || "EVERYONE", md));
};

type ContainerArgs = [typeof container, string, {render: RenderRule}];

function createCustomContainer(name: string, defaultTitle: string, md: MarkdownIt): ContainerArgs {
	return [
		container,
		name,
		{
			render(tokens, idx) {
				const token = tokens[idx];
				const info = token.info.trim().slice(name.length).trim();
				const attrs = md.renderer.renderAttrs(token);
				if (token.nesting === 1) {
					const title = md.renderInline(info || defaultTitle);
					return `<div class="${name} custom-block"${attrs}><p class="custom-block-title">${title}</p>\n`;
				} else {
					return `</div>\n`;
				}
			},
		},
	];
}

export interface ContainerOptions {
	tankLabel?: string;
	healerLabel?: string;
	damageLabel?: string;
	everyoneLabel?: string;
}
