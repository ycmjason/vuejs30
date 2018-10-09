<template>
  <div id="app" :style="appStyle">
    <h2>Update CSS Variables with <span class='hl'>VUE.JS</span></h2>

    <div class="controls">
      <label>
        Spacing:
        <input type="range" min="10" max="200" value="10" v-model="spacing">
      </label>

      <label>Blur:
        <input type="range" min="0" max="25" value="10" v-model="blur">
      </label>

      <label>
        Base Color:
        <input type="color" value="#ffc600" v-model="base">
      </label>
    </div>

    <img src="./assets/picture.jpg">
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    spacing: 10,
    blur: 10,
    base: '#ffc600',
  }),
  computed: {
    appStyle() {
      const { spacing, blur, base } = this;
      return {
        '--spacing': spacing + 'px',
        '--blur': blur + 'px',
        '--base': base,
      };
    },
  },
}
</script>

<style scoped>
img {
  padding: var(--spacing);
  background: var(--base);
  filter: blur(var(--blur));
}

.hl {
  color: var(--base);
}
</style>
