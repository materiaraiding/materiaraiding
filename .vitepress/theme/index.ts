import DefaultTheme from "vitepress/theme";
import "viewerjs/dist/viewer.min.css";
import imageViewer from "vitepress-plugin-image-viewer";
import { EnhanceAppContext, useRoute } from "vitepress";
import "./custom.css";
import FloatingVue, { createTooltip } from 'floating-vue'
import 'floating-vue/dist/style.css'

// @ts-ignore
import YoutubeEmbed from "./components/YoutubeEmbed.vue";
// @ts-ignore
import TimingWindow from "./components/TimingWindow.vue";
// @ts-ignore
import ImageEmbed from "./components/ImageEmbed.vue";
// @ts-ignore
import StatusIcon from "./components/StatusIcon.vue";
// @ts-ignore
import Macro from "./components/Macro.vue";
// @ts-ignore
import Raidplan from "./components/Raidplan.vue";
// @ts-ignore
import Action from "./components/Action.vue";
// @ts-ignore
import ActionGroup from "./components/ActionGroup.vue";
// @ts-ignore
import CustomBlock from "./components/CustomBlock.vue";
// @ts-ignore
import PageList from "./components/lists/PageList.vue";
// @ts-ignore
import ArchiveList from "./components/lists/ArchiveList.vue";

// @ts-ignore
import guide from "./layouts/guide.vue";

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
		ctx.app.component("Macro", Macro);
		ctx.app.component("StatusIcon", StatusIcon);
		ctx.app.component("Raidplan", Raidplan);
		ctx.app.component("Action", Action);
		ctx.app.component("ActionGroup", ActionGroup);
		ctx.app.component("CustomBlock", CustomBlock);
		ctx.app.component("PageList", PageList);
		ctx.app.component("ArchiveList", ArchiveList);
		ctx.app.use(FloatingVue, {
			boundary: 'body',
			themes: {
				'glossary-tooltip': {
					$extend: 'tooltip',
					hideTriggers: (events: string[]) => events,
					instantMove: true,
					delay: { show: 100, hide: 200 },
					html: true,
				}
			},
		});

		if (typeof window !== 'undefined') {
			window.createTooltip = createTooltip;
		}
	},
	setup() {
		// Get route
		const route = useRoute();
		// Using
		imageViewer(route);
	},
};
