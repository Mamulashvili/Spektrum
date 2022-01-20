import Vue from 'vue';

Vue.directive('transform', (el, { arg, value }) => {
    setTimeout(() => {
        el.style.transform = `${arg}(${value})`;
        el.style.transition = '3s ease';
    }, 1000)
})