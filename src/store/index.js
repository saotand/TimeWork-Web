import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import ide from './ide'
import mytask from './task'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    user: user,
    interface: ide,
    tasks: mytask
  }
})
