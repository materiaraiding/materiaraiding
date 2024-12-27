<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from "vitepress/theme";
import {useData} from "vitepress";
import {computed} from "vue";

const {Layout} = DefaultTheme;
const {frontmatter} = useData();

const dutyType = computed(() => {
	switch (frontmatter.value.difficulty?.toLowerCase()) {
		case "savage":
			return "raid";
		case "extreme":
			return "trial";
		default:
			return "highendduty";
	}
});
</script>

<template>
	<Layout>
		<template #doc-before>
			<img
				v-if="frontmatter.image"
				:src="`/materiaraiding/images/${frontmatter.image}`"
				alt="DKT"
				width="150"
				style="float: right" />
			<div v-if="frontmatter.expansion && frontmatter.difficulty" class="guide_subtitle">
				{{ frontmatter.expansion }} - {{ frontmatter.difficulty }}
			</div>
			<h1 v-if="frontmatter.longTitle" class="guide_title" id="{{frontmatter.longTitle}}">
				<img :src="`/materiaraiding/images/icons/${dutyType}.webp`" /> {{ frontmatter.longTitle }}
				<a href="{{frontmatter.title}}" class="header-anchor" />
			</h1>
			<div v-if="frontmatter.difficulty" class="guide_label_box">
				<a
					v-if="frontmatter.difficulty?.toLowerCase() === 'ultimate'"
					href="https://discord.gg/mur"
					class="guide_label label_mur">
					MUR Strat
				</a>
				<a v-else href="https://discord.gg/EySn5dRj65" class="guide_label label_pf"> MR Strat </a>
				<a
					v-if="frontmatter.discussionLink"
					:href="frontmatter.discussionLink"
					class="guide_label label_discussion">
					Join Discussion
				</a>
			</div>
		</template>
	</Layout>
</template>

<style scoped>
.guide_subtitle {
	text-transform: uppercase;
	font-weight: 500;
	color: grey;
}
.guide_title img {
	display: inline;
	height: 1em;
	vertical-align: bottom;
	margin-right: 7px;
	margin-bottom: 3px;
	box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
}
.guide_title {
	font-weight: 600;
	position: relative;
	letter-spacing: -0.02em;
	line-height: 40px;
	font-size: 32px;
	margin: 0.1em 0 0.5em;
}
.label_mur {
	background: var(--vp-c-purple-3);
}
.label_pf {
	background: var(--vp-c-red-3);
}
.label_discussion {
	background: var(--vp-c-indigo-3);
}
.guide_label {
	width: fit-content;
	padding: 1px 6px 1px 6px;
	border-radius: 8px;
	color: var(--vp-c-text-1);
	font-weight: 500;
	font-size: small;
	cursor: pointer;
}
.guide_label_box {
	display: flex;
	flex-wrap: wrap;
	gap: 0.4rem;
}
.header-anchor {
	position: absolute;
	top: 0;
	left: 0;
	margin-left: -0.87em;
	font-weight: 500;
	user-select: none;
	opacity: 0;
	text-decoration: none;
	transition:
		color 0.25s,
		opacity 0.25s;
	color: var(--vp-c-brand-1);
	text-underline-offset: 2px;
}
.guide_title:hover .header-anchor {
	opacity: 1;
}
.header-anchor::before {
	content: var(--vp-header-anchor-symbol);
}
</style>
