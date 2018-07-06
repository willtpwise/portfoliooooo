import Vue from 'vue'
import Vuex from 'vuex'

import Work from './modules/Work'
import Fun from './modules/Fun'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Work,
    Fun
  }
})
