<template>
  <div class="raidplan-wrapper" :class="color">
    <a :href="href" class="button-link" :target="target || '_blank'" rel="noopener noreferrer" :class="color">
      {{ title }}</a>
    <iframe class="raidplan-iframe" :src="href + '/embed'"></iframe>
  </div>
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

.raidplan-wrapper {
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid var(--vp-c-bg-elv);
  background-color: var(--vp-c-bg-alt);
  padding-top: 10px;
}
.raidplan-iframe {
  width: 100%;
  height: 500px;
  border: none;
  margin-top: 10px;
  overflow-y: hidden;
}

.button-link {
  margin-left: 10px;
}

.button-link:hover {
  color: var(--vp-c-brand-1);
}

a {
  border-color: transparent;
  color: var(--vp-c-text-1);
  font-size: 1.2rem;
  text-decoration: none;
}

a:hover {
  color: var(--vp-c-brand-1);
}

</style>
