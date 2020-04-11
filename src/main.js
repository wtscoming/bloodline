import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Login from './components/Login'
import Home from './components/Home'
import NotFound from './components/NotFound'

const router = new VueRouter({
  routes: [
    { path: '/', component: Login },
    { path: '/home', component: Home },
    { path: '/error', component: NotFound },
    { path: '*', redirect: '/error' }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  if (to.path !== '/' && to.path !== '/error') {
    const id = to.query.id
    if (!sessionStorage.login || sessionStorage.login !== id) {
      next('/')
      return
    }
  }
  next()
})

const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.prototype.$host = 'http://192.168.0.101:5000'
//Vue.prototype.$host = 'http://182.92.159.87:5000'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
