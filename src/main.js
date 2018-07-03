import Vue from 'vue'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store/'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import StarRating from 'vue-star-rating'

Vue.use(Vuetify, Axios, VueAxios)
library.add(faCoffee)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('star-rating', StarRating)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

/*
Font awesome format
<font-awesome-icon icon="coffee" />
<font-awesome-icon icon="spinner" />
<font-awesome-icon :icon="['fas', 'spinner']" /> # Same as above
--------------------------------

vue-axios
A small wrapper for integrating axios to Vuejs

How to install:
CommonJS:
npm install --save axios vue-axios
And in your entry file:

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Script:
Just add 3 scripts in order: vue, axios and vue-axios to your document.

Usage:
This wrapper bind axios to Vue or this if you're using single file component.

You can axios like this:

Vue.axios.get(api).then((response) => {
  console.log(response.data)
})

this.axios.get(api).then((response) => {
  console.log(response.data)
})

this.$http.get(api).then((response) => {
  console.log(response.data)
})
Keywords
vueaxioswrapper

*/
