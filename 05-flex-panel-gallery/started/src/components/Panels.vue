<template>
  <div class="panels">
    <Panel />
  </div>
</template>

<script>
import Panel from './Panel.vue';

export default {
  components: { Panel },
  props: {
    panels: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped>
.panels {
  min-height: 100vh;
  overflow: hidden;
  display: flex;
}
</style>
