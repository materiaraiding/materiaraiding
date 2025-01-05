import MarkdownIt from 'markdown-it';

interface WordFilterOptions {
	words: string[];
	className?: string;
}

export function wordFilter(md: MarkdownIt, options: WordFilterOptions): void {
	const { words, className } = options;

	if (!words || words.length === 0) return;

	const wordRegex = new RegExp(`\\b(${words.join('|')})\\b`, 'gi');

	const defaultRender =
		md.renderer.rules.text ||
		((tokens, idx) => tokens[idx].content);

	md.renderer.rules.text = (tokens, idx, options, env, self) => {
		const content = tokens[idx].content;

		if (wordRegex.test(content)) {
			return content.replace(wordRegex, (match) => {
				return `<span class="${className}">${match}</span>`;
			});
		}

		return defaultRender(tokens, idx, options, env, self);
	};
}

export type { WordFilterOptions };
