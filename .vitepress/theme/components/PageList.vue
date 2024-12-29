<script setup>
import { data as pages } from './posts.data.js'
let extremePages = pages.filter(p => p.frontmatter.difficulty === 'Extreme')
let savagePages = pages.filter(p => p.frontmatter.difficulty === 'Savage')
let ultimatePages = pages.filter(p => p.frontmatter.difficulty === 'Ultimate')
let chaoticPages = pages.filter(p => p.frontmatter.difficulty === 'Chaotic')
let criterionPages = pages.filter(p => p.frontmatter.difficulty === 'Criterion')
let otherPages = pages.filter(p => p.frontmatter.difficulty === 'Other Content')

function openPage (url) {
	window.open(url,"_self")
}
</script>

<template>
	<div class="navblock">
		<div class="navcolumn">
			<div class="navtitle"><img class="guide_titleimg" src='images/icons/trial.webp'/>Extreme</div>
			<div v-for="page in extremePages">
				<div class="navlink" @click="openPage(page.url)" v-bind:style="{ 'background-image': 'linear-gradient(0.75turn, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.90)),url(' + '/images/banners/' + page.frontmatter.title + '.webp' + ')' }">{{ page.frontmatter.title }}</div>
			</div>
		</div>
		<div class="navcolumn">
			<div class="navtitle"><img class="guide_titleimg" src='images/icons/chaotic.webp'/>Chaotic</div>
			<div v-for="page in chaoticPages">
				<div class="navlink" @click="openPage(page.url)" v-bind:style="{ 'background-image': 'linear-gradient(0.75turn, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.90)),url(' + '/images/banners/' + page.frontmatter.title + '.webp' + ')' }">{{ page.frontmatter.title }}</div>
			</div>
		</div>
		<div class="navcolumn">
			<div class="navtitle"><img class="guide_titleimg" src='images/icons/raid.webp'/>Savage</div>
			<div v-for="page in savagePages">
				<div class="navlink" @click="openPage(page.url)" v-bind:style="{ 'background-image': 'linear-gradient(0.75turn, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.90)),url(' + '/images/banners/' + page.frontmatter.title + '.webp' + ')' }">{{ page.frontmatter.title }}</div>
			</div>
		</div>
		<div class="navcolumn">
			<div class="navtitle"><img class="guide_titleimg" src='images/icons/highendduty.webp'/>Ultimate</div>
			<div v-for="page in ultimatePages">
				<div class="navlink" @click="openPage(page.url)" v-bind:style="{ 'background-image': 'linear-gradient(0.75turn, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.90)),url(' + '/images/banners/' + page.frontmatter.title + '.webp' + ')' }">{{ page.frontmatter.title }}</div>
			</div>
		</div>
		<div class="navcolumn">
			<div class="navtitle"><img class="guide_titleimg" src='images/icons/variant.webp'/>Criterion</div>
			<div v-for="page in criterionPages">
				<div class="navlink" @click="openPage(page.url)" v-bind:style="{ 'background-image': 'linear-gradient(0.75turn, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.90)),url(' + '/images/banners/' + page.frontmatter.title + '.webp' + ')' }">{{ page.frontmatter.title }}</div>
			</div>
		</div>
		<div class="navcolumn">
			<div class="navtitle"><img class="guide_titleimg" src='images/icons/trial.webp'/>Other Content</div>
			<div v-for="page in otherPages">
				<div class="navlink" @click="openPage(page.url)" v-bind:style="{ 'background-image': 'linear-gradient(0.75turn, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.90)),url(' + '/images/banners/' + page.frontmatter.title + '.webp' + ')' }">{{ page.frontmatter.title }}</div>
			</div>
		</div>
	</div>
</template>



<style scoped>

.navtitle {
	margin: 0px 0 16px;
	letter-spacing: -0.02em;
	line-height: 32px;
	font-size: 24px;
	font-weight: 600;
	outline: none;
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
	flex-grow: 1;
	flex-direction: column;
	gap: 0.5em;
}
.navlink {
	height: 60px;
	border: 0px solid #aaa;
	border-radius: 4px;
	background-color: #302d36;
	padding: 0.5em 0.5em 0.4em 0.6em;
	font-size: 1.3em;
	display: flex;
	align-items: flex-end;
	color: #f77d7d;
	transition: 0.2s;
	background-size: cover;
	background-position: center;
	cursor: pointer;
	box-shadow: 0 3px 10px rgba(0, 0, 0, 0.25);
	text-shadow: 3px 3px 5px rgba(0, 0, 0, 1);
	font-weight: 500;
	&:hover {
		color: #ffffff;
		padding: 0.5em 0.5em 0.4em 0.8em;
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
</style>