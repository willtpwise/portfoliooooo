import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import 'normalize.css'
import './assets/base-styles.scss'
import 'font-awesome/css/font-awesome.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
