export const increment = ({ commit }) => {
  commit('INCREMENT')
}

export const decrement = ({ commit }) => {
  commit('DECREMENT')
}

/*
  dispatch, commit is different
  dispatch => call action, commit => call mutation
*/
