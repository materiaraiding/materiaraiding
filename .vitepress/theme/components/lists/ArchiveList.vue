<script setup>
import './lists.css';
import { data as pages } from '../loaders/archives.data.js';
import { difficultyTypes } from './difficultyTypes.js';
defineProps(['limitedList']);

/**
 * @notes - Archived extremes' frontmatter titles and banner image names
 * 					should be suffixed with their abbreviated expansion,
 * 					e.g. EX4_DT, in order to avoid conflict with current/other archived extremes.
 */

const selectedDifficulties = difficultyTypes.filter(difficulty =>
	['Extreme', 'Savage'].includes(difficulty.type)
);

const filterPagesBy = (difficulty, expansion) => {
	return pages
		.filter(p => p.frontmatter.difficulty === difficulty && p.frontmatter.expansion === expansion)
		.sort((a, b) => a.frontmatter.order - b.frontmatter.order);
};

function openPage(url) {
	window.open(url, "_self");
}
</script>

<template>
	<div class="navblock">
		<template v-for="difficulty in selectedDifficulties" :key="difficulty.type">
			<div class="navcolumn">
				<!-- Icon + Difficulty Type -->
				<div class="navtitle">
					<img class="guide_titleimg" :alt="`${difficulty.type} Icon`" :src="difficulty.icon" />
					{{ difficulty.type }}
				</div>
				<!-- Page Links -->
				<div v-for="page in filterPagesBy(difficulty.type, $frontmatter.expansion)" :key="page.url">
					<div :class="`navlink ${difficulty.colorClass}`" @click="openPage(page.url)" :style="{
						'background-image': `linear-gradient(0.75turn, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.90)), url('/images/banners/${page.frontmatter.title}.webp')`
					}">
						{{ difficulty.type === 'Extreme' ? page.frontmatter.longTitle : page.frontmatter.title }}
					</div>
				</div>
			</div>
		</template>
	</div>
</template>