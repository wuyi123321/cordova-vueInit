import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
      userMessage:{},

  },
  getters:{
    getuserMessage:function (state) {
          return state.userMessage
    }
  },
  mutations: {
    setUser (state, user) {
      state.userMessage = user;
    },
  },
  actions: {

  }
})
