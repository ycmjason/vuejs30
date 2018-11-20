<template>
  <div id="app" v-if="people && comments">
    <h1>Array Cardio</h1>
    
    <h2>Is at least one person 19 or older?</h2>
    Answer here

    <h2>Is everyone 19 or older?</h2>
    Answer here

    <h2>Find the comment with the ID of 823423</h2>
    Answer here
  </div>
</template>

<script>
const getAgeFromBirthYear = birthYear => (new Date()).getFullYear() - birthYear;

export default {
  name: 'app',
};
</script>

<style>
</style>
