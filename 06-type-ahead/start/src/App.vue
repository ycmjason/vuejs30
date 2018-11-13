<template>
  <div id="app">
    <input type="text" placeholder="City or State">
    <FancyList />
  </div>
</template>

<script>
import cities from './assets/cities.json';
import FancyList from './components/FancyList.vue';

export default {
  name: 'app',
  data: () => ({
    cities, 
  }),
  components: {
    FancyList,
  },
}
</script>

<style scoped>
#app {
  max-width: 400px;
  margin: 50px auto;
}

input {
  width: 100%;
  padding:20px;
  margin: 0;
  text-align: center;
  outline:0;
  border: 10px solid #F7F7F7;
  width: 150%;
  left: -25%;
  position: relative;
  top: 10px;
  z-index: 2;
  border-radius: 5px;
  font-size: 55px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.12), inset 0 0 2px rgba(0, 0, 0, 0.19);
}
</style>

<style>
html {
  box-sizing: border-box;
  background:#ffc600;
  font-family:'helvetica neue';
  font-size: 30px;
  font-weight: 200;
}

*, *:before, *:after {
  box-sizing: inherit;
}
</style>
