// Import ES6 Promise
import 'es6-promise/auto'

// Import System requirements
import Vue from 'vue'
import VueRouter from 'vue-router'


import Amplify from '@aws-amplify/core'
import awsExports from './aws-exports';

Amplify.configure(awsExports);
Vue.prototype.$Amplify = Amplify // <- This line is important

import { sync } from 'vuex-router-sync'
import routes from './routes'
import store from './store'
import VueHead from 'vue-head'
import VueSpinners from 'vue-spinners'
import ToggleSwitch from 'vuejs-toggle-switch'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import BackToTop from 'vue-backtotop'

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

import { domain, count, prettyDate, pluralize } from './filters'

// Import Views - Top level
import AppView from './components/App.vue'


Vue.use(VueHead)
Vue.use(VueSpinners)
Vue.use(ToggleSwitch)
Vue.use(VueSweetalert2);
Vue.use(BackToTop)

Vue.component(VueSlickCarousel.name, VueSlickCarousel)

// Import Install and register helper items
Vue.filter('count', count)
Vue.filter('domain', domain)
Vue.filter('prettyDate', prettyDate)
Vue.filter('pluralize', pluralize)

Vue.use(VueRouter)

// Routing logic
var router = new VueRouter({
  routes: routes,
  mode: 'history',
  linkExactActiveClass: 'active',
  scrollBehavior: function(to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
})


router.beforeResolve((to, from, next) => {
  
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    let user;
    Vue.prototype.$Amplify.Auth.currentAuthenticatedUser()
      .then((data) => {
        console.log(data)
        console.log(data.signInUserSession)
        if (data && data.signInUserSession) {
          user = data;
        }
        next();
      })
      .catch((e) => {
        next({
          path: "/acceso",
        });
      });
  }
  next();
});

/*
router.beforeEach((to, from, next) => {
  
  if (to.meta.mantencion) {
    next('/enmantencion')
  }    
  else {
    next()
  }    
    
})
*/

sync(store, router)

// Check local storage to handle refreshes
if (window.localStorage) {
  var localUserString = window.localStorage.getItem('user') || 'null'
  var localUser = JSON.parse(localUserString)

  if (localUser && store.state.user !== localUser) {
    store.commit('SET_USER', localUser)
    store.commit('SET_TOKEN', window.localStorage.getItem('token'))
  }
}
new Vue({
  el: '#root',
  router: router,
  store: store,
  render: h => h(AppView)
})
 