<template>
	<figure>
		<img :src="src" :width="width" :alt="alt" />
		<figcaption>{{ caption }}</figcaption>
	</figure>
</template>

<script>
export default {
	name: "ImageEmbed",
	props: {
		src: {
			type: String,
			required: true,
		},
		width: {
			type: [String, Number],
			default: "",
		},
		alt: {
			type: String,
			default: "",
		},
		caption: {
			type: String,
			default: "",
		},
	},
};
</script>

<style scoped>
figure {
	text-align: center;
	margin: 0 auto;
}
img {
	border-radius: 8px;
	margin: auto;
}
img:hover {
	cursor: pointer;
}
figcaption {
	margin-top: 0.5em;
	font-size: small;
	color: var(--vp-c-text-3);
}
</style>
