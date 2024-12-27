<template>
	<img :src="iconSrc" :title="name" :alt="name" />
</template>

<script>
import statusData from "../../data/status.json";

export default {
	name: "StatusIcon",
	props: {
		name: {
			type: String,
			required: true,
		},
	},
	computed: {
		iconSrc() {
			const status = statusData.find((status) => status.Name === this.name);
			return status ? status.Icon : "";
		},
	},
};
</script>

<style scoped>
img {
	display: inline;
	height: 1.5em;
	vertical-align: text-top;
}
</style>
