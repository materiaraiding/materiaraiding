<script>
export default {
	name: "Macro",
	props: {
		identifier: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			default: "Macro",
		},
	},
};
</script>

<template>
	<<< @/macro/{{ identifier }}.macro
</template>

<style scoped>

</style>