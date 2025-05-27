import {defineConfig} from "vitepress";
import {
	imagePlugin,
	customBlockPlugin,
	youtubeEmbedPlugin,
	timingWindowPlugin,
	glossaryPlugin,
	statusIconPlugin,
} from "./plugins/markdown";

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
		nav: [
			{text: "Home", link: "/"},
			{
				text: "Guides",
				items: [
					{text: "Extreme", link: "/extreme"},
					{text: "Savage", link: "/savage"},
					{text: "Ultimate", link: "/ultimate"},
					{text: "Criterion", link: "/criterion"},
					{text: "Chaotic", link: "/chaotic"},
					{text: "Unreal", link: "/unreal"},
				],
			},
			{
				text: "Archive",
				items: [{text: "Endwalker", link: "/archive/endwalker"}],
			},
			{
				text: "Resources",
				items: [
					{text: "Beginners Guide", link: "/resources/beginnersguide"},
					{text: "Visitors Guide", link: "/resources/visitorsguide"},
					{text: "Macro Mate", link: "/resources/macromate"},
					{text: "Raidplan Templates", link: "/resources/raidplantemplates"},
					{text: "Glossary", link: "/resources/glossary"},
				],
			},
			{text: "Directory", link: "https://materia.directory/"},
		],
		sidebar: {
			"/": [
				{
					text: "Extreme",
					collapsed: false,
					items: [
						{text: "EX1", link: "/extreme/ex1"},
						{text: "EX2", link: "/extreme/ex2"},
						{text: "EX3", link: "/extreme/ex3"},
						{text: "EX4", link: "/extreme/ex4"},
					],
				},
				{
					text: "Savage",
					collapsed: false,
					items: [
						{text: "M1S", link: "/savage/m1s"},
						{text: "M2S", link: "/savage/m2s"},
						{text: "M3S", link: "/savage/m3s"},
						{text: "M4S", link: "/savage/m4s"},
						{text: "M5S", link: "/savage/m5s"},
						{text: "M6S", link: "/savage/m6s"},
						{text: "M7S", link: "/savage/m7s"},
						{text: "M8S", link: "/savage/m8s"},
					],
				},
				{
					text: "Ultimate",
					collapsed: false,
					items: [
						{text: "UCOB", link: "/ultimate/ucob"},
						{text: "UWU", link: "/ultimate/uwu"},
						{text: "TEA", link: "/ultimate/tea"},
						{text: "DSR", link: "/ultimate/dsr"},
						{text: "TOP", link: "/ultimate/top"},
						{text: "FRU", link: "/ultimate/fru"},
					],
				},
				{
					text: "Criterion",
					collapsed: false,
					items: [
						{text: "ASS", link: "/criterion/ass"},
						{text: "AMR", link: "/criterion/amr"},
						{text: "AAI", link: "/criterion/aai"},
					],
				},
				{
					text: "Chaotic",
					collapsed: false,
					items: [{text: "COD", link: "/chaotic/cod"}],
				},
				{
					text: "Unreal",
					collapsed: false,
					items: [
						{text: "Byakko", link: "/unreal/byakko"},
						{text: "Suzaku", link: "/unreal/suzaku"},
					],
				},
			],
			"/archive/endwalker": [
				{
					text: "Endwalker",
					items: [
						{
							text: "Extreme",
							collapsed: false,
							items: [
								{text: "EX4", link: "/archive/endwalker/extreme/ex4"},
								{text: "EX5", link: "/archive/endwalker/extreme/ex5"},
								{text: "EX6", link: "/archive/endwalker/extreme/ex6"},
								{text: "EX7", link: "/archive/endwalker/extreme/ex7"},
							],
						},
						{
							text: "Savage",
							collapsed: false,
							items: [
								{text: "P3S", link: "/archive/endwalker/savage/p3s"},
								{text: "P4S", link: "/archive/endwalker/savage/p4s"},
								{text: "P5S", link: "/archive/endwalker/savage/p5s"},
								{text: "P6S", link: "/archive/endwalker/savage/p6s"},
								{text: "P9S", link: "/archive/endwalker/savage/p9s"},
								{text: "P10S", link: "/archive/endwalker/savage/p10s"},
								{text: "P11S", link: "/archive/endwalker/savage/p11s"},
								{text: "P12S", link: "/archive/endwalker/savage/p12s"},
							],
						},
					],
				},
			],
			"/resources/": [
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
						{text: "Macro Mate", link: "/resources/macromate"},
						{text: "Raid Plan Templates", link: "/resources/raidplantemplates"},
						{text: "Glossary", link: "/resources/glossary"},
					],
				},
			],
		},
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
		'other/:slug*': 'unreal/:slug*',
	},
	vite: {
		optimizeDeps: {
			exclude: ["vitepress"],
		},
	},
});
