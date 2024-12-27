import markdownIt from "markdown-it";
import markdownItContainer from "markdown-it-container";

export const timingWindowPlugin = (md: markdownIt) => {
	md.use(markdownItContainer, "timing-window", {
		render(tokens: markdownIt.Token[], idx: number): string {
			const token = tokens[idx];
			const info = token.info.trim().slice("timing-window".length).trim();

			if (token.nesting === 1) {
				const attributes = info ? ` ${info}` : "";
				return `<TimingWindow${attributes}>\n`;
			} else {
				return "</TimingWindow>\n";
			}
		},
	});

	md.use(markdownItContainer, "burst", {
		render(tokens: markdownIt.Token[], idx: number): string {
			return tokens[idx].nesting === 1 ? `<template #burst>\n` : `</template>\n`;
		},
	});

	md.use(markdownItContainer, "pot", {
		render(tokens: markdownIt.Token[], idx: number): string {
			return tokens[idx].nesting === 1 ? `<template #pot>\n` : `</template>\n`;
		},
	});
};
