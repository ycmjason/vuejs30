<template>
  <canvas
      ref="canvas"
      @mousedown="isDrawing = true"
      @mousemove="draw"
      @mouseup="isDrawing = false"
      @mouseout="isDrawing = false">
  </canvas>
</template>

<script>
export default {
  name: 'app',
  mounted () {
    const { canvas } = this.$refs;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = this.ctx = canvas.getContext('2d');
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = 10;
    ctx.strokeStyle = this.strokeStyle;
  },
  data: () => ({
    isDrawing: false,
    hue: 0,
    ctx: undefined,
  }),
  computed: {
    strokeStyle: ({ hue }) => `hsl(${hue}, 100%, 50%)`,
  },
  watch: {
    strokeStyle(){
      this.ctx.strokeStyle = this.strokeStyle;
    },
  },
  methods: {
    draw ({ movementX, movementY, offsetX, offsetY }) {
      if (!this.isDrawing) return;

      const { ctx } = this;

      this.hue = (this.hue + 1) % 360;

      ctx.beginPath();
      ctx.moveTo(offsetX - movementX, offsetY - movementY);
      ctx.lineTo(offsetX, offsetY);
      ctx.stroke();
    },
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>
