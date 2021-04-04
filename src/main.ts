import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App.vue'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import HelloWorld from "./components/HelloWorld.vue"

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
// import './style.scss'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter)
const routes = [
  { path: '/', component: HelloWorld },
  { path: '/add', component: HelloWorld }
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
