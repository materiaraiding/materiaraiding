import DefaultTheme from "vitepress/theme";
import "viewerjs/dist/viewer.min.css";
import imageViewer from "vitepress-plugin-image-viewer";
import { EnhanceAppContext, useRoute } from "vitepress";
import "./custom.css";
import FloatingVue, { createTooltip } from "floating-vue";
import "floating-vue/dist/style.css";

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
import useRouterLoadingBar from "./hooks/useRouterLoadingBar";

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
					delay: { show: 100, hide: 200 },
					html: true,
				},
			},
		});

		// DOM injections go in here
		if (typeof window !== "undefined") {
			window.createTooltip = createTooltip;

			const loadingBar = useRouterLoadingBar();
			let startTime = 0;
			let duration = 0;
			let displayOffset: NodeJS.Timeout;
			const displayThreshold = 60; // In milliseconds, the time treshold in order for the loading bar to display.

			ctx.router.onBeforePageLoad = () => {
				clearTimeout(displayOffset);
				startTime = performance.now();
				displayOffset = setTimeout(() => loadingBar.loading(), displayThreshold);
			};

			ctx.router.onAfterPageLoad = () => {
				const endTime = performance.now();
				duration = endTime - startTime;
				if (duration < displayThreshold) {
					clearTimeout(displayOffset);
					return;
				}
				setTimeout(() => loadingBar.finished(), displayThreshold);
			};
		}
	},
	setup() {
		// Get route
		const route = useRoute();
		// Using
		imageViewer(route);
	},
};
