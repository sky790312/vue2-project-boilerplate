import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueI18n from 'vue-i18n'

import locales from './locales'
import router from './router'
import store from './store'

import App from './App'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueI18n)

Vue.config.debug = true

Vue.config.lang = 'en'

Object.keys(locales).forEach(lang => {
  Vue.locale(lang, locales[lang])
})

const app = new Vue({
  el: '#app',
  router: router,
  store,
  render: h => h(App)
})

app.$mount('#app')
