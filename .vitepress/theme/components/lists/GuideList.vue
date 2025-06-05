<script setup>
import GuideButton from "./GuideButton.vue";
import { data as archive } from "../loaders/archives.data.js";
import { data as guides } from "../loaders/guides.data.js";
import { difficultyTypes } from "./difficultyTypes.js";
import { useRouter } from "vitepress";
import { ref } from "vue";

const CURRENT_TIER = "AAC Cruiserweight";

const router = useRouter();
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
	grouping: {
		type: Boolean,
		default: false,
	},
});

const pages = props.isArchiveList ? archive : guides;

// Filter pages by difficulty (and expansion if defined)
const filterPagesBy = (difficulty, expansion) => {
	let filteredPages = (Array.isArray(pages) ? pages : [])
		.filter((p) =>
			p.frontmatter.difficulty === difficulty &&
			(!expansion || p.frontmatter.expansion === expansion)
		)
		.sort((a, b) => a.frontmatter.order - b.frontmatter.order);
	return filteredPages;
};

// Main grouping logic
function groupPages(pages, grouping) {
	if (!grouping) {
		return pages;
	}
	if (difficulty.type === "Savage") {
		return bringToFront(groupByFrontmatter(pages, "tier"), CURRENT_TIER);
	// if () {... insert other grouping conditions in the future if needed E.g. "Expansion"
	} else {
		return { ungrouped: pages };
	}
}

// Grouping utilities
function groupByFrontmatter(pages, value) {
	return pages.reduce(((group, p) => {
		const fm = p.frontmatter[value];
		if (!group[fm]) group[fm] = [];
		group[fm].push(p);
		return group;
	}), {});
}
function bringToFront(groups, key) {
	return ({
		[key]: groups[key],
		...Object.fromEntries(Object.entries(groups).filter(([k]) => k !== key))
	});
}

const difficulty = difficultyTypes.find((d) => d.type === props.difficulty);
const filteredPages = filterPagesBy(difficulty.type, props.expansion);
const groupedPages = groupPages(filteredPages, props.grouping);

const openGroups = ref((() => {
	if (difficulty.type === "Savage") {
		return Object.fromEntries(
			Object.keys(groupedPages).map((key, index) => [key, index === 0])
		);
	}
	return Object.fromEntries(
		Object.keys(groupedPages).map(key => [key, true])
	);
})());

function toggleGroup(key) {
	openGroups.value[key] = !openGroups.value[key];
}

function openPage(url) {
	if (props.isArchiveList) return;
	router.go(url.replace("/guides", "").toLowerCase());
}
</script>

<template>
	<div class="navcolumn" v-if="filteredPages.length != 0">
		<!-- Icon + Title -->
		<div v-if="includeTitle" class="navtitle" @click="openPage(`/${difficulty.urlOverride ?? difficulty.type}/`)">
			<img class="navtitle_img" :alt="`${difficulty.type} Icon`" :src="difficulty.icon" />
			{{ difficulty.type }}
		</div>
		<!-- Grouped Page Links -->
		<div v-if="grouping" v-for="(pages, key, index) in groupedPages" :key="key">
			<div v-if="key === 'ungrouped'" class="ungrouped-header"></div>
			<div v-else-if="!(difficulty.type === 'Savage' && index === 0)" class="group-header" @click="toggleGroup(key)"
				:class="{ open: openGroups[key] }">
				<svg class="arrow-icon" :class="{ open: openGroups[key] }" width="16" height="16" viewBox="0 0 16 16"
					fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M6 4L10 8L6 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"
						stroke-linejoin="round" />
				</svg>
				{{ key }}
			</div>
			<transition name="slide-fade">
				<div v-show="openGroups[key] !== false" class="link-group">
					<GuideButton v-for="page in pages" :key="page.url" :page="page" />
				</div>
			</transition>
		</div>
		<!-- Page links when grouping is disabled -->
		<div v-else class="link-group">
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
	height: 50px;
	letter-spacing: -0.02em;
	line-height: 32px;
	font-size: 24px;
	font-weight: 600;
	outline: none;
	cursor: pointer;
	transition: 0.2s ease;
	align-content: center;
	user-select: none;

	&:hover {
		color: var(--vp-c-brand);
	}
}

.navtitle_img {
	display: inline;
	height: 1em;
	vertical-align: bottom;
	margin-right: 7px;
	margin-bottom: 3px;
	box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
}

.group-header {
	font-size: 1em;
	font-weight: 500;
	margin-top: 0.2em;
	margin-bottom: 0.4em;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	user-select: none;
	transition: color 0.2s ease;
	color: var(--vp-c-text-3);
}

.group-header.open {
	color: var(--vp-c-text-1);
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
