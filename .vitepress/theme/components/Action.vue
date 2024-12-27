<template>
	<a :href="href" class="button-link" :target="target || '_blank'" rel="noopener noreferrer" :class="color">
		{{ title }}
	</a>
</template>

<script>
export default {
	name: "Action",
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
};
</script>

<style scoped>
.button-link {
	display: block;
	width: fit-content;
	margin: 6px;
	padding: 0 20px;
	border: 1px solid transparent;
	border-radius: 20px;
	text-align: center;
	font-weight: 600;
	white-space: nowrap;
	line-height: 38px;
	font-size: 14px;
	text-decoration: none;
	transition:
		color 0.25s,
		border-color 0.25s,
		background-color 0.25s;
}

.button-link:hover {
	color: inherit;
}

a {
	border-color: transparent;
	color: var(--vp-c-white);
	background-color: var(--vp-c-gray-3);
}

a:hover {
	background-color: var(--vp-c-gray-2);
}

.red {
	background-color: var(--vp-c-red-3);
}

.red:hover {
	background-color: var(--vp-c-red-2);
}

.blue {
	background-color: var(--vp-c-indigo-3);
}

.blue:hover {
	background-color: var(--vp-c-indigo-2);
}

.purple {
	background-color: var(--vp-c-purple-3);
}

.purple:hover {
	background-color: var(--vp-c-purple-2);
}

.green {
	background-color: var(--vp-c-green-3);
}

.green:hover {
	background-color: var(--vp-c-green-2);
}

.yellow {
	background-color: var(--vp-c-yellow-3);
}

.yellow:hover {
	background-color: var(--vp-c-yellow-2);
}
</style>
