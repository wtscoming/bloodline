import Vue from 'vue'
import App from './App.vue'

const FastClick = require('fastclick')
FastClick.attach(document.body)

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import { AlertPlugin, ToastPlugin } from 'vux'
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)

new Vue({
  el: '#app',
  render: h => h(App)
})
