<template>
  <div>
    <h2>Q2. What are the names of investors?</h2>
    <MagicTable :data="answer" />
  </div>
</template>

<script>
export default {
  props: ['inventors'],
  computed: {
    answer() {
      return this.inventors.map(({ first, last }) => `${first} ${last}`);
    },
  },
}
</script>

<style>
</style>
