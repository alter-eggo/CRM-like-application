export default {
  state: {
    loading: false
  },
  mutations: {
    setLoading(state) {
      state.loading = true
    },
    setLoadingOff(state) {
      state.loading = false
    }
  },
  actions: {
    setLoading({commit}) {
      commit('setLoading')
    },
    setLoadingOff({commit}) {
      commit('setLoadingOff')
    }
  },
  getters: {
    getLoading(state) {
      return state.loading
    }
  }
}
