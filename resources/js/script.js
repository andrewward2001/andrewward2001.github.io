import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)

import Card from './components/Card.vue'
import Hero from './components/Hero.vue'
import Home from './components/Home.vue'
import Vatron from './components/Vatron.vue'

Vue.component('card', Card)
Vue.component('hero', Hero)
Vue.component('home', Home)

new Vue({
  render: (h) => h(Home)
}).$mount('#app')
