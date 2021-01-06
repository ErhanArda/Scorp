import Vue from 'vue'
import Vuex from 'vuex'
import links from './modules/links'
import userAuth from './modules/userAuth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    links,
    userAuth
  }
})
