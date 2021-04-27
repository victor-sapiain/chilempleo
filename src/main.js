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
    Vue.prototype.$Amplify.Auth.currentAuthenticatedUser()
      .then((data) => {    
        if (data.attributes['custom:perfil']!=''){
          let perfil  = "" 
          if (to.matched.some((record) => record.meta.postulante))
            perfil = 'postulante'
          else
            perfil = 'empleador'
          if (data.attributes['custom:perfil']!=perfil){      
            next({
              path: "/",
            });
          }
        }
        if (data && data.signInUserSession && data.attributes['email_verified']) {
          let expireTimeSeconds = (data.signInUserSession['accessToken']['payload']['auth_time']) +((600)*6)*4      
          let currentTimeSeconds = Math.round(+new Date() / 1000)
          if (expireTimeSeconds>currentTimeSeconds){
            localStorage.setItem('user', data.attributes['email'])
            localStorage.setItem('token', JSON.stringify(data.signInUserSession['accessToken']))
          }else{
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            Vue.prototype.$Amplify.Auth.signOut()
            .then(data => console.log(data))
            .catch(err => console.log(err))            
          }
        }else{
          localStorage.removeItem('user');
          localStorage.removeItem('token');
          Vue.prototype.$Amplify.Auth.signOut()
          .then(data => console.log(data))
          .catch(err => console.log(err))
        }
        next();
      })
      .catch((e) => {
        next({
          path: "/",
        });
      });
  }else{
    console.log('111')
    Vue.prototype.$Amplify.Auth.currentAuthenticatedUser()
    .then((data) => {  
        if(data.attributes['email_verified']){
          //expira en 4 hrs
          let expireTimeSeconds = (data.signInUserSession['accessToken']['payload']['auth_time']) +((600)*6)*4      
          let currentTimeSeconds = Math.round(+new Date() / 1000)
          // console.log(expireTimeSeconds)
          //console.log(currentTimeSeconds)
          if (expireTimeSeconds>currentTimeSeconds){
            localStorage.setItem('user', data.attributes['email'])
            localStorage.setItem('token', JSON.stringify(data.signInUserSession['accessToken']))
          }else{
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            Vue.prototype.$Amplify.Auth.signOut()
            .then(data => console.log(data))
            .catch(err => console.log(err))            
          }
        }else{         
          localStorage.removeItem('user');
          localStorage.removeItem('token');
          Vue.prototype.$Amplify.Auth.signOut()
          .then(data => console.log(data))
          .catch(err => console.log(err))
        }
    })
    .catch((e) => {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      Vue.prototype.$Amplify.Auth.signOut()
      next();
    });
    next();
  }
  
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
  //var localUser = JSON.parse(localUserString)
  //var localUser = localUserString
  if (localUserString!='null') {
    store.commit('SET_USER', localUserString)
    store.commit('SET_TOKEN', window.localStorage.getItem('token'))
  }else{
    store.commit('SET_USER', "")
    store.commit('SET_TOKEN', "")
  }
}else{
    store.commit('SET_USER', "")
    store.commit('SET_TOKEN', "")
}
new Vue({
  el: '#root',
  router: router,
  store: store,
  render: h => h(AppView)
})
 