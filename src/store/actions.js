import api from '../api'

export const increment = ({ commit }) => {
  commit('INCREMENT')
}

export const decrement = ({ commit }) => {
  commit('DECREMENT')
}

export const exampleCallApi = async ({ commit }, payload) => {
  const urlEnd = '/example/apiurl'
  const type = 'post'
  const resp = await api.asyncFunction(urlEnd, type, payload)
  return resp
}

/*
  dispatch, commit is different
  dispatch => call action, commit => call mutation
*/
