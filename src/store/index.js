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
    checkUser ({ commit }, payload) {
      let sender = {'user': payload.user}
      Axios.post('/user/checkuser', sender)
      .catch(error => {
        console.log(error)
      })
      .then(response => {
        console.log(response)
      })
    },
    signUserUp ({ commit }, payload) {
      Axios.post('/user/new', payload)
      .catch(error => {
        // handle error
        console.log(error)
      })
      .then(response => {
        console.log(response)
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
