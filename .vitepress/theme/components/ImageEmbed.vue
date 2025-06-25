<template>
	<figure>
		<img :src="src" :width="width" :alt="alt" />
		<div class="imagelink" :class="{ active: clicked }" :href="src" v-on:click="copyURL(src)">{{ msg }}</div>
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
			msg: 'Copy image link',
			clicked: false
		};
	},
	methods: {
		async copyURL(mytext) {
			try {
				await navigator.clipboard.writeText(window.location.origin + mytext);
				this.msg = 'Copied to clipboard!';
				this.clicked = true
				setTimeout(function () {
					this.msg = "Copy image link";
					this.clicked = false;
				}.bind(this), 2000);
			} catch($e) {
				this.msg = 'Sorry, unable to copy image link';
			}
		},
		openPage (url) {
			window.open(url, '_blank').focus()
		}
	}
};
</script>

<style scoped>
figure {
	text-align: center;
	margin: auto;
	width: 100%;
	max-width: 1200px;
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

.imagelink {
	opacity: 0;
	transition: color 0.2s;
	text-decoration: none;
	cursor: pointer;
	font-size: 13px;
	font-weight: 500;
	line-height: 22px;
	text-align: right;
	margin-right: 0.2em;
	-webkit-user-select: none; /* Safari */
	-moz-user-select: none; /* Firefox */
	-ms-user-select: none; /* IE10+/Edge */
	user-select: none; /* Standard */
}

.imagelink:hover {
	opacity: 1;
}

.active {
	color: var(--vp-c-text-1);
}

.active:hover {
	color: var(--vp-c-text-1);
}

</style>
