<template>
  <div id="app" v-if="people && comments">
    <h1>Array Cardio</h1>
    
    <h2>Is at least one person 19 or older?</h2>
    {{ q1 }}

    <h2>Is everyone 19 or older?</h2>
    {{ q2 }}

    <h2>Find the comment with the ID of 823423</h2>
    {{ q3 }}
  </div>
</template>

<script>
const getAgeFromBirthYear = birthYear => (new Date()).getFullYear() - birthYear;

export default {
  name: 'app',
  async created () {
    const [people, comments] = await Promise.all([
      fetch('/people.json').then(res => res.json()),
      fetch('/comments.json').then(res => res.json()),
    ]);
    Object.assign(this, { people, comments });
  },
  data: () => ({
    people: null,
    comments: null,
  }),
  computed: {
    ages () {
      return this.people.map(getAgeFromBirthYear);
    },
    q1 () {
      return this.ages.some(age => age >= 19);
    },
    q2 () {
      return this.ages.some(age => age >= 19);
    },
    q3 () {
      return this.comments.find(({ id }) => id === 823423).text;
    },
  },
};
</script>

<style>
</style>
