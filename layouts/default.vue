<template>
  <div class="pages-wrapper relative">
    <app-nav-bar />
    <abstract-shapes
      :rectangle="shapesConfig.rectangle"
      :triangle-fill="shapesConfig.triangleFill"
      :triangle-shape="shapesConfig.triangleShape"
    />
    <side-git-status />
    <Nuxt />
  </div>
</template>

<script>
import AppNavBar from '@/components/AppNavBar'
import AbstractShapes from '@/components/AbstractShapes'

export default {
  components: {
    AppNavBar,
    AbstractShapes,
  },

  transition: 'fade',

  data() {
    return {
      shapesConfig: {},
    }
  },

  created() {
    this.$nuxt.$on('moveShapes', (data) => {
      this.shapesConfig = data
    })
  },
}
</script>
