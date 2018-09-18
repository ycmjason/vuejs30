<template>
  <div id="app">
    <Clock />
  </div>
</template>

<script>
import Clock from './components/Clock.vue'

export default {
  name: 'app',
  components: { Clock },
}
</script>

<style>
html {
  background:#018DED url(http://unsplash.it/1500/1000?image=881&blur=50);
  background-size:cover;
  font-family:'helvetica neue';
  text-align: center;
  font-size: 10px;
}

#app {
  margin: 0;
  font-size: 2rem;
  display:flex;
  flex:1;
  min-height: 100vh;
  align-items: center;
}
</style>
