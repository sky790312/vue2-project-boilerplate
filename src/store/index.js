import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'
import count from './modules/count'

Vue.use(Vuex)

const state = {

}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    count
  },
  strict: true
})

export default store
