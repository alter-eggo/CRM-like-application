export default {
  state: {
    error: null
  },
  mutations: {
    setError(state) {
      state.error = 'Error: Network Error'
    }
  },
  actions: {
    setError({commit}) {
      commit('setLoading')
    }
  },
  getters: {
    getError(state) {
      return state.error
    }
  }
}
