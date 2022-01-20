<template>
  <div class="description-text-wrapper" :class="{ addClass: 'leave' }">
    <p>
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HeroDesc',
}
</script>
