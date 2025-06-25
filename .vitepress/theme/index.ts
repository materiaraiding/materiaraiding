import DefaultTheme from "vitepress/theme";
import "viewerjs/dist/viewer.min.css";
import imageViewer from "vitepress-plugin-image-viewer";
import {EnhanceAppContext, useRoute} from "vitepress";
import "./custom.css";
import FloatingVue, {createTooltip} from "floating-vue";
import "floating-vue/dist/style.css";
import masonry from "vue-next-masonry";

// Nolebase imports
import {InjectionKey, LayoutMode, Options} from "@nolebase/vitepress-plugin-enhanced-readabilities"
import "@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css";

import YoutubeEmbed from "./components/YoutubeEmbed.vue";
import TimingWindow from "./components/TimingWindow.vue";
import ImageEmbed from "./components/ImageEmbed.vue";
import StatusIcon from "./components/StatusIcon.vue";
import Raidplan from "./components/Raidplan.vue";
import Action from "./components/Action.vue";
import ActionGroup from "./components/ActionGroup.vue";
import CustomBlock from "./components/CustomBlock.vue";
import GuideList from "./components/lists/GuideList.vue";
import GuideButton from "./components/lists/GuideButton.vue";
import GuideHome from "./components/lists/GuideHome.vue";
import PartyFinder from "./components/PartyFinder.vue";
import guide from "./layouts/guide.vue";
import { PluginOption } from "vite";

declare global {
	interface Window {
		createTooltip: typeof createTooltip;
	}
}

export default {
	extends: DefaultTheme,
	Layout: guide,
	enhanceApp(ctx: EnhanceAppContext) {
		DefaultTheme.enhanceApp(ctx);
		ctx.app.component("YoutubeEmbed", YoutubeEmbed);
		ctx.app.component("TimingWindow", TimingWindow);
		ctx.app.component("ImageEmbed", ImageEmbed);
		ctx.app.component("StatusIcon", StatusIcon);
		ctx.app.component("Raidplan", Raidplan);
		ctx.app.component("Action", Action);
		ctx.app.component("ActionGroup", ActionGroup);
		ctx.app.component("CustomBlock", CustomBlock);
		ctx.app.component("GuideList", GuideList);
		ctx.app.component("GuideButton", GuideButton);
		ctx.app.component("GuideHome", GuideHome);
		ctx.app.component("PartyFinder", PartyFinder);
		ctx.app.use(FloatingVue, {
			boundary: "body",
			themes: {
				"glossary-tooltip": {
					$extend: "tooltip",
					hideTriggers: (events: string[]) => events,
					instantMove: true,
					delay: {show: 100, hide: 200},
					html: true,
				},
			},
		});

		masonry.install(ctx.app, {} as PluginOption);

		if (typeof window !== "undefined") {
			window.createTooltip = createTooltip;
		}

		// Implement options for enhanced readabilities plugin
		ctx.app.provide(InjectionKey, {
			layoutSwitch: {
				defaultMode: LayoutMode.Original,
				contentLayoutMaxWidth: {
					default: "2000",
				}
			},
			spotlight: {
				disabled: true
			}
		} as Options);
	},
	setup() {
		// Get route
		const route = useRoute();
		// Using
		imageViewer(route);
	},
};
