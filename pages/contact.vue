<template>
  <div>
    <hero-text :texts="['Get in', 'Touch']" />
    <hero-desc>
      <span class="font-weight-lighter"> We would love to hear from you </span>
      <div class="d-block">
        <span class="font-weight-lighter">and get to know</span>
        <span class="font-weight-500">your project</span>
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
        moveValue: '70%',
      },
      triangleFill: {
        transformType: 'rotate',
        transformValue: '90deg',
        direction: 'all',
        moveValue: {
          top: 25,
          right: 0,
          bottom: 0,
          left: 70,
        },
      },
      triangleShape: {
        type: Object,
        transformType: 'rotate',
        transformValue: '360deg',
        direction: 'all',
        moveValue: {
          top: 15,
          right: 0,
          bottom: 0,
          left: 40,
          delay: 1500,
        },
      },
    })
  },
}
</script>
