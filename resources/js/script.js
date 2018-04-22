import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

Vue.use(VueRouter)
Vue.use(BootstrapVue)

import App from './components/App.vue'
import Home from './components/Home.vue'
import Vatron from './components/Vatron.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/vatron', component: Vatron }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
