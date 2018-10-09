<template>
  <div id="app">
    <h2>Update CSS Variables with <span class='hl'>VUE.JS</span></h2>

    <div class="controls">
      <label>
        Spacing:
        <input type="range" min="10" max="200" value="10">
      </label>

      <label>Blur:
        <input type="range" min="0" max="25" value="10">
      </label>

      <label>
        Base Color:
        <input type="color" value="#ffc600">
      </label>
    </div>

    <img src="./assets/picture.jpg">
  </div>
</template>

<script>
export default {
  name: 'app',
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
