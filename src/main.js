import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'
import Page1 from './components/page1'
import Page2 from './components/page2'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: App },
  { path: '/page1', component: Page1 },
  { path: '/page2', component: Page2 },
  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  router
}).$mount('#app')
