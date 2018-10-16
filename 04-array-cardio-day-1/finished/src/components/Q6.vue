<template>
  <div>
    <h2>Q6. Sort the people alphabetically by last name</h2>
    <MagicTable :data="answer" />
  </div>
</template>

<script>
const sort = ([...xs], fn) => xs.sort(fn);
const getLastName = n => n.split(', ')[0];

export default {
  props: ['people'],
  computed: {
    answer() {
      return sort(this.people, (n1, n2) => getLastName(n1).localeCompare(getLastName(n2)));
    },
  },
}
</script>

<style>
</style>
