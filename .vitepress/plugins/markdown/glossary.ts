import MarkdownIt from "markdown-it";
import { readFileSync } from "fs";
import escapeRegExp from "lodash/escapeRegExp";
import escape from "lodash/escape";
import pluralize from "pluralize";

type WordDefinition = {
	word: string;
	definition: string;
};

export function glossaryPlugin(md: MarkdownIt): void {
	const defaultTextRender =
		md.renderer.rules.text ||
		((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options));

	const defaultHeadingOpenRender =
		md.renderer.rules.heading_open ||
		((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options));

	const defaultHeadingCloseRender =
		md.renderer.rules.heading_close ||
		((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options));

	let cache: Record<string, { words: WordDefinition[] }> | null = null;

	function loadWordLists(): Record<string, { words: WordDefinition[] }> {
		if (cache) {
			return cache;
		}

		try {
			const fileContents = readFileSync("./docs/public/glossary.json", "utf8");
			cache = JSON.parse(fileContents) as Record<string, { words: WordDefinition[] }>;
			return cache;
		} catch (error) {
			console.error("Error loading glossary.json:", error);
			cache = {};
			return cache;
		}
	}

	let cachedWordMap: Record<string, string> | null = null;
	let cachedRegex: RegExp | null = null;

	function buildWordMapAndRegex(wordList: WordDefinition[]) {
		cachedWordMap = {};

		wordList.forEach(({ word, definition }) => {
			const baseLower = word.toLowerCase();

			const singular = pluralize.singular(baseLower);
			const plural = pluralize.plural(baseLower);

			if (cachedWordMap) {
				cachedWordMap[singular] = definition;
			}
			if (cachedWordMap) {
				cachedWordMap[plural] = definition;
			}
		});

		const patternParts = Object.keys(cachedWordMap)
			.map((w) => escapeRegExp(w).replace(/\\\s+/g, "\\s+"))
			.sort((a, b) => b.length - a.length)
			.join("|");

		if (patternParts.length > 0) {
			cachedRegex = new RegExp(`\\b(${patternParts})\\b`, "gi");
		} else {
			cachedRegex = null;
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
			if (!cachedWordMap || !cachedRegex) {
				buildWordMapAndRegex(wordList);
			}

			if (cachedRegex) {
				const content = tokens[idx].content;

				rendered = content.replace(cachedRegex, (matchedWord) => {
					const lookup = matchedWord.toLowerCase();
					const definition = cachedWordMap![lookup] || "";
					const escapedDefinition = escape(definition);

					return `<span class="glossaryTerm" v-tooltip="{ content: '${escapedDefinition}', theme: 'glossary-tooltip' }">${matchedWord}</span>`;
				});
			}
		}

		return rendered;
	};
}

export type { WordDefinition };
