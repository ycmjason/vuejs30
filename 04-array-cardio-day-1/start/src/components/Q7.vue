<template>
  <div>
    <h2>Q7. How many count do we have for each of the vihicle?</h2>
    <!-- write your own presentation! -->
  </div>
</template>

<script>
export default {
  props: ['vihicles'],
  computed: {
    answer() {
      // Put your answer here
      return this.vihicles;
    },
  },
}
</script>

<style>
</style>
