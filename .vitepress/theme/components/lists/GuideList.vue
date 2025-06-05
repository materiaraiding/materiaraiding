<script setup>
import GuideButton from "./GuideButton.vue";
import { data as archive } from "../loaders/archives.data.js";
import { data as guides } from "../loaders/guides.data.js";
import { difficultyTypes } from "./difficultyTypes.js";
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

// Determine which data source to use based on whether it's an archive or not
const pages = props.isArchiveList ? archive : guides;

// Function to filter pages based on difficulty
const filterPagesBy = (difficulty, expansion) => {
	let filteredPages = (Array.isArray(pages) ? pages : [])
		.filter((p) =>
			p.frontmatter.difficulty === difficulty &&
			(!expansion || p.frontmatter.expansion === expansion)
		)
		.sort((a, b) => a.frontmatter.order - b.frontmatter.order);
	return filteredPages;
};

// Group pages by expansion (Ultimate only) or tier (Savage) or no grouping (others)
function groupPages(pages, grouping = true) {
	if (!grouping) {
		return pages;
	}
	if (difficulty.type === "Savage") {
		// Group by tier for Savage, reversed order
		const groups = {};
		for (const page of pages) {
			const tier = page.frontmatter.tier;
			if (!groups[tier]) groups[tier] = [];
			groups[tier].push(page);
		}
		// Reverse the order of the keys
		const reversed = {};
		Object.keys(groups)
			.reverse()
			.forEach((key) => {
				reversed[key] = groups[key];
			});
		return reversed;
	} else {
		// No grouping for other difficulties, just return all pages in a single group called "All"
		return { All: pages };
	}
}

// Determine the difficulty type and its associated properties from the difficultyTypes array
const difficulty = difficultyTypes.find((d) => d.type === props.difficulty);

const pageList = filterPagesBy(difficulty.type, props.expansion);

const groupedPages = groupPages(pageList, props.grouping !== false);

// State to track open/closed groups
const openGroups = ref({});

// Set all groups to open by default, except for Savage (tiers: only last open)
if (difficulty.type === "Savage") {
	const tierKeys = Object.keys(groupedPages);
	tierKeys.forEach((tier, idx) => {
		openGroups.value[tier] = idx === 0; // only first open
	});
} else {
	for (const exp in groupedPages) {
		openGroups.value[exp] = true;
	}
}

function toggleGroup(groupKey) {
	openGroups.value[groupKey] = !openGroups.value[groupKey];
}

function openPage(url) {
	if (props.isArchiveList) return;
	router.go(url.replace("/guides", "").toLowerCase());
}
</script>

<template>
	<div class="navcolumn" v-if="pageList.length != 0">
		<!-- Icon + Title -->
		<div v-if="includeTitle" class="navtitle" @click="openPage(`/${difficulty.type}/`)">
			<img class="navtitle_img" :alt="`${difficulty.type} Icon`" :src="difficulty.icon" />
			{{ difficulty.type }}
		</div>
		<!-- Grouped Page Links -->
		<div v-if="grouping" v-for="(pages, groupKey, idx) in groupedPages" :key="groupKey">
			<div v-if="groupKey === 'All'" class="all-group-header"></div>
			<div v-else-if="groupKey !== 'Other' && !(difficulty.type === 'Savage' && idx === 0)" class="group-header"
				@click="toggleGroup(groupKey)" :class="{ open: openGroups[groupKey] }">
				<svg class="arrow-icon" :class="{ open: openGroups[groupKey] }" width="16" height="16" viewBox="0 0 16 16"
					fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M6 4L10 8L6 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"
						stroke-linejoin="round" />
				</svg>
				{{ groupKey }}
			</div>
			<div v-else-if="difficulty.type === 'Savage' && idx === 0" class="first-tier-group-header"></div>
			<transition name="slide-fade">
				<div v-show="groupKey === 'All' || openGroups[groupKey] !== false || groupKey === 'Other'" class="link-group">
					<GuideButton v-for="page in pages" :key="page.url" :page="page" />
				</div>
			</transition>
		</div>
		<!-- Page links when grouping is disabled -->
		<div v-else class="link-group">
			<GuideButton v-for="page in pageList" :key="page.url" :page="page" />
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

.all-group-header {
	visibility: hidden;
}

.first-tier-group-header {
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
