<template>
  <div class="drumpad">
    <div class="key">{{ sound.key }}</div>
    <button @click="play">{{ sound.name }}</button>
    <audio :src="audioSrc" ref="audio"></audio>
  </div>
</template>

<script>
export default {
  mounted() {
    window.addEventListener('keydown', this.onkeydown);
  },
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
  methods: {
    onkeydown({ key }) {
      if (key.toLowerCase() === this.sound.key.toLowerCase()) {
        this.play();
      }
    },
    play () {
      const { audio } = this.$refs;
      audio.currentTime = 0;
      audio.play();
    },
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
  position: relative;
}

.key {
  position: absolute;
  top: 5px;
  left: 5px;
  text-transform: uppercase;
}
</style>
