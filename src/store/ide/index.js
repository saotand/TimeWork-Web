import Axios from 'axios'
Axios.defaults.baseURL = 'http://api.core/'

export default ({
  state: {
    // Tiitle name
    title: 'TimeWork',
    // Toolbar Exist
    toolbarapp: true,
    miniVariant: false,
    right: true,
    rightDrawer: false,
    clipped: true,
    drawer: false,
    fixed: false,
    // Mostrar errores si lo requiere
    error: false,
    // Mostrar elementos de carga si los requiere
    loading: false,
    // Barra de navegacion
    navbar: true,
    // Menu
    menus: true,
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
    },
    sIDE (state) {
      state.toolbarapp = true
      state.drawer = true
      state.rightDrawer = true
    },
    hIDE (state) {
      state.toolbarapp = false
      state.drawer = false
      state.rightDrawer = false
    },
    tgIDE (state) {
      state.toolbarapp = !state.toolbarapp
    },
    tgDrawer (state) {
      state.drawer = !state.drawer
    },
    tgRDrawer (state) {
      state.rightDrawer = !state.rightDrawer
    },
    tgMiniVariant (state) {
      state.miniVariant = !state.miniVariant
    }
  },
  actions: {
    showIDE ({commit}) {
      commit('sIDE')
    },
    hideIDE ({commit}) {
      commit('hIDE')
    },
    toggleIDE ({commit}) {
      commit('tgIDE')
    },
    toggleDrawer ({commit}) {
      commit('tgDrawer')
    },
    toggleRDrawer ({commit}) {
      commit('tgRDrawer')
    },
    toggleMiniVariant ({commit}) {
      alert('mi mini')
      commit('tgMiniVariant')
    }

  },
  getters: {
    getMenu (state) {
      return state.menu
    },
    getIDEdata (state) {
      let menu = {
        toolbarapp: state.toolbarapp,
        miniVariant: state.miniVariant,
        right: state.right,
        rightDrawer: state.rightDrawer,
        title: state.title,
        clipped: state.clipped,
        drawer: state.drawer,
        fixed: state.fixed,
        menur: state.menur
      }
      return menu
    }
  }
})
