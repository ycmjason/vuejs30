<template>
  <div>
    <h2>Q5. Sort the inventors by years lived</h2>
    <MagicTable :data="answer" />
  </div>
</template>

<script>
const sort = ([...xs], fn) => xs.sort(fn);

export default {
  props: ['inventors'],
  methods: {
    yearsLived: ({ passed, year }) => passed - year,
  },
  computed: {
    answer() {
      return this.inventors.map(i => ({
        ...i,
        yearsLived: this.yearsLived(i),
      })).sort((i1, i2) => i1.yearsLived - i2.yearsLived);
    },
  },
}
</script>

<style>
</style>
