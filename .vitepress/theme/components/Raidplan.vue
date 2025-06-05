<script >
export default {
	name: "Raidplan",
	props: {
		href: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		target: {
			type: String,
			default: "_blank",
		},
		color: {
			type: String,
			default: "",
		},
	},
	data() {
		return {
			msg: 'Copy Link',
			clicked: false
		};
	},
	methods: {
	async copyURL(mytext) {
		try {
			await navigator.clipboard.writeText(window.location.origin + mytext);
			this.msg = 'Copied!';
			this.clicked = true
			setTimeout(function () {
				this.msg = "Copy Link";
				this.clicked = false;
			}.bind(this), 2000);
		} catch($e) {
			this.msg = 'Sorry, unable to copy link';
		}
	}
	}
}


</script>

<template>
	<div class="raidplan-wrapper" :class="color">
		<div class="title">{{ title }}</div>
		<div class="button-wrapper">
			<a :href="href" class="button-link" :target="target || '_blank'" rel="noopener noreferrer" ><button>View Raidplan</button></a>
			<button @click="copyURL(href)">{{ msg }}</button>
		</div>
	</div>
</template>

<style scoped>
.raidplan-wrapper {
	display: flex;
	border-radius: 10px;
	justify-content: space-between;
	align-items: center;
	overflow: hidden;
	border: 3px solid var(--vp-c-bg-elv);
	background-color: var(--vp-c-bg-alt);
	padding: 10px 10px 15px 10px;
}

.button-wrapper {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
}

.title {
	font-size: 1.1em;
	font-weight: 500;
	padding-left: 10px;
	color: var(--vp-c-text-1);
}

button {
	border: none;
	outline: none;
	background-color: #6c5ce7;
	padding: 5px 20px;
	font-size: 12px;
	font-weight: 700;
	color: #fff;
	min-width: 100px; /* Ensures consistent width for both 'Copy Link' and 'Copied!' */
	border-radius: 5px;
	transition: all ease 0.1s;
	box-shadow: 0px 5px 0px 0px #a29bfe;
}

button:active {
	transform: translateY(5px);
	box-shadow: 0px 0px 0px 0px #a29bfe;
}

</style>
