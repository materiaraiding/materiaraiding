<script setup>
import { data as pages } from './posts.data.js'
defineProps(['limitedList'])

let extremePages = pages.filter(p => p.frontmatter.difficulty === 'Extreme').sort((a, b) => a.frontmatter.order-b.frontmatter.order);
let savagePages = pages.filter(p => p.frontmatter.difficulty === 'Savage').sort((a, b) => a.frontmatter.order-b.frontmatter.order);
let ultimatePages = pages.filter(p => p.frontmatter.difficulty === 'Ultimate').sort((a, b) => a.frontmatter.order-b.frontmatter.order);
let chaoticPages = pages.filter(p => p.frontmatter.difficulty === 'Chaotic').sort((a, b) => a.frontmatter.order-b.frontmatter.order);
let criterionPages = pages.filter(p => p.frontmatter.difficulty === 'Criterion').sort((a, b) => a.frontmatter.order-b.frontmatter.order);
let otherPages = pages.filter(p => p.frontmatter.difficulty === 'Other Content').sort((a, b) => a.frontmatter.order-b.frontmatter.order);

function openPage (url) {
	window.open(url,"_self")
}

</script>

<template>
	<div class="navblock">
		<div class="navcolumn" v-if="(limitedList === 'extreme') || (limitedList == null)">
			<div class="navtitle"><img class="guide_titleimg" alt="Trial Icon" src='/images/icons/trial.webp'/>Extreme</div>
			<div v-for="page in extremePages">
				<div class="navlink extreme-color" @click="openPage(page.url)" v-bind:style="{ 'background-image': 'linear-gradient(0.75turn, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.90)),url(' + '/images/banners/' + page.frontmatter.title + '.webp' + ')' }">{{ page.frontmatter.title }}</div>
			</div>
		</div>
		<div class="navcolumn" v-if="(limitedList === 'chaotic') || (limitedList == null)">
			<div class="navtitle"><img class="guide_titleimg" alt="Chaotic Icon" src='/images/icons/chaotic.webp'/>Chaotic</div>
			<div v-for="page in chaoticPages">
				<div class="navlink chaotic-color" @click="openPage(page.url)" v-bind:style="{ 'background-image': 'linear-gradient(0.75turn, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.90)),url(' + '/images/banners/' + page.frontmatter.title + '.webp' + ')' }">{{ page.frontmatter.title }}</div>
			</div>
		</div>
		<div class="navcolumn" v-if="(limitedList === 'savage') || (limitedList == null)">
			<div class="navtitle"><img class="guide_titleimg" alt="Raid icon" src='/images/icons/raid.webp'/>Savage</div>
			<div v-for="page in savagePages">
				<div class="navlink savage-color" @click="openPage(page.url)" v-bind:style="{ 'background-image': 'linear-gradient(0.75turn, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.90)),url(' + '/images/banners/' + page.frontmatter.title + '.webp' + ')' }">{{ page.frontmatter.title }}</div>
			</div>
		</div>
		<div class="navcolumn" v-if="(limitedList === 'ultimate') || (limitedList == null)">
			<div class="navtitle"><img class="guide_titleimg" alt="High End Duty Icon" src='/images/icons/highendduty.webp'/>Ultimate</div>
			<div v-for="page in ultimatePages">
				<div class="navlink ultimate-color" @click="openPage(page.url)" v-bind:style="{ 'background-image': 'linear-gradient(0.75turn, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.90)),url(' + '/images/banners/' + page.frontmatter.title + '.webp' + ')' }">{{ page.frontmatter.title }}</div>
			</div>
		</div>
		<div class="navcolumn" v-if="(limitedList === 'criterion') || (limitedList == null)">
			<div class="navtitle"><img class="guide_titleimg" alt="Variant Icon" src='/images/icons/variant.webp'/>Criterion</div>
			<div v-for="page in criterionPages">
				<div class="navlink criterion-color" @click="openPage(page.url)" v-bind:style="{ 'background-image': 'linear-gradient(0.75turn, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.90)),url(' + '/images/banners/' + page.frontmatter.title + '.webp' + ')' }">{{ page.frontmatter.title }}</div>
			</div>
		</div>
		<div class="navcolumn" v-if="(limitedList === 'other') || (limitedList == null)">
			<div class="navtitle"><img class="guide_titleimg" alt="Trial Icon" src='/images/icons/trial.webp'/>Other Content</div>
			<div v-for="page in otherPages">
				<div class="navlink other-color" @click="openPage(page.url)" v-bind:style="{ 'background-image': 'linear-gradient(0.75turn, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.90)),url(' + '/images/banners/' + page.frontmatter.title + '.webp' + ')' }">{{ page.frontmatter.title }}</div>
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
	border-radius: 8px;
	border: 2px solid;
	background-color: #302d36;
	padding: 0.5em 0.5em 0.4em 0.5em;
	font-size: 1.3em;
	display: flex;
	align-items: flex-end;
	transition: 0.2s;
	background-size: cover;
	background-position: center;
	cursor: pointer;
	box-shadow: 0 3px 10px rgba(0, 0, 0, 0.25);
	text-shadow: 3px 3px 5px rgba(0, 0, 0, 1);
	font-weight: 500;
	max-width: 400px;
	&:hover {
		color: #ffffff;
		border: 2px solid #ffffff;
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
	color: #d6f6dd;
	border-color: #d6f6dd;
}

.ultimate-color {
	color: #ffb8fe;
	border-color: #ffb8fe;
}

.savage-color {
	color: #ebd2b4;
	border-color: #ebd2b4;
}

.extreme-color {
	color: #f4989c;
	border-color: #f4989c;
}

.criterion-color {
	color: #dac4f7;
	border-color: #dac4f7;
}

.other-color {
	color: #acecf7;
	border-color: #acecf7;
}

</style>