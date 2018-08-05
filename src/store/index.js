import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex, Axios)

Axios.baseURL = 'http://api.core'

export const store = new Vuex.Store({
  state: {
    news: [],
    user: false
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    signUserUp ({commit}, payload) {
      Axios.post('/user', {
        user: payload.user,
        email: payload.email,
        pass: payload.pass,
        name: payload.name,
        last: payload.last,
        birth: payload.birth,
        access: payload.access,
        active: payload.active
      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
    }
  },
  getters: {}
})
