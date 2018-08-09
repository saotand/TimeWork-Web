import Axios from 'axios'
Axios.defaults.baseURL = 'http://api.core'

export default ({
  state: {
    user: false
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    signUserUp ({commit}, payload) {
      Axios.post('/user/new', {
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
    },
    signUserIn ({commit}, payload) {
      Axios.post('/user/login', payload)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
    }
  },
  getters: {
  }
})
