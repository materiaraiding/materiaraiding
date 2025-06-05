<script setup lang="ts">
import GuideList from "./GuideList.vue";
import {difficultyTypes} from "./difficultyTypes";

const {isArchive, expansion} = defineProps({
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
</script>

<template>
	<div class="navblock">
		<template v-for="difficulty in difficultyTypes" :key="difficulty.type">
			<GuideList
				:difficulty="difficulty.type"
				:includeTitle="true"
				:grouping="grouping"
				:isArchiveList="isArchive"
				:expansion="expansion" />
		</template>
	</div>
</template>

<style scoped>
.navblock {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	margin-top: 1.5em;
	column-gap: 0.5rem;
	row-gap: 0.5rem;
}
</style>
