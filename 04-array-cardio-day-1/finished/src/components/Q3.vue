<template>
  <div>
    <h2>Q3. Sort inventors by birthdate, oldest to youngest.</h2>
    <MagicTable :data="answer" />
  </div>
</template>

<script>
const sort = ([...xs], fn) => xs.sort(fn);

export default {
  props: ['inventors'],
  computed: {
    answer() {
      return sort(this.inventors, (i1, i2) => i1.year - i2.year);;
    },
  },
}
</script>

<style>
</style>
