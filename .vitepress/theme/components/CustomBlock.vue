<template>
	<div :class="[type, 'custom-block']">
		<p class="custom-block-title">{{ title }}</p>
		<p><slot></slot></p>
	</div>
</template>

<script>
export default {
	name: "CustomBlock",
	props: {
		type: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			default: "",
		},
	},
};
</script>

<style>
.custom-block.tank {
	border-color: transparent;
	color: var(--vp-c-text-1);
	background-color: var(--vp-c-indigo-soft);
}
.custom-block.healer {
	border-color: transparent;
	color: var(--vp-c-text-1);
	background-color: var(--vp-c-green-soft);
}
.custom-block.damage {
	border-color: transparent;
	color: var(--vp-c-text-1);
	background-color: var(--vp-c-red-soft);
}
.custom-block.everyone {
	border-color: transparent;
	color: var(--vp-c-text-1);
	background-color: var(--vp-c-yellow-soft);
}
</style>
