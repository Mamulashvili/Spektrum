<template>
  <div>
    <hero-text :texts="['Recent', 'Projects']" />
    <hero-desc>
      <span class="font-weight-lighter"> Our agile approach is our </span>
      <div class="d-block">
        <span class="font-weight-500">distinction</span>
        <span class="font-weight-lighter"> & our </span>
        <span class="font-weight-500">signature</span>
      </div>
    </hero-desc>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$nuxt.$emit('moveShapes', {
      rectangle: {
        direction: 'left',
        moveValue: '55%',
      },
      triangleFill: {
        transformType: 'rotate',
        transformValue: '360deg',
        direction: 'all',
        moveValue: {
          top: 17,
          right: 0,
          bottom: 0,
          left: 80,
        },
      },
      triangleShape: {
        type: Object,
        transformType: 'rotate',
        transformValue: '160deg',
        direction: 'all',
        moveValue: {
          top: 40,
          right: 0,
          bottom: 0,
          left: 65,
          delay: 1300,
        },
      },
    })
  },
}
</script>
