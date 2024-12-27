<template>
	<div class="timing-window">
		<div class="timing-window__card timing-window__card--burst">
			<div class="timing-window__inner-wrapper">
				<div class="timing-window__header">
					<div class="timing-window__title">2-Minute Windows</div>
					<img src="/images/icons/phys.webp" alt="dmgup" class="timing-window__icon" />
				</div>
				<div class="timing-window__content">
					<slot name="burst" />
				</div>
			</div>
		</div>

		<div class="timing-window__card timing-window__card--pot">
			<div class="timing-window__inner-wrapper">
				<div class="timing-window__header">
					<div class="timing-window__title">Pot Windows</div>
					<img src="/images/icons/pot.webp" alt="pot" class="timing-window__icon" />
				</div>
				<div class="timing-window__content">
					<slot name="pot" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "TimingWindow",
};
</script>

<style scoped>
.timing-window {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
	margin-top: 1.5em;
	gap: 0.5rem;
}
.timing-window__card {
	display: flex;
	border-radius: 8px;
}
.timing-window__card--burst {
	background: var(--vp-c-indigo-soft);
}
.timing-window__card--pot {
	background: var(--vp-c-red-soft);
}
.timing-window__inner-wrapper {
	flex: 1;
	border-radius: 8px;
	margin: 4px;
	padding: 16px 16px 8px;
	background: var(--vp-c-bg-alt);
}
.timing-window__header {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}
.timing-window__title {
	display: inline-block;
	font-size: 1.3em;
	font-weight: 600;
}
.timing-window__icon {
	pointer-events: none;
	height: 40px;
	float: right;
}
</style>
