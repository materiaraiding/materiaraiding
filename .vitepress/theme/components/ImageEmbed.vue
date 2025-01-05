<template>
	<figure>
		<img :src="src" :width="width" :alt="alt" />
		<div class="copyimagelink" :href="src" v-on:click="copyURL(src)">{{ msg }}</div>
		<figcaption v-if="caption">{{ caption }}</figcaption>
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
		}
	},
	data() {
		return {
			msg: 'Copy Image Link'
		};
	},
	methods: {
		async copyURL(mytext) {
			let clicked
			try {
				await navigator.clipboard.writeText(window.location.origin + mytext);
				this.msg = 'Link copied to clipboard';
				clicked = true
				setTimeout(function () {
					this.msg = "Copy Image Link";
					clicked = false;
				}.bind(this), 4000);
			} catch($e) {
				this.msg = 'Sorry, unable to copy image link';
			}
		}
	}
};
</script>

<style scoped>
figure {
	text-align: center;
	margin: auto;
	width: max-content;
	max-width: 100%;
	margin-bottom: 0.5em;
}
img {
	border-radius: 8px;
}
img:hover {
	cursor: pointer;
}
figcaption {
	font-size: small;
	color: var(--vp-c-text-3);
}

.copyimagelink {
	color: var(--vp-c-text-3);
	text-decoration: none;
	cursor: pointer;
	font-size: 12px;
	text-align: left;
	font-weight: 500;
	line-height: 20px;
	-webkit-user-select: none; /* Safari */
	-moz-user-select: none; /* Firefox */
	-ms-user-select: none; /* IE10+/Edge */
	user-select: none; /* Standard */
}

</style>
