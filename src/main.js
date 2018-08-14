// Importaciones
import Vue from 'vue'
import VuePreload from 'vue-preload'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Vuex from 'vuex'
import Axios from 'axios'
import { store } from './store'
import AlertCmp from './components/shared/alert'
import successCmp from './components/shared/success'
import loadingCmp from './components/shared/loading'

Vue.use(VuePreload)
// with options
Vue.use(VuePreload, {
  // show the native progress bar
  // put <preloading></preloading> in your root component
  showProgress: true,
  onStart () {
    console.log('start')
  },
  onEnd () {
    console.log('end')
  }
})

// Tema personalizado
Vue.use(Vuetify, { theme: {
  primary: '#166cad',
  secondary: '#424242',
  accent: '#82B1FF',
  error: '#721504',
  info: '#2196F3',
  success: '#096330',
  warning: '#c67000'
}})

// Declaraqcion de componentes y usos VUE
Vue.config.productionTip = false
Vue.use(Vuex, Axios)
Vue.component('app-alert', AlertCmp)
Vue.component('app-success', successCmp)
Vue.component('app-loading', loadingCmp)

// Declaracion del objeto VUE
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
