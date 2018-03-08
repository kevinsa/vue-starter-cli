import Vuex from 'vuex'
import Vue from 'vue'

// set up application to use Vuex (application state management)
Vue.use(Vuex)

// set up the application state accessible by all components
const store = new Vuex.Store({
  state: {
    authenticated: false,
    authenticatedUser: {}
  },
  getters: {
    authenticated: state => {
      return state.authenticated
    },
    authenticatedUser: state => {
      return state.authenticatedUser
    }
  },
  mutations: {
    setAuthenticated (state, payload) {
      state.authenticated = payload.authenticated
      state.authenticatedUser = payload.user
    }
  }
})

export default store
