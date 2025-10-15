<script setup>
import { computed } from 'vue';
import {difficultyTypes} from "./difficultyTypes";

const props = defineProps({
	page: {
		type: Object,
		required: true,
	},
});

// Compute the proper href for the link
const linkHref = computed(() => {
  return props.page.url.replace("/guides", "").toLowerCase();
});

// Determine the difficulty type and its associated properties from the difficultyTypes array
const difficulty = difficultyTypes.find((d) => d.type === props.page.frontmatter.difficulty) || {
	type: "",
	colorClass: "",
	icon: "",
};
</script>

<template>
	<a
		:class="`navlink ${difficulty.colorClass}`"
		:href="linkHref"
		:style="{
			'background-image': `linear-gradient(0.75turn, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.90)), url('${props.page.frontmatter.banner}')`,
		}">
		{{ props.page.frontmatter.fightID }}
	</a>
</template>

<style scoped>
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
	text-decoration: none;
	color: inherit;
	&:hover {
		color: #ffffff;
		border: 3px solid #ffffff;
		padding: 0.5em 0.5em 0.4em 0.6em;
		box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
	}
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
	color: var(--color-unreal);
	border-color: var(--color-unreal);
}

.fieldops-color {
	color: var(--color-fieldops);
	border-color: var(--color-fieldops);
}

.quantum-color {
	color: var(--color-quantum);
	border-color: var(--color-quantum);
}
</style>
