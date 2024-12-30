<template>
	<div class="youtube-container">
		<iframe
			:src="src"
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
			class="youtube-iframe"
			:title="title"></iframe>
	</div>
</template>

<script>
export default {
	name: "YouTubeEmbed",
	props: {
		url: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			default: "",
		},
	},
	data() {
		return {
			src: "",
		};
	},
	mounted() {
		const url = new URL(this.url);
		const params = url.searchParams;

		const isPlaylist = params.has("list");
		const videoId = params.get("v") || url.pathname.split("/").pop().split("?")[0];
		const timestamp = params.get("t");

		this.src = isPlaylist
			? `https://www.youtube.com/embed/videoseries?list=${params.get("list")}`
			: `https://www.youtube.com/embed/${videoId}${timestamp ? `?start=${timestamp}` : ""}`;
	},
};
</script>

<style scoped>
.youtube-container {
	aspect-ratio: 16 / 9;
	margin: 16px 0;
}
.youtube-iframe {
	width: 100%;
	height: 100%;
	border: 0;
	border-radius: 8px;
}
</style>
