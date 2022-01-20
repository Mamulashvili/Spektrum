<template>
  <div>
    <hero-text :texts="['Rock &', 'Web']" />
    <hero-desc>
      <span class="font-weight-lighter d-block"> We design & build </span>
      <span class="font-weight-500">Websites</span>
      <span class="blue">&</span>
      <span class="font-weight-500">Applications</span>

      <button class="btn d-block mx-auto mt-4 rounded-0 px-3 py-2">
        Find out more
      </button>
    </hero-desc>

    <section class="container-fluid p-5 page-content-wrapper">
      <div class="row">
        <div class="col-md-6">
          <figure>
            <img src="@/assets/images/room.png" alt="image" class="w-100" />
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
            <img src="@/assets/images/polygon.png" alt="image" class="w-100" />
          </figure>
        </div>

        <div class="col-md-6">
          <figure>
            <img src="@/assets/images/bb.png" alt="image" class="w-100" />
          </figure>
        </div>
        <div class="col-md-6 text-wrapper p-5">
          <h3 class="mt-2">Leistungsstarke AR-Software</h3>
          <p class="mt-3">
            Nam liber tempor cum soluta nobis eleifend option congue nihil
            imperdiet doming id quod mazim placerat facer possim assum. Lorem
            ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
            nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  data() {
    return {
      addClass: false,
    }
  },

  mounted() {
    this.$nuxt.$emit('moveShapes', {
      rectangle: {
        direction: 'left',
        moveValue: '50%',
      },
    })
  },
}
</script>
