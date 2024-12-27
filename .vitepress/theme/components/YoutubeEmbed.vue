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
	computed: {
		src() {
			const url = new URL(this.url);
			const isPlaylist = url.searchParams.has("list");
			const videoId = url.searchParams.has("v")
				? url.searchParams.get("v")
				: url.pathname.split("/").pop().split("?")[0];
			const timestamp = url.searchParams.has("t") ? url.searchParams.get("t") : null;

			if (isPlaylist) {
				const playlistId = url.searchParams.get("list");
				return `https://www.youtube.com/embed/videoseries?list=${playlistId}`;
			}

			const baseEmbedUrl = `https://www.youtube.com/embed/${videoId}`;
			return timestamp ? `${baseEmbedUrl}?start=${timestamp}` : baseEmbedUrl;
		},
	},
};
</script>

<style scoped>
.youtube-container {
	aspect-ratio: 16 / 9;
}
.youtube-iframe {
	width: 100%;
	height: 100%;
	border: 0;
	border-radius: 8px;
}
</style>
