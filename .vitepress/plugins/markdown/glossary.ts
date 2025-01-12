import MarkdownIt from "markdown-it";
import {readFileSync} from "fs";
import escapeRegExp from "lodash/escapeRegExp";
import escape from "lodash/escape";
import pluralize from "pluralize";

type WordDefinition = {
	word: string;
	definition: string;
};

export function glossaryPlugin(md: MarkdownIt): void {
	const defaultTextRender =
		md.renderer.rules.text || ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options));
	const defaultHeadingOpenRender =
		md.renderer.rules.heading_open || ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options));
	const defaultHeadingCloseRender =
		md.renderer.rules.heading_close ||
		((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options));

	let cache: Record<string, {words: WordDefinition[]}> | null = null;

	function loadWordLists(): Record<string, {words: WordDefinition[]}> {
		if (cache) {
			return cache;
		}

		try {
			const fileContents = readFileSync("./docs/public/glossary.json", "utf8");
			cache = JSON.parse(fileContents) as Record<string, {words: WordDefinition[]}>;
			return cache;
		} catch (error) {
			cache = {};
			return cache;
		}
	}

	md.renderer.rules.heading_open = (tokens, idx, options, env, self) => {
		env.isHeading = true;
		return defaultHeadingOpenRender(tokens, idx, options, env, self);
	};
	md.renderer.rules.heading_close = (tokens, idx, options, env, self) => {
		env.isHeading = false;
		return defaultHeadingCloseRender(tokens, idx, options, env, self);
	};

	md.renderer.rules.text = (tokens, idx, options, env, self) => {
		const isHeading = env.isHeading || false;
		const wordLists = loadWordLists();
		const wordList: WordDefinition[] = [...(wordLists["global"]?.words || [])];

		if (env.frontmatter?.glossary) {
			wordList.push(...(wordLists[env.frontmatter.glossary]?.words || []));
		}

		let rendered = defaultTextRender(tokens, idx, options, env, self);

		if (wordList.length > 0 && !isHeading) {
			const wordMap: Record<string, string> = {};
			wordList.forEach(({word, definition}) => {
				const base = word.toLowerCase();
				const plural = pluralize.plural(base);

				wordMap[base] = definition;
				wordMap[plural] = definition;
			});

			const pattern = Object.keys(wordMap)
				.map((w) => escapeRegExp(w))
				.join("|");

			if (pattern) {
				const wordRegex = new RegExp(`\\b(${pattern})\\b`, "gi");
				const content = tokens[idx].content;

				if (wordRegex.test(content)) {
					rendered = content.replace(wordRegex, (matchedWord) => {
						const definition = wordMap[matchedWord.toLowerCase()] || "";
						return `<span class="glossaryTerm" v-tooltip="{ content: '${escape(definition)}', theme: 'glossary-tooltip' }">${matchedWord}</span>`;
					});
				}
			}
		}

		return rendered;
	};
}

export type {WordDefinition};
