import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
import work from './../../static/work/index.js'

Vue.use(Vuex)

const options = {
  state: {
    work: false
  },
  mutations: {
    setWork (state, payload) {
      state.work = payload
    }
  },
  actions: {
    getWork (commit) {
      return work
    }
  }
}

const store = new Vuex.Store({ ...options })

export default store
