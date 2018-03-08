// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'
import Routes from './router'
import Vue from 'vue'
import VueRouter from 'vue-router'
import CitrixPlugins from 'ctxs-vue-plugins'
import BootstrapVue from 'bootstrap-vue'
import store from './store/store'

// Config app
Vue.config.productionTip = false

// Register citrix plugins
Vue.use(CitrixPlugins.BottlePlugin)
Vue.use(CitrixPlugins.EventDispatcherPlugin)
Vue.use(CitrixPlugins.AuthenticationPlugin)
Vue.use(CitrixPlugins.LockerPlugin)

// Register libraries
Vue.use(VueRouter)
Vue.use(BootstrapVue)

// Instantiate router
const router = new VueRouter({
  routes: Routes
})

// Set up authentication check (ensure user is authenitcated for protected routes)
router.beforeEach((to, from, next) => {
  const requiresAuth = to.meta.requiresAuth || false
  const authenticated = store.getters.authenticated

  if (requiresAuth && !authenticated) {
    next('/login')
  } else {
    next()
  }
})

// Bootstrap App
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store: store
})
