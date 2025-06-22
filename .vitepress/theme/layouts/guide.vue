<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from "vitepress/theme";
import { useData } from "vitepress";
import { computed, onMounted } from "vue";
import useScrollDirection from "../hooks/useScrollDirection";
import { difficultyTypes } from "../components/lists/difficultyTypes";

const { Layout } = DefaultTheme;
const { frontmatter } = useData();

const icon = computed(() => difficultyTypes.find(t => t.type === frontmatter.value.difficulty).icon);

onMounted(() => {
	const root = document.documentElement;

	const hideNav = (hide) => {
		root.style.setProperty("--nav-top", hide ? "-64px" : "0");
		root.style.setProperty("--local-nav-top", hide ? "0" : "64px");
	};

	useScrollDirection(hideNav, { isMobile: true, pageTopThreshold: 150 });
});
</script>

<template>
	<Layout>
		<template #doc-before>
			<img v-if="frontmatter.image" :src="`/images/${frontmatter.image}`" alt="DKT" width="150" style="float: right" />
			<div v-if="frontmatter.expansion && frontmatter.difficulty" class="guide_subtitle">
				{{ frontmatter.expansion }} - {{ frontmatter.difficulty }} - {{ frontmatter.fightID }}
			</div>
			<h1 v-if="frontmatter.fightID" class="guide_title" id="{{frontmatter.title}}">
				<img :src="icon" /> {{ frontmatter.title }}
				<a href="{{frontmatter.fightID}}" class="header-anchor" />
			</h1>
			<div v-if="frontmatter.difficulty" class="guide_label_box">
				<a v-if="frontmatter.difficulty?.toLowerCase() === 'ultimate'" href="https://discord.gg/ArZz3b8PZV"
					class="guide_label label_mur">
					MUR Strat
				</a>
				<a v-else href="https://discord.gg/EySn5dRj65" class="guide_label label_pf"> MR Strat </a>
				<a v-if="frontmatter.discussionLink" :href="frontmatter.discussionLink" class="guide_label label_discussion">
					Join Discussion
				</a>
			</div>
			<div v-if="frontmatter.authors" class="attributions">
				<div class="authors-label-and-list">
					<span class="authors-list">
						<template v-if="frontmatter.authors.length > 1">
							<span>Contributors:</span>
						</template>
						<template v-for="(author, idx) in frontmatter.authors" :key="author">
							<span class="author">
								<svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd"
										d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z"
										fill="currentColor" />
									<path
										d="M16 15C16 14.4477 15.5523 14 15 14H9C8.44772 14 8 14.4477 8 15V21H6V15C6 13.3431 7.34315 12 9 12H15C16.6569 12 18 13.3431 18 15V21H16V15Z"
										fill="currentColor" />
								</svg>
								{{ author }}<span v-if="idx < frontmatter.authors.length - 1">,</span>
							</span>
						</template>
					</span>
				</div>
			</div>
		</template>
	</Layout>
</template>

<style scoped>
.guide_subtitle {
	text-transform: uppercase;
	font-weight: 500;
	color: grey;
}

.guide_title img {
	display: inline;
	height: 1em;
	vertical-align: bottom;
	margin-right: 7px;
	margin-bottom: 3px;
	box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
}

.guide_title {
	font-weight: 600;
	position: relative;
	letter-spacing: -0.02em;
	line-height: 40px;
	font-size: 32px;
	margin: 0.1em 0 0.3em;
}

.attributions {
	display: flex;
	gap: 0.2rem;
	margin-top: 0.5rem;
	font-size: 0.9em;
	font-weight: 500;
	user-select: none;
	color: var(--vp-c-text-2);
}

.authors-list {
	display: flex;
	flex-wrap: wrap;
	gap: 0.2em;
}

.author {
	display: flex;
	align-items: center;
}

.label_mur {
	background: var(--vp-c-purple-3);
}

.label_pf {
	background: var(--vp-c-red-3);
}

.label_discussion {
	background: var(--vp-c-indigo-3);
}

.guide_label {
	width: fit-content;
	padding: 1px 6px 1px 6px;
	border-radius: 8px;
	color: #dfdfd6;
	font-weight: 500;
	font-size: small;
	cursor: pointer;
}

.guide_label_box {
	display: flex;
	flex-wrap: wrap;
	gap: 0.4rem;
}

.header-anchor {
	position: absolute;
	top: 0;
	left: 0;
	margin-left: -0.87em;
	font-weight: 500;
	user-select: none;
	opacity: 0;
	text-decoration: none;
	transition:
		color 0.25s,
		opacity 0.25s;
	color: var(--vp-c-brand-1);
	text-underline-offset: 2px;
}

.guide_title:hover .header-anchor {
	opacity: 1;
}

.header-anchor::before {
	content: var(--vp-header-anchor-symbol);
}
</style>