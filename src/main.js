import Vue from 'vue'
import router from './router'

import App from './App'

const app = new Vue({
  router: router,
  render: h => h(App)
})

app.$mount('#app')
