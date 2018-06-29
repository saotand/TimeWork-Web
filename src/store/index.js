import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: {
      ID: '123',
      works: []
    }
  },
  mutations: {},
  action: {},
  getters: {}
})
