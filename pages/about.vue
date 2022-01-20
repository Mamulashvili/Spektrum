<template>
  <div>
    <hero-text :texts="['About', 'Us']" />
    <hero-desc>
      <span class="font-weight-lighter"> We develop </span>
      <span class="font-weight-500">your</span>
      <span class="font-weight-lighter"> projects </span>
      <div class="d-block">
        <span class="font-weight-lighter">as if they were our</span>
        <span class="font-weight-500">own</span>
      </div>
    </hero-desc>

    <section class="container-fluid p-5 page-content-wrapper">
      <div class="row">
        <div class="col-md-12 mb-5">
          <div class="col-md-4 mx-auto">
            <h1 class="text-center text-light mb-5">We build the future</h1>
            <img
              src="@/assets/images/statue_top.png"
              alt="image"
              class="w-100"
            />
          </div>
          <p class="mt-3 mb-5 text-light text-center w-50 mx-auto">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo.
          </p>
        </div>

        <div class="col-md-6">
          <figure>
            <img src="@/assets/images/statue1.png" alt="image" class="w-100" />
          </figure>
        </div>
        <div class="col-md-6 text-wrapper p-5">
          <h3 class="mt-2">Entfache ein Feuer</h3>
          <p class="mt-3">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua.
          </p>
          <base-button-outline> Learn more </base-button-outline>
        </div>

        <div class="col-md-6 text-wrapper p-5">
          <h3 class="mt-2 w-50">Digitale Gestaltungskompetenzen vertiefen</h3>
          <p class="mt-3">
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            amet. Lorem ipsum dolor sit amet.
          </p>
          <base-button-outline> Learn more </base-button-outline>
        </div>
        <div class="col-md-6">
          <figure>
            <img
              src="@/assets/images/statue2.png"
              alt="image"
              class="w-100 reverse-img"
            />
          </figure>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$nuxt.$emit('moveShapes', {
      rectangle: {
        direction: 'left',
        moveValue: '30%',
      },
      triangleShape: {
        type: Object,
        transformType: 'rotate',
        transformValue: '10deg',
        direction: 'all',
        moveValue: {
          top: 17,
          right: 0,
          bottom: 0,
          left: 45,
          delay: 1300,
        },
      },
      triangleFill: {
        transformType: 'rotate',
        transformValue: '180deg',
        direction: 'all',
        moveValue: {
          top: 20,
          right: 0,
          bottom: 0,
          left: 50,
        },
      },
    })
  },
}
</script>
