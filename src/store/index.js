import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import ide from './ide'
import mytask from './task'
import Axios from 'axios'

Axios.defaults.baseURL = 'http://api.core'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    user: user,
    interface: ide,
    tasks: mytask
  }
})
