import Axios from 'axios'
Axios.defaults.baseURL = 'http://api.core'

export default ({
  state: {
    user: null
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    signUserUp ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      Axios.post('/user/new?format=json', {
        user: payload.user,
        email: payload.email,
        pass: payload.pass,
        name: payload.name,
        last: payload.last,
        birth: payload.birth,
        access: payload.access,
        active: payload.active
      })
      .then(response => {
        commit('setLoading', false)
        commit('setSuccess', response.data.message)
        parent.$router.push('/signin')
      })
      .catch(myerror => {
        if (myerror.response) {
          commit('setLoading', false)
          commit('setError', myerror.response.data.error.message)
        }
      })
    },
    signUserIn ({commit}, payload) {
      let logindata = { 'user': payload.user, 'pass': payload.pass }
      commit('setLoading', true)
      commit('clearError')
      Axios.post('/login?format=json', logindata)
      .then(response => {
        commit('setLoading', false)
        console.log(response.data.error)
      })
      .catch(myerror => {
        commit('setLoading', false)
        commit('setError', myerror.response.data.error.message)
      })
    }
  },
  getters: {
    account (state) {
      return state.user
    }
  }
})
