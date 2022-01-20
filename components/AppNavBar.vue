<template>
  <div>
    <nav class="navigation py-4 d-flex justify-content-between">
      <nuxt-link to="/" class="d-flex align-items-center">
        <span>SPE</span>
        <span class="active">K</span>
        <span>TRUM</span>
      </nuxt-link>
      <transition name="nav" mode="out-in">
        <div class="routes">
          <nuxt-link to="/about"> About us </nuxt-link>
          <nuxt-link to="/services"> Services </nuxt-link>
          <nuxt-link to="/portfolio"> Portfolio </nuxt-link>
          <nuxt-link to="/contact"> Contact </nuxt-link>
          <span
            class="icon d-inline-flex rounded-circle justify-content-center align-items-center"
          >
            <font-awesome-icon :icon="['fas', 'envelope']" />
          </span>
        </div>
      </transition>
    </nav>
  </div>
</template>
