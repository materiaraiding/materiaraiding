<template>
	<div class="stgy-board-container">
		<iframe
			ref="iframe"
			:src="`https://board.wtfdig.info/${stgy}`"
			class="stgy-board-iframe"
			:title="title"
			@load="handleIframeLoad"></iframe>
	</div>
</template>

<script>
export default {
	name: "StratBoard",
	props: {
		stgy: {
			type: String,
			required: true,
		}
	},
	data() {
		return {
			src: "",
		};
	},
};
</script>

<style scoped>

.stgy-board-iframe {
	aspect-ratio: 4/3;
	width: 100%;
	border: 0;
	border-radius: 8px;
	display: block;
}

</style>
