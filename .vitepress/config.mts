import {defineConfig} from "vitepress";
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
			{text: "Beginners Guide", link: "/resources/beginnersguide"},
			{text: "Visitors Guide", link: "/resources/visitorsguide"},
		],
	},
	{
		text: "Resources",
		items: [
			{text: "Plugins", link: "/resources/plugins"},
			{text: "Macro Mate", link: "/resources/macromate"},
			{text: "Raidplan Templates", link: "/resources/raidplantemplates"},
			{text: "Glossary", link: "/resources/glossary"},
		],
	},
];

const extraLinks = [
	{text: "Directory", link: "https://materia.directory/"},
];

// https://vitepress.dev/reference/site-config
export default defineConfig({
	srcDir: "./docs",
	title: "Materia Raiding",
	description:
		"Materia Raiding is a community driven project to collate the various guide and tools created for raiding in the FF14 Materia Datacenter.",
	head: [["link", {rel: "icon", href: "/images/favicon.ico"}]],
	cleanUrls: true,
	ignoreDeadLinks: true,
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
		},
		socialLinks: [
			{icon: "discord", link: "https://discord.gg/EySn5dRj65"},
			{icon: "github", link: "https://github.com/materiaraiding/materiaraiding"},
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
	},
	rewrites: {
		'guides/chaotic/:slug*': 'chaotic/:slug*',
		'guides/ultimate/:slug*': 'ultimate/:slug*',
		'guides/savage/:slug*': 'savage/:slug*',
		'guides/extreme/:slug*': 'extreme/:slug*',
		'guides/criterion/:slug*': 'criterion/:slug*',
		'guides/unreal/:slug*': 'unreal/:slug*',
		'guides/fieldops/:slug*': 'fieldops/:slug*',
		'other/:slug*': 'unreal/:slug*',
	},
	vite: {
		optimizeDeps: {
			exclude: ["vitepress"],
		},
	},
});
