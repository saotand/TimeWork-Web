import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex, Axios)

Axios.baseURL = 'http://api.core'

export const store = new Vuex.Store({
  state: {
    // Mostrar errores si lo requiere
    error: false,
    // Mostrar elementos de carga si los requiere
    loading: false,
    // Barra de navegacion
    navbar: true,
    // Menu
    menus: true,
    // Noticias
    news: [],
    // Uauario cargado
    user: false,
    // Items del menu
    menu: [
      {
        icon: 'dashboard',
        title: 'Escritorio',
        url: '/'
      },
      {
        icon: 'star',
        title: 'Mis Asignaciones',
        url: '/tasks'
      },
      {
        icon: 'chat_bubble',
        title: 'Comentarios',
        url: '/comment'
      },
      {
        icon: 'account_circle',
        title: 'Iniciar',
        url: '/signin'
      },
      {
        icon: 'how_to_reg',
        title: 'Registrarse',
        url: '/signup'
      }
    ],
    // Menu Lateral
    menur: [
      {
        title: 'My Perfil',
        url: '/profile',
        icon: 'face'
      }
    ]
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
  getters: {
    getMenu (state) {
      return state.menu
    }
  }
})
