<template>
  <div>
    <h2>Q7. How many count do we have for each of the vihicle?</h2>
    <MagicTable :data="answer" />
  </div>
</template>

<script>
export default {
  props: ['vihicles'],
  computed: {
    answer() {
      return this.vihicles.reduce((acc, v) => ({
        ...acc,
        [v]: typeof acc[v] === 'number'? acc[v] + 1: 0,
      }), {});
    },
  },
}
</script>

<style>
</style>
