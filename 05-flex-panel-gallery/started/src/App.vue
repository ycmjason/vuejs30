<template>
  <div id="app">
    <Panels :panels="panels" />
  </div>
</template>

<script>
import Panels from './components/Panels.vue';
import panelsData from './assets/panels.json';

export default {
  name: 'app',
  components: { Panels },
  data: () => ({
    panels: panelsData,
  }),
}
</script>

<style>
html {
  box-sizing: border-box;
  background: #ffc600;
  font-family: 'helvetica neue';
  font-size: 20px;
  font-weight: 200;
}

body {
  margin: 0;
}

*, *: before, *: after {
  box-sizing: inherit;
}
</style>
