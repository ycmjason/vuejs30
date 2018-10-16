<template>
  <div>
    <h2>Q1. Inventors who were born in the 1500s</h2>
    <MagicTable :data="answer"/>
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
