import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Vuex from 'vuex'
import Axios from 'axios'
import { store } from './store'
import AlertCmp from './components/shared/alert'

Vue.use(Vuetify, { theme: {
  primary: '#166cad',
  secondary: '#424242',
  accent: '#82B1FF',
  error: '#721504',
  info: '#2196F3',
  success: '#096330',
  warning: '#c67000'
}})

Vue.config.productionTip = false
Vue.use(Vuex, Axios)
Vue.component('app-alert', AlertCmp)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
