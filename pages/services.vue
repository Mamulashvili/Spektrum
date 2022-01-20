<template>
  <div>
    <hero-text :texts="['Our', 'Services']" />
    <hero-desc>
      <span class="font-weight-lighter"> Were technical </span>
      <span class="font-weight-500">strength</span>
      <span class="font-weight-lighter"> meets </span>
      <div class="d-block">
        <span class="font-weight-500">inovative</span>
        <span class="font-weight-lighter">budiness strategy</span>
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
        moveValue: '45%',
      },
      triangleFill: {
        transformType: 'rotate',
        transformValue: '80deg',
        direction: 'all',
        moveValue: {
          top: 30,
          right: 0,
          bottom: 0,
          left: 40,
        },
      },
      triangleShape: {
        type: Object,
        transformType: 'rotate',
        transformValue: '360deg',
        direction: 'all',
        moveValue: {
          top: 40,
          right: 0,
          bottom: 0,
          left: 35,
          delay: 1300,
        },
      },
    })
  },
}
</script>
