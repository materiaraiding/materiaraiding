<script setup>
import { data as guides } from '../loaders/guides.data.js';
import { data as archives } from '../loaders/archives.data';
import { difficultyTypes } from './difficultyTypes.js';
import { useData, useRouter } from 'vitepress';

/**
 * @notes - Banner images are trimmed down versions of the banners published by SE, these are sourced from the consolegames wiki
 *          Trim the original images down to remove the transparent fade in the original images
 *          Original Size: 280x89
 *          Trimmed Size: 272x81
 */

const pageData = useData();
const router = useRouter();

/**
 * @param {string | string[]} limitedList - The difficulty type to filter by.
 * @param {string} listType - Loaded list type.
 * @param {string} expansion - The expansion to filter by (required for archive lists).
 * 
 * @example
 * <PageList limitedList="Savage" listType="guides" />
 * <PageList :limitedList="['Savage', 'Extreme']" listType="archives" expansion="Endwalker" />
 */
const props = defineProps(['limitedList', 'listType', 'expansion']);

const lists = {
	"guides": guides,
	"archives": archives
};

function filterPagesBy(difficulty, expansion) {
	let filteredPages = lists[props.listType]
		.filter(p =>
			p.frontmatter.difficulty === difficulty &&
			(!expansion || p.frontmatter.expansion === expansion)
		)
		.sort((a, b) => a.frontmatter.order - b.frontmatter.order);

	if (difficulty === 'Savage' && pageData.frontmatter.value.layout === 'home') {
		return filteredPages.slice(-4); // Limit to the last 4 pages for Savage
	} else {
		return filteredPages;
	}
};

function openPage(url) {
	router.go(url.replace("/guides", '').toLowerCase());
}
</script>

<template>
	<div class="navblock">
		<template v-for="difficulty in difficultyTypes" :key="difficulty.type">
			<div class="navcolumn"
				v-if="!limitedList || limitedList === difficulty.type || limitedList.includes(difficulty.type)">
				<!-- Icon + Difficulty Type -->
				<div v-if="$frontmatter.layout === 'home'" class="navtitle" @click="openPage(`/${difficulty.type}/`)">
					<img class="guide_titleimg" :alt="`${difficulty.type} Icon`" :src="difficulty.icon" />
					{{ difficulty.type }}
				</div>
				<!-- Page Links -->
				<div v-for="page in filterPagesBy(difficulty.type, props.expansion)" :key="page.url">
					<div :class="`navlink ${difficulty.colorClass}`" @click="openPage(page.url)" :style="{
						'background-image': `linear-gradient(0.75turn, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.90)), url('${page.frontmatter.banner}')`
					}">
						{{ page.frontmatter.fightID }}
					</div>
				</div>
			</div>
		</template>
	</div>
</template>

<style scoped>
.navtitle {
	height: 60px;
	letter-spacing: -0.02em;
	line-height: 32px;
	font-size: 24px;
	font-weight: 600;
	outline: none;
	cursor: pointer;
	transition: 0.2s ease;
	align-content: center;

	&:hover {
		color: var(--vp-c-brand);
		text-shadow: #000000 0 0 3px;
	}
}

.navblock {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	margin-top: 1.5em;
	column-gap: 0.5rem;
	row-gap: 0.5rem;
}

.navcolumn {
	display: flex;
	flex-direction: column;
	margin-bottom: 0.5em;
	;
	gap: 0.5em;
}

.navlink {
	height: 60px;
	border-radius: 8px;
	border: 3px solid;
	background-color: #302d36;
	padding: 0.5em 0.5em 0.4em 0.5em;
	font-size: 1.3em;
	display: flex;
	align-items: flex-end;
	transition: 0.2s ease;
	background-size: cover;
	background-position: center;
	cursor: pointer;
	box-shadow: 0 3px 10px rgba(0, 0, 0, 0.25);
	text-shadow: 3px 3px 5px rgba(0, 0, 0, 1);
	font-weight: 500;
	max-width: 400px;

	&:hover {
		color: #ffffff;
		border: 3px solid #ffffff;
		padding: 0.5em 0.5em 0.4em 0.6em;
		box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
	}
}

.guide_titleimg {
	display: inline;
	height: 1em;
	vertical-align: bottom;
	margin-right: 7px;
	margin-bottom: 3px;
	box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
}

.chaotic-color {
	color: var(--color-chaotic);
	border-color: var(--color-chaotic);
}

.ultimate-color {
	color: var(--color-ultimate);
	border-color: var(--color-ultimate);
}

.savage-color {
	color: var(--color-savage);
	border-color: var(--color-savage);
}

.extreme-color {
	color: var(--color-extreme);
	border-color: var(--color-extreme);
}

.criterion-color {
	color: var(--color-criterion);
	border-color: var(--color-criterion);
}

.unreal-color {
	color: var(--color-other);
	border-color: var(--color-other);
}

.fieldops-color {
	color: var(--color-fieldops);
	border-color: var(--color-fieldops);
}
</style>