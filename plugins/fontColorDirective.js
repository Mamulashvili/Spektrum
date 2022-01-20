/* eslint-disable no-console */
import Vue from 'vue'

Vue.directive('font-color', (el, binding) => {
  el.style.color = binding.value
})