import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App.vue'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import HelloWorld from "./components/HelloWorld.vue"
import Test from "./components/Test.vue"
import Carousel from "./components/Carousel.vue"

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// define router
Vue.use(VueRouter)
const routes = [
  {path:"/",component: Carousel},
  { path: '/add', component: HelloWorld },
  { path: '/test', component: Test }
];
const router = new VueRouter({ routes });

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
