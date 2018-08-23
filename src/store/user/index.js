import Axios from 'axios'
Axios.defaults.baseURL = 'http://api.core'

export default ({
  state: {
    user: null,
    token: null

  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setToken (state, payload) {
      state.token = payload
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
        // Activar el token en la sesion
        let token = response.data.data.token
        // Colocar los datos de usuario en la sesion del sistema
        let user = response.data.data.user
        sessionStorage.setItem('token', token)
        commit('setToken', token)
        commit('setUser', user)
        commit('setLoading', false)
      })
      .catch(myerror => {
        commit('setLoading', false)
        commit('setError', myerror.response.data.error.message)
      })
    },
    autosignin ({commit}) {
      let token = sessionStorage.getItem('token')
      if (token) {
        commit('setLoading', true)
        Axios.post('/autoload?format=json', null, {headers: { 'Authorization': token }})
        .then(
          response => {
            let user = response.data.data
            commit('setUser', user)
            // this.$store.dispatch('autosignin', user)
            commit('setLoading', false)
          })
        .catch(
          response => {
            /*
            let error = response.response.data.error
            console.log(error)
            */
            commit('setError', 'La sesion ha expirado')
            commit('setLoading', false)
            sessionStorage.removeItem('token')
          }
        )
      }
    },
    signOutUser ({commit}) {

    },
    setSesionUser (payload) {

    },
    unSetSesionUser (payload) {

    }

  },
  getters: {
    user (state) {
      return state.user
    },
    token (state) {
      return state.token
    }
  }

})

/*
// Store
localStorage.setItem("lastname", "Smith");
// Retrieve
document.getElementById("result").innerHTML = localStorage.getItem("lastname");
// Store
sessionStorage.setItem("lastname", "Smith");
// Retrieve
document.getElementById("result").innerHTML = sessionStorage.getItem("lastname");
*/
