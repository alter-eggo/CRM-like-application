import Vue from 'vue'
import App from './App.vue'
import store from './store'


import router from './routes'

import './assets/main.scss'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
