<template>
  <div>
    <h2>Q3. Sort inventors by birthdate, oldest to youngest.</h2>
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
