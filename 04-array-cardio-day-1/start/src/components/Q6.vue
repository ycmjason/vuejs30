<template>
  <div>
    <h2>Q6. Sort the people alphabetically by last name</h2>
    <MagicTable :data="answer" />
  </div>
</template>

<script>
export default {
  props: ['people'],
  computed: {
    answer() {
      // Put your answer here
      return this.people;
    },
  },
}
</script>

<style>
</style>
