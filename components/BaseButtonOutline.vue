<template>
  <button
    type="button"
    class="btn btn-outline-white mt-2"
    @click="$emit('click')"
  >
    <slot></slot>
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'BaseButtonOutline',

  props: {
    text: {
      type: String,
      required: false,
      default: '',
    },
  },

  emits: ['click'],
}
</script>

<style lang="scss" scoped>
.btn-outline-white {
  color: #fff;
  border: 1px solid #fff;
  cursor: pointer;
  padding: 12px 25px !important;
  max-width: 200px;
  transition: 0.3s ease;

  &:hover {
    background-color: #fff;
    color: #000;
  }
}
</style>
