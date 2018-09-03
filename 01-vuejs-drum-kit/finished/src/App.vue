<template>
  <div id="app">
    <div class="drumpads">
      <DrumPad
        v-for="sound in sounds"
        :key="sound.name"
        :sound="sound"/>
    </div>
  </div>
</template>

<script>
import DrumPad from './components/DrumPad.vue'

export default {
  name: 'app',
  components: { DrumPad },
  data: () => ({
    sounds: [
      { key: 'q', name: 'clap', },
      { key: 'w', name: 'hihat', },
      { key: 'e', name: 'kick', },
      { key: 'a', name: 'openhat', },
      { key: 's', name: 'boom', },
      { key: 'd', name: 'ride', },
      { key: 'z', name: 'snare', },
      { key: 'x', name: 'tom', },
      { key: 'c', name: 'tink', },
    ],
  }),
}
</script>

<style scoped>
.drumpads {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-gap: 10px;
  justify-items: center;
  max-width: 330px;
  min-height: 330px;
  margin: 0 auto;
}

.drumpads > * {
  min-height: 100px;
}
</style>
