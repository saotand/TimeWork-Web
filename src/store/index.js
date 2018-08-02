import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex, Axios)

export const store = new Vuex.Store({
  state: {
    news: [],
    user: false
  },
  mutations: {},
  actions: {},
  getters: {}
})
