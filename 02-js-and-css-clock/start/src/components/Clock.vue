<template>
  <div class="clock">
    <div class="clock-face">
      <div class="hand hour-hand"></div>
      <div class="hand min-hand"></div>
      <div class="hand second-hand"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Clock',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.clock {
  width: 30rem;
  height: 30rem;
  border:20px solid white;
  border-radius:50%;
  margin:50px auto;
  position: relative;
  padding:2rem;
  box-shadow:
  0 0 0 4px rgba(0,0,0,0.1),
  inset 0 0 0 3px #EFEFEF,
  inset 0 0 10px black,
  0 0 10px rgba(0,0,0,0.2);
}

.clock-face {
  position: relative;
  width: 100%;
  height: 100%;
  transform: translateY(-3px); /* account for the height of the clock hands */
}

.hand {
  width: 6px;
  height: 50%;
  background:black;
  position: absolute;
  left: 50%;
  transform-origin: bottom;
}
</style>
