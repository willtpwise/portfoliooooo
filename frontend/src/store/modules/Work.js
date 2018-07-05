import WorkContent from '@/content/work'

export default {
  state: {
    workItems: []
  },

  getters: {
    getCompanyBySlug: (state) => (slug) => {
      if (!state.workItems) {
        throw `Work items not defined in state`
      }

      return state.workItems[slug] || null
    }
  },

  mutations: {
    setWorkItems (state, payload) {
      state.workItems = payload
    }
  },

  actions: {
    fetchWorkItems ({ commit }) {
      commit('setWorkItems', WorkContent)
    }
  },

  namespaced: true
}
