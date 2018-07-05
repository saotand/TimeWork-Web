import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex, Axios)

const baseURL = 'http://api.base/'
Axios.defaults.baseURL = baseURL

export const store = new Vuex.Store({
  state: {
    user: false
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    signUserUp ({ commit }, payload) {
      Axios.post('/user/new', payload)
      .then(response => {
        alert(response)
      })
      /*
      Axios.post('user/new', payload, {headers: {Authorization: 'Bearer ' + 'token'}})
      .then(response => {
        alert(response)
      })
      */
    }
  },
  getters: {}
})
