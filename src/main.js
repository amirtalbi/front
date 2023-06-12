import Vue from 'vue'
import App from './App.vue'
import '@/assets/index.css'
import router from "./router"
import store from "./store"
import VueCookies from 'vue-cookies';

Vue.use(VueCookies);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
