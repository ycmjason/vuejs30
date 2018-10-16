<template>
  <div>
    <h2>Q4. How many years did all the inventors live?</h2>
    {{ answer }}
  </div>
</template>

<script>
export default {
  props: ['inventors'],
  computed: {
    answer() {
      return this.inventors.map(({ passed, year }) => passed - year).reduce((x, y) => x + y, 0);
    },
  },
}
</script>

<style>
</style>
