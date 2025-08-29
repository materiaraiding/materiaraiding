import { defineConfig, HeadConfig } from "vitepress";
import {
	imagePlugin,
	customBlockPlugin,
	youtubeEmbedPlugin,
	timingWindowPlugin,
	glossaryPlugin,
	statusIconPlugin,
} from "./plugins/markdown";
import { generateFullNav, generateFullSidebar } from "./navigation";

// Manually defined resources for nav and sidebar
const resourcesNav = [
	{
		text: "Guides",
		items: [
			{ text: "Beginners Guide", link: "/resources/beginnersguide" },
			{ text: "Visitors Guide", link: "/resources/visitorsguide" },
		],
	},
	{
		text: "Resources",
		items: [
			{ text: "Plugins", link: "/resources/plugins" },
			{ text: "Macro Mate", link: "/resources/macromate" },
			{ text: "Raidplan Templates", link: "/resources/raidplantemplates" },
			{ text: "Glossary", link: "/resources/glossary" },
		],
	},
];

const extraLinks = [
	{ text: "Party Finder", link: "/partyfinder" },
	{ text: "Directory", link: "https://materia.directory/" },
];

// https://vitepress.dev/reference/site-config
export default defineConfig({
	srcDir: "./docs",
	title: "Materia Raiding",
	description:
		"Materia Raiding is a community driven project to collate the various guide and tools created for raiding in the FF14 Materia Datacenter.",
	head: [["link", { rel: "icon", href: "/images/favicon.ico" }]],
	cleanUrls: true,
	ignoreDeadLinks: false,
	lastUpdated: true,
	metaChunk: true,
	sitemap: {
		hostname: 'https://materiaraiding.com',
		lastmodDateOnly: false
	},
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		logo: "/images/icons/materia.webp",
		outline: "deep",
		nav: generateFullNav(resourcesNav, extraLinks),
		sidebar: generateFullSidebar(resourcesNav),
		search: {
			provider: "local",
			options: {
				miniSearch: {
					searchOptions: {
						fuzzy: 0,
						fields: ['title', 'titles']
					}
				},
				_render(src, env, md) {
					const html = md.render(src, env)
					const title = env.frontmatter?.title;
					const fightId = env.frontmatter?.fightID;
					if (title && fightId) {
						const result = md.render(`# ${fightId} - ${title}`) + html;
						return result;
					}
					return html;
				}
			}
		},
		socialLinks: [
			{ icon: "discord", link: "https://discord.gg/EySn5dRj65" },
			{ icon: "github", link: "https://github.com/materiaraiding/materiaraiding" },
		],
		editLink: {
			pattern: "https://github.com/materiaraiding/materiaraiding/edit/main/docs/:path",
			text: "Edit this page on GitHub",
		},
		footer: {
			message:
				"© SQUARE ENIX CO., LTD. All Rights Reserved | FINAL FANTASY is a registered trademark of Square Enix Holdings Co., Ltd. | All content © their respective authors | Materia Raiding is a non-profit community-owned website.",
		},
	},
	markdown: {
		config: (md) => {
			md.use(customBlockPlugin, {
				tankLabel: "TANK",
				healerLabel: "HEALER",
				damageLabel: "DAMAGE",
				everyoneLabel: "EVERYONE",
			});
			md.use(imagePlugin);
			md.use(youtubeEmbedPlugin);
			md.use(timingWindowPlugin);
			md.use(glossaryPlugin);
			md.use(statusIconPlugin);
		},
		languageAlias: {
			'macro': 'markdown',
			'waymarks': 'markdown',
		},
	},
	rewrites: {
		'guides/chaotic/:slug*': 'chaotic/:slug*',
		'guides/ultimate/:slug*': 'ultimate/:slug*',
		'guides/savage/:slug*': 'savage/:slug*',
		'guides/extreme/:slug*': 'extreme/:slug*',
		'guides/criterion/:slug*': 'criterion/:slug*',
		'guides/unreal/:slug*': 'unreal/:slug*',
		'guides/fieldops/:slug*': 'fieldops/:slug*',
		// 'other/:slug*': 'unreal/:slug*',
	},
	vite: {
		optimizeDeps: {
			exclude: [
				"vitepress",
				'@nolebase/ui',
				'@nolebase/vitepress-plugin-enhanced-readabilities/client',
			],
		},
		ssr: {
			noExternal: [
				'@nolebase/vitepress-plugin-enhanced-readabilities',
				'@nolebase/ui',
			]
		}
	},
	transformHead: ({ pageData }) => {
		const head: HeadConfig[] = []

		head.push(['meta', { property: 'og:image', content: "https://materiaraiding.com/images/icons/materia.webp" }])
		head.push(['meta', { property: 'og:image:alt', content: "Materia Icon" }])
		head.push(['meta', { property: 'theme-color ', content: "#c77676" }])

		head.push(['meta', { property: 'og:site_name', content: "Materia Raiding" }])
		head.push(['meta', { property: 'og:type ', content: "website" }])

		if (pageData.frontmatter.title) {
			head.push(['meta', { property: 'og:title', content: pageData.frontmatter.title }])
		}

		if (pageData.frontmatter.description) {
			head.push(['meta', { property: 'og:description', content: pageData.frontmatter.description }])
		}

		return head
	}
});
