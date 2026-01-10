<script setup>
import GuideButton from "./GuideButton.vue";
import { data as archive } from "../loaders/archives.data";
import { data as guides } from "../loaders/guides.data";
import { difficultyTypes } from "./difficultyTypes";

const props = defineProps({
	difficulty: {
		type: String,
		required: true,
	},
	includeTitle: {
		type: Boolean,
		default: false,
	},
	isArchiveList: {
		type: Boolean,
		default: false,
	},
	expansion: {
		type: String,
		default: null,
	},
	homeList: {
		type: Object,
		default: null
	}
});

const pages = props.isArchiveList ? archive : guides;

// Filter pages by difficulty (and expansion if defined; e.g., used for distinguishing archived expansions)
const filterPages = (difficulty, expansion) => {
	let filteredPages = (Array.isArray(pages) ? pages : [])
		.filter((p) =>
			p.frontmatter.difficulty === difficulty &&
			(!expansion || p.frontmatter.expansion === expansion) &&
			(!props.homeList || props.homeList[difficulty]?.includes(p.frontmatter.fightID))
		)
		.sort((a, b) => a.frontmatter.order - b.frontmatter.order);
	return filteredPages;
};

const filteredPages = filterPages(props.difficulty, props.expansion);
const difficulty = difficultyTypes.find(d => d.type === props.difficulty);

</script>

<template>
	<div class="navcolumn" v-if="filteredPages.length != 0">
		<!-- Icon + Title -->
		<a v-if="includeTitle" :href="`/${difficulty.urlOverride ?? difficulty.type}/`.toLowerCase()" class="navtitle">
			<img class="navtitle_img" :alt="`${difficulty.type} Icon`" :src="difficulty.icon" />
			{{ difficulty.type }}
			<span data-v-d90ee278="" class="vpi-chevron-down header-arrow"></span>
		</a>
		<!-- Page links -->
		<div class="link-group">
			<GuideButton v-for="page in filteredPages" :key="page.url" :page="page" />
		</div>
	</div>
</template>

<style scoped>
.navcolumn {
	display: flex;
	flex-direction: column;
	gap: 0.3em;
}

.link-group {
	display: flex;
	flex-direction: column;
	gap: 0.5em;
}

.navtitle {
	color: inherit;
	display: flex;
	height: 50px;
	margin-top: 16.5px;
	margin-bottom: 4.8px;
	padding-top: 12px;
	letter-spacing: -0.02em;
	font-size: 1.4em;
	font-weight: 600;
	text-decoration: none;
	outline: none;
	cursor: pointer;
	transition: 0.2s ease;
	align-content: center;
	user-select: none;
	align-items: center;

	&:hover {
		color: var(--vp-c-brand);
	}
}

.navtitle_img {
	height: 1.2em;
	margin-right: 7px;
	margin-left: 7px;
	box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
}

.header-arrow {
	transform: none;
	opacity: 0.5;
}

.group-header {
	font-size: 1em;
	font-weight: 500;
	padding: 0.5em 0 0 0;
	cursor: pointer;
	display: flex;
	align-items: center;
	user-select: none;
	transition: color 0.2s ease;
	color: var(--vp-c-text-3);
}

.group-header.open {
	color: var(--vp-c-text-1);
	padding-bottom: 0.5em;
}

.group-header:hover {
	color: var(--vp-c-text-1);
}

.arrow-icon {
	margin-right: 0.4em;
	transition: transform 0.2s;
}

.arrow-icon.open {
	transform: rotate(90deg);
}

.ungrouped-header {
	visibility: hidden;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
	transition:
		max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1),
		opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	overflow: hidden;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
	max-height: 0;
	opacity: 0;
}

.slide-fade-enter-to,
.slide-fade-leave-from {
	max-height: 500px;
	opacity: 1;
}
</style>
