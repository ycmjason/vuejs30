<template>
  <div>
    <h2>Q5. Sort the inventors by years lived</h2>
    <MagicTable :data="answer" />
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
