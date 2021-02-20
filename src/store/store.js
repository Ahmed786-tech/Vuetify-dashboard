import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export const store = new Vuex.Store({
    plugins: [createPersistedState()],
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})