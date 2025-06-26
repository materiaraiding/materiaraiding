<script setup>
import GuideList from "./GuideList.vue";
import { difficultyTypes } from "./difficultyTypes";
import { data as archivePages } from "../loaders/archives.data";
import { computed, ref, onMounted, onBeforeUnmount } from 'vue';

const { isArchive, expansion, grouping } = defineProps({
	isArchive: {
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

let breakpoints = { default: 5, 1250: 4, 1000: 3, 700: 2, 400: 1 };
breakpoints = (isArchive && expansion) ? getArchiveColumns(expansion) : breakpoints;

const columnCount = ref(breakpoints.default);
const columns = computed(() => {
	const cols = Array.from({ length: columnCount.value }, () => []);
	difficultyTypes.forEach((item, i) => {
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
			<GuideList v-for="difficulty in column" :key="difficulty.type" :difficulty="difficulty.type" :includeTitle="true"
				:grouping="grouping" :isArchiveList="isArchive" :expansion="expansion" />
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
