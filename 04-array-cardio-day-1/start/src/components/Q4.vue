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
      // Put your answer here
      return this.inventors;
    },
  },
}
</script>

<style>
</style>
