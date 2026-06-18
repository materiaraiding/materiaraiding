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
		id: {
			type: String,
			default: null,
		},
	},
	computed: {
		iconSrc() {
			if (this.id) {
				const status = statusData.find((s) => s.Name === this.name && s.ID === Number(this.id));
				return status ? status.Icon : "";
			}
			const status = statusData.find((s) => s.Name === this.name);
			return status ? status.Icon : "";
		},
	},
};
</script>

<style scoped>
img {
	display: inline;
	height: 1.5em;
	vertical-align: top;
	margin: 0 3px;
}
</style>
