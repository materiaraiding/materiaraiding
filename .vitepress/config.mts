import {defineConfig} from "vitepress";
import {imagePlugin, customBlockPlugin, youtubeEmbedPlugin, timingWindowPlugin} from "./plugins/markdown";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	srcDir: "./docs",
	base: "/materiaraiding/",
	title: "Materia Raiding",
	description:
		"Materia Raiding is a community driven project to collate the various guide and tools created for raiding in the FF14 Materia Datacenter.",
	head: [["link", {rel: "icon", href: "/materiaraiding/images/favicon.ico"}]],
	cleanUrls: true,
	ignoreDeadLinks: true,
	lastUpdated: true,
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		logo: "/images/icons/materia.webp",
		outline: "deep",
		nav: [
			{text: "Home", link: "/"},
			{text: "Guides", link: "/guides"},
			{
				text: "Archive",
				items: [
					{text: "Stormblood", link: "/guides/archive/stormblood"},
					{text: "Endwalker", link: "/guides/archive/endwalker"},
				],
			},
			{
				text: "Resources",
				items: [
					{text: "Visitors Guide", link: "/resources/visitorsguide"},
					{text: "Macro Mate", link: "/resources/macromate"},
					{text: "Raidplan Templates", link: "/resources/raidplantemplates"},
				],
			},
		],
		sidebar: {
			"/guides/": [
				{
					text: "Extreme",
					collapsed: false,
					items: [
						{text: "EX1", link: "/guides/extreme/ex1"},
						{text: "EX2", link: "/guides/extreme/ex2"},
						{text: "EX3", link: "/guides/extreme/ex3"},
					],
				},
				{
					text: "Savage",
					collapsed: false,
					items: [
						{text: "M1S", link: "/guides/savage/m1s"},
						{text: "M2S", link: "/guides/savage/m2s"},
						{text: "M3S", link: "/guides/savage/m3s"},
						{text: "M4S", link: "/guides/savage/m4s"},
					],
				},
				{
					text: "Ultimate",
					collapsed: false,
					items: [
						{text: "UCOB", link: "/guides/ultimate/ucob"},
						{text: "UWU", link: "/guides/ultimate/uwu"},
						{text: "TEA", link: "/guides/ultimate/tea"},
						{text: "DSR", link: "/guides/ultimate/dsr"},
						{text: "TOP", link: "/guides/ultimate/top"},
						{text: "FRU", link: "/guides/ultimate/fru"},
					],
				},
				{
					text: "Criterion",
					collapsed: false,
					items: [
						{text: "ASS", link: "/guides/criterion/ass"},
						{text: "AMR", link: "/guides/criterion/amr"},
						{text: "AAI", link: "/guides/criterion/aai"},
					],
				},
			],
			"/guides/archive/endwalker": [
				{
					text: "Endwalker",
					items: [
						{
							text: "Extreme",
							collapsed: false,
							items: [
								{text: "EX4", link: "/guides/archive/endwalker/extreme/ex4"},
								{text: "EX5", link: "/guides/archive/endwalker/extreme/ex5"},
								{text: "EX6", link: "/guides/archive/endwalker/extreme/ex6"},
								{text: "EX7", link: "/guides/archive/endwalker/extreme/ex7"},
							],
						},
						{
							text: "Savage",
							collapsed: false,
							items: [
								{text: "P3S", link: "/guides/archive/endwalker/savage/p3s"},
								{text: "P4S", link: "/guides/archive/endwalker/savage/p4s"},
								{text: "P5S", link: "/guides/archive/endwalker/savage/p5s"},
								{text: "P6S", link: "/guides/archive/endwalker/savage/p6s"},
								{text: "P9S", link: "/guides/archive/endwalker/savage/p9s"},
								{text: "P10S", link: "/guides/archive/endwalker/savage/p10s"},
								{text: "P11S", link: "/guides/archive/endwalker/savage/p11s"},
								{text: "P12S", link: "/guides/archive/endwalker/savage/p12s"},
							],
						},
					],
				},
			],
			"/guides/archive/stormblood": [
				{
					text: "Stormblood",
					items: [
						{
							text: "Extreme",
							collapsed: false,
							items: [{text: "EX4", link: "/guides/archive/stormblood/extreme/ex4"}],
						},
					],
				},
			],
			"/resources": [
				{
					text: "Resources",
					items: [
						{text: "Visitors Guide", link: "/resources/visitorsguide"},
						{text: "Macro Mate", link: "/resources/macromate"},
						{text: "Raid Plan Templates", link: "/resources/raidplantemplates"},
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
		},
	},
	vite: {
		optimizeDeps: {
			exclude: ["vitepress"],
		},
		server: {
			proxy: {
				"/ex1": {
					target: "http://localhost:5173",
					changeOrigin: true,
					rewrite: (path) => path.replace("/ex1", "/materiaraiding/guides/ultimate/ex1"),
				},
				"/ex2": {
					target: "http://localhost:5173",
					changeOrigin: true,
					rewrite: (path) => path.replace("/ex2", "/materiaraiding/guides/ultimate/ex2"),
				},
				"/ex3": {
					target: "http://localhost:5173",
					changeOrigin: true,
					rewrite: (path) => path.replace("/ex3", "/materiaraiding/guides/ultimate/ex3"),
				},
				"/m1s": {
					target: "http://localhost:5173",
					changeOrigin: true,
					rewrite: (path) => path.replace("/m1s", "/materiaraiding/guides/savage/m1s"),
				},
				"/m2s": {
					target: "http://localhost:5173",
					changeOrigin: true,
					rewrite: (path) => path.replace("/m2s", "/materiaraiding/guides/savage/m2s"),
				},
				"/m3s": {
					target: "http://localhost:5173",
					changeOrigin: true,
					rewrite: (path) => path.replace("/m3s", "/materiaraiding/guides/savage/m3s"),
				},
				"/m4s": {
					target: "http://localhost:5173",
					changeOrigin: true,
					rewrite: (path) => path.replace("/m4s", "/materiaraiding/guides/savage/m4s"),
				},
				"/ucob": {
					target: "http://localhost:5173",
					changeOrigin: true,
					rewrite: (path) => path.replace("/ucob", "/materiaraiding/guides/ultimate/ucob"),
				},
				"/uwu": {
					target: "http://localhost:5173",
					changeOrigin: true,
					rewrite: (path) => path.replace("/uwu", "/materiaraiding/guides/ultimate/uwu"),
				},
				"/tea": {
					target: "http://localhost:5173",
					changeOrigin: true,
					rewrite: (path) => path.replace("/tea", "/materiaraiding/guides/ultimate/tea"),
				},
				"/dsr": {
					target: "http://localhost:5173",
					changeOrigin: true,
					rewrite: (path) => path.replace("/dsr", "/materiaraiding/guides/ultimate/dsr"),
				},
				"/top": {
					target: "http://localhost:5173",
					changeOrigin: true,
					rewrite: (path) => path.replace("/top", "/materiaraiding/guides/ultimate/top"),
				},
				"/fru": {
					target: "http://localhost:5173",
					changeOrigin: true,
					rewrite: (path) => path.replace("/fru", "/materiaraiding/guides/ultimate/fru"),
				},
				"/ass": {
					target: "http://localhost:5173",
					changeOrigin: true,
					rewrite: (path) => path.replace("/ass", "/materiaraiding/guides/criterion/ass"),
				},
				"/amr": {
					target: "http://localhost:5173",
					changeOrigin: true,
					rewrite: (path) => path.replace("/amr", "/materiaraiding/guides/criterion/amr"),
				},
				"/aai": {
					target: "http://localhost:5173",
					changeOrigin: true,
					rewrite: (path) => path.replace("/aai", "/materiaraiding/guides/criterion/aai"),
				},
				"/glossary": {
					target: "http://localhost:5173",
					changeOrigin: true,
					rewrite: (path) => path.replace("/glossary", "/materiaraiding/resources/glossary"),
				},
				"/visitorsguide": {
					target: "http://localhost:5173",
					changeOrigin: true,
					rewrite: (path) => path.replace("/visitorsguide", "/materiaraiding/resources/visitorsguide"),
				},
				"/macros": {
					target: "http://localhost:5173",
					changeOrigin: true,
					rewrite: (path) => path.replace("/macros", "/materiaraiding/resources/macromate"),
				},
			},
		},
	},
});
