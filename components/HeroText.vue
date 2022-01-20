<template>
  <div
    class="hero-wrapper d-flex justify-content-center align-items-center flex-column"
  >
    <p v-for="(text, index) in texts" :key="index" class="hero-title">
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'HeroText',

  props: {
    texts: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
}
</script>
