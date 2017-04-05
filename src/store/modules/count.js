const state = {
  count: 0
}

const getters = {

}
const actions = {
  async increment ({ commit }) {
    commit('INCREMENT')
  },

  async decrement ({ commit }) {
    commit('DECREMENT')
  }
}

const mutations = {
  INCREMENT (state) {
    state => state.count++
  },
  DECREMENT (state) {
    state => state.count--
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
