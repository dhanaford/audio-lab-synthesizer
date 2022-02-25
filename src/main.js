import Vue from 'vue'
import App from './App.vue'
import VueCircleSlider from 'vue-circle-slider'

Vue.use(VueCircleSlider)

console.log(VueCircleSlider)

new Vue({
  el: '#app',
  render: h => h(App)
})
