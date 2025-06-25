<script setup>
import GuideList from "./GuideList.vue";
import { difficultyTypes } from "./difficultyTypes";
import { data as archivePages } from "../loaders/archives.data";

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

const defaultCols = { default: 5, 1250: 4, 1000: 3, 700: 2, 400: 1 };

function getArchiveColumns(expansion) {
	const difficulties = new Map();
	archivePages
		.filter(p => p.frontmatter.expansion === expansion)
		.forEach(p => difficulties.set(p.frontmatter.difficulty, null));

	if (difficulties.size > defaultCols.default) {
		return defaultCols;
	}

	const trimmedCols = { default: difficulties.size };
	for (const [key, value] of Object.entries(defaultCols)) {
		if (key !== "default" && value <= difficulties.size) {
			trimmedCols[key] = value;
		}
	}

	return trimmedCols;
}
</script>

<template>
	<masonry :cols="isArchive ? getArchiveColumns(expansion) : defaultCols" class="navblock">
		<template v-for="difficulty in difficultyTypes" :key="difficulty.type">
			<GuideList 
				:difficulty="difficulty.type" 
				:includeTitle="true" 
				:grouping="grouping" 
				:isArchiveList="isArchive"
				:expansion="expansion" 
			/>
		</template>
	</masonry>
</template>

<style scoped>
.navblock {
	margin-top: 16px;
	column-gap: 0.8rem;
	/* flex-direction: row-reverse;  */
}
</style>
