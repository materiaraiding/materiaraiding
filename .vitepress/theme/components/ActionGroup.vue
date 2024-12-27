<template>
	<div class="action-container">
		<Action
			v-for="(action, index) in actions"
			:key="index"
			:href="action.href"
			:title="action.title"
			:target="action.target"
			:color="action.color" />
	</div>
</template>

<script>
import Action from "./Action.vue";

export default {
	name: "ActionContainer",
	components: {
		Action,
	},
	props: {
		actions: {
			type: Array,
			required: true,
		},
	},
};
</script>

<style scoped>
.action-container {
	display: flex;
	flex-wrap: wrap;
}
</style>
