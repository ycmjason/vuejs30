<template>
  <canvas ref="canvas"></canvas>
</template>

<script>
export default {
  name: 'app',
  mounted () {
    // setup the cavas width and height
    const { canvas } = this.$refs;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // set up context
    const ctx = this.ctx = canvas.getContext('2d');
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = 10;
    ctx.strokeStyle = 'hsl(90, 100%, 50%)';
  },
  data: () => ({
    ctx: undefined,
  }),
  methods: {
    draw () {
      const { ctx } = this;

      ctx.beginPath();
      ctx.moveTo(50, 50);
      ctx.lineTo(150, 150);
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
