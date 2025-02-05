<script setup>
import './lists.css';
import { data as pages } from '../loaders/guides.data.js';
import { difficultyTypes } from './difficultyTypes.js';
defineProps(['limitedList']);

const filterPagesBy = (difficulty) => {
	return pages
		.filter(p => p.frontmatter.difficulty === difficulty)
		.sort((a, b) => a.frontmatter.order - b.frontmatter.order);
};

function openPage(url) {
	let strippedUrl = url.replace("/guides", '');
	window.open(strippedUrl, "_self");
}
</script>

<template>
	<div class="navblock">
		<template v-for="difficulty in difficultyTypes" :key="difficulty.type">
			<div class="navcolumn" v-if="(limitedList === difficulty.type.toLowerCase()) || (limitedList == null)">
				<!-- Icon + Difficulty Type -->
				<div class="navtitle">
					<img class="guide_titleimg" :alt="`${difficulty.type} Icon`" :src="difficulty.icon" />
					{{ difficulty.type }}
				</div>
				<!-- Page Links -->
				<div v-for="page in filterPagesBy(difficulty.type)" :key="page.url">
					<div :class="`navlink ${difficulty.colorClass}`" @click="openPage(page.url)" :style="{
						'background-image': `linear-gradient(0.75turn, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.90)), url('/images/banners/${page.frontmatter.title}.webp')`
					}">
						{{ page.frontmatter.title }}
					</div>
				</div>
			</div>
		</template>
	</div>
</template>