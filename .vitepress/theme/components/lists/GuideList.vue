<script setup>
import GuideButton from "./GuideButton.vue";
import { data as archive } from "../loaders/archives.data";
import { data as guides } from "../loaders/guides.data";
import { difficultyTypes } from "./difficultyTypes";
import { useRouter } from "vitepress";
import { ref } from "vue";

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
const filterPages = (difficulty, expansion) => {
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
		const savageGroups = groupByFrontmatter(pages, "tier");
		const latestTierKey = Object.keys(savageGroups).at(-1);
		return bringToFront(savageGroups, latestTierKey);
	// if () {... insert other grouping conditions in the future if needed E.g. "Expansion"
	} else {
		return { ungrouped: pages };
	}
}

// Grouping utilities
function groupByFrontmatter(pages, fm) {
	return pages.reduce(((group, p) => {
		const value = p.frontmatter[fm];
		if (!group[value]) group[value] = [];
		group[value].push(p);
		return group;
	}), {});
}
function bringToFront(groups, key) {
	return ({
		[key]: groups[key],
		...Object.fromEntries(Object.entries(groups).filter(([k]) => k !== key))
	});
}

const difficulty = difficultyTypes.find(d => d.type === props.difficulty);
const filteredPages = filterPages(difficulty.type, props.expansion);
const groupedPages = groupPages(filteredPages, props.grouping);

const openGroups = ref((() => {
	// Collapse all previous savage tier groups, except the current
	if (difficulty.type === "Savage") {
		return Object.fromEntries(
			Object.keys(groupedPages).map((key, index) => [key, index === 0])
		);
	}
	// Open others by default
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
	display: flex;
	height: 50px;
	margin-top: 16.5px;
	margin-bottom: 4.8px;
	padding-top: 12px;
	letter-spacing: -0.02em;
	font-size: 1.4em;
	font-weight: 600;
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

.group-header {
	font-size: 1em;
	font-weight: 500;
	padding: 0.5em 0;
	cursor: pointer;
	display: flex;
	align-items: center;
	/* justify-content: center; */
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
