<template>
  <div class="drumpad">
    <button>{{ sound.name }}</button>
    <audio :src="audioSrc"></audio>
  </div>
</template>

<script>
export default {
  props: {
    sound: {
      required: true,
    },
  },
  computed: {
    audioSrc () {
      return `/sounds/${this.sound.name}.wav`;
    }
  },
};
</script>

<style scoped>
button {
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border: 1px #333333 solid;
  width: 100%;
  height: 100%;
  font-size: 1.5rem;
  outline: none;
  cursor: pointer;
}

.drumpad {
  height: 100%;
  width: 100%;
}
</style>
