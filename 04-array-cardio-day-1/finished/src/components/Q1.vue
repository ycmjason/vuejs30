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
      return this.inventors.filter(({ year }) => 1500 <= year && year < 1600);
    },
  },
}
</script>

<style>
</style>
