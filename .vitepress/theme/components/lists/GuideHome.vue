<script setup>
import GuideList from "./GuideList.vue";
import { difficultyTypes } from "./difficultyTypes";
import { data as archivePages } from "../loaders/archives.data";
import { computed, ref, onMounted, onBeforeUnmount } from 'vue';
import { homeList } from "./homeList";

const { isArchive, expansion, showAll } = defineProps({
	isArchive: {
		type: Boolean,
		default: false,
	},
	expansion: {
		type: String,
		default: null,
	},
	showAll: {
		type: Boolean,
		default: false,
	}
});

let breakpoints = { default: 5, 1250: 4, 1000: 3, 700: 2, 400: 1 };
breakpoints = (isArchive && expansion) ? getArchiveColumns(expansion) : breakpoints;

const columnCount = ref(breakpoints.default);
const columns = computed(() => {
	const cols = Array.from({ length: columnCount.value }, () => []);
	// Sort difficulties by their homeNavOrder property before distributing to columns
	const sortedDifficulties = [...difficultyTypes].sort((a, b) => a.homeNavOrder - b.homeNavOrder);
	sortedDifficulties
		.filter(diff => showAll || homeList[diff.type]) // If the homeList doesn't include the difficulty, filter it out.
		.forEach((item, i) => {
			cols[i % columnCount.value].push(item);
		});
	return cols;
});

function getArchiveColumns(expansion) {
	const difficulties = new Map();
	archivePages
		.filter(p => p.frontmatter.expansion === expansion)
		.forEach(p => difficulties.set(p.frontmatter.difficulty, null));

	if (difficulties.size >= breakpoints.default) {
		return breakpoints;
	}

	const trimmedCols = { default: difficulties.size };
	for (const [bp, cols] of Object.entries(breakpoints)) {
		if (bp !== "default" && cols <= difficulties.size) {
			trimmedCols[bp] = cols;
		}
	}

	return trimmedCols;
}

function updateColumnCount() {
	const width = window.innerWidth;
	for (const [bp, cols] of Object.entries(breakpoints)) {
		if (width <= bp && bp !== "default") {
			columnCount.value = cols;
			return;
		}
	}
	columnCount.value = breakpoints.default;
}

onMounted(() => {
	updateColumnCount();
	window.addEventListener('resize', updateColumnCount);
});

onBeforeUnmount(() => {
	window.removeEventListener('resize', updateColumnCount);
});
</script>

<template>
	<div class="navblock">
		<div v-for="(column, colIndex) in columns" :key="colIndex" class="masonry-column">
			<GuideList v-for="difficulty in column" :key="difficulty.type" :difficulty="difficulty.type" :includeTitle="true" :isArchiveList="isArchive" :expansion="expansion"
				:fightIDs="!isArchive && !showAll ? homeList[difficulty.type] : null" />
		</div>
	</div>
</template>

<style scoped>
.navblock {
	display: flex;
	gap: 1rem;
	align-items: flex-start;
}

.masonry-column {
	display: flex;
	flex-direction: column;
	flex: 1;
}
</style>
