import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// file css
import '@/assets/style/global.css'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// boxicons
import 'boxicons'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
