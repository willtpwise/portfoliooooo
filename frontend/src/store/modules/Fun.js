import FunContent from '@/content/fun'

export default {
  state: {
    funItems: []
  },

  getters: {
    getItemBySlug: (state) => (slug) => {
      if (!state.funItems) {
        throw `Fun items not defined in state`
      }

      return state.funItems[slug] || null
    }
  },

  mutations: {
    setFunItems (state, payload) {
      state.funItems = payload
    }
  },

  actions: {
    fetchFunItems ({ commit }) {
      commit('setFunItems', FunContent)
    }
  },

  namespaced: true
}
