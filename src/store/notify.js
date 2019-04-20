import loadMore from '../assets/js/loadMore.js'
import axios from 'axios'

export default{
  state: {
    messages: [],
    messagesMain: []
  },
  mutations: {
    setMessage(state, payload) {
      state.messages = payload
    },
    setMessageMain(state, payload) {
      state.messagesMain = payload
    },
    loadMessages(state, payload) {
      state.messagesMain = [...state.messagesMain, ...payload]
    }
  },
  actions: {
    loadMessages({commit, getters}) {
      let res = getters.getMessageFilter
      commit('loadMessages', loadMore(res))
    },
    getNotify({commit}, payload) {
      commit('setLoading', {root: true})
      axios
      .get('https://olga-aleksanova.ru/api/notifyApi.php')
      .then(response => {
        let res = response.data.notify,
            messagesMain = [],
            messages = [];
        // filter
        for (let i = 0; i < res.length; i++) {
          if (res[i].main === true) messagesMain.push(res[i])
          else messages.push(res[i])
        }
        commit('setMessageMain', messagesMain)
        commit('setMessage', messages)
      })
      .catch(error => {
        console.log(error)
        commit('setError', {root: true})
      })
      .finally( () => (commit('setLoadingOff', {root: true})))
    },
    getNotifyLazy({commit, dispatch}) {
      commit('setLoading', {root: true})
      setTimeout( () => {
        dispatch('getNotify')}, 1800)
    }
  },
  getters: {
    getMessage(state) {
      return state.messages
    },
    getMessageFilter(state) {
      return state.messages.filter(mes => {
        return mes.main === false
      })
    },
    getMessageMain(state) {
      return state.messagesMain
    },
  }
}
