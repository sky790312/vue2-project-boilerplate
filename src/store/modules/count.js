const state = {
  count: 0
}

const getters = {
  count: state => state.count
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
    state.count = state.count + 1
  },
  DECREMENT (state) {
    state.count = state.count - 1
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
