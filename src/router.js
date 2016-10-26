import VueRouter from 'vue-router'

import Page1 from './pages/page1'
import Page2 from './pages/page2'

const routes = [
  {
    path: '/page1',
    component: Page1
  }, {
    path: '/page2',
    component: Page2
  }
]

const router = new VueRouter({routes})

export default router
