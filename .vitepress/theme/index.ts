import DefaultTheme from "vitepress/theme";
import "viewerjs/dist/viewer.min.css";
import imageViewer from "vitepress-plugin-image-viewer";
import {EnhanceAppContext, useRoute} from "vitepress";
import "./custom.css";

// @ts-ignore
import YoutubeEmbed from "./components/YoutubeEmbed.vue";
// @ts-ignore
import TimingWindow from "./components/TimingWindow.vue";
// @ts-ignore
import ImageEmbed from "./components/ImageEmbed.vue";
// @ts-ignore
import StatusIcon from "./components/StatusIcon.vue";
// @ts-ignore
import Action from "./components/Action.vue";
// @ts-ignore
import ActionGroup from "./components/ActionGroup.vue";
// @ts-ignore
import CustomBlock from "./components/CustomBlock.vue";

// @ts-ignore
import guide from "./layouts/guide.vue";

export default {
	...DefaultTheme,
	Layout: guide,
	enhanceApp(ctx: EnhanceAppContext) {
		DefaultTheme.enhanceApp(ctx);
		ctx.app.component("YoutubeEmbed", YoutubeEmbed);
		ctx.app.component("TimingWindow", TimingWindow);
		ctx.app.component("ImageEmbed", ImageEmbed);
		ctx.app.component("StatusIcon", StatusIcon);
		ctx.app.component("Action", Action);
		ctx.app.component("ActionGroup", ActionGroup);
		ctx.app.component("CustomBlock", CustomBlock);
	},
	setup() {
		// Get route
		const route = useRoute();
		// Using
		imageViewer(route);
	},
};
