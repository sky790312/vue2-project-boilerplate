import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home'
import Page1 from './components/page1'
import Page2 from './components/page2'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/page1', component: Page1 },
  { path: '/page2', component: Page2 },
  { path: '*', redirect: '/' }
]

const router = new VueRouter({routes})

export default router
