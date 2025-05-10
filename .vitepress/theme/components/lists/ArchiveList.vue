<script setup>
import './lists.css';
import { data as pages } from '../loaders/archives.data.js';
import { difficultyTypes } from './difficultyTypes.js';
import { useData, useRouter } from 'vitepress';

/**
 * @notes - Archived expansion banner images should be
 *          moved to '/images/banners/archived/<expansion>' to avoid conflicts with Extremes.
 */

const { frontmatter } = useData();
const router = useRouter();

const selectedDifficultyTypes = difficultyTypes.filter(difficulty =>
	frontmatter.value.difficulties.includes(difficulty.type)
);

const filterPagesBy = (difficulty, expansion) => {
	return pages
		.filter(p => p.frontmatter.difficulty === difficulty && p.frontmatter.expansion === expansion)
		.sort((a, b) => a.frontmatter.order - b.frontmatter.order);
};

function openPage(url) {
	router.go(url);
}
</script>

<template>
	<div class="navblock">
		<template v-for="difficulty in selectedDifficultyTypes" :key="difficulty.type">
			<div class="navcolumn">
				<!-- Icon + Difficulty Type -->
				<div class="navtitle">
					<img class="guide_titleimg" :alt="`${difficulty.type} Icon`" :src="difficulty.icon" />
					{{ difficulty.type }}
				</div>
				<!-- Page Links -->
				<div v-for="page in filterPagesBy(difficulty.type, $frontmatter.expansion)" :key="page.url">
					<div :class="`navlink ${difficulty.colorClass}`" @click="openPage(page.url)" :style="{
						'background-image': `linear-gradient(0.75turn, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.90)), url('/images/banners/archived/${$frontmatter.expansion.toLowerCase()}/${page.frontmatter.title}.webp')`
					}">
						{{ page.frontmatter.title }}
					</div>
				</div>
			</div>
		</template>
	</div>
</template>