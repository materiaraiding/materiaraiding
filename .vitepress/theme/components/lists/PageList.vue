<script setup>
import './lists.css';
import { data as pages } from '../loaders/guides.data.js';
import { difficultyTypes } from './difficultyTypes.js';
import { useData } from 'vitepress'
let pageData = useData();
defineProps(['limitedList']);

/**
 * @notes - Ensure frontmatter titles match image banner names, 
 *          e.g. title: M4S === M4S.webp, since the banner image is soft-coded in,
 *          i.e. ${page.frontmatter.title}.webp
 *
 *          Banner images are trimmed down versions of the banners published by SE, these are sourced from the consolegames wiki
 *          Trim the original images down to remove the transparent fade in the original images
 *          Original Size: 280x89
 *          Trimmed Size: 272x81
 */

const filterPagesBy = (difficulty) => {
  let filteredPages = pages
      .filter(p => p.frontmatter.difficulty === difficulty)
      .sort((a, b) => a.frontmatter.order - b.frontmatter.order)

  if (difficulty === 'Savage' && pageData.frontmatter.value.layout === 'home') {
    return filteredPages.slice(-4); // Limit to the last 4 pages for Savage
  } else {
    return filteredPages;
  }
};

function openPage(url) {
	let strippedUrl = url.replace("/guides", '').toLowerCase();
	window.open(strippedUrl, "_self");
}
</script>

<template>
	<div class="navblock">
		<template v-for="difficulty in difficultyTypes" :key="difficulty.type">
			<div class="navcolumn" v-if="(limitedList === difficulty.type.toLowerCase()) || (limitedList == null)">
				<!-- Icon + Difficulty Type -->
				<div v-if="pageData.frontmatter.value.layout === 'home'" class="navtitle" @click="openPage(`/${difficulty.type}/`)">
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