import api from '../api'

// export const increment = ({ commit }) => {
//   commit('INCREMENT')
// }
//
// export const decrement = ({ commit }) => {
//   commit('DECREMENT')
// }

export const exampleApiCall = async ({ commit }, payload) => {
  const urlEnd = '/example/apiurl'
  const type = 'post'
  const resp = await api.asyncRequest(urlEnd, type, payload)
  return resp
}

export const exampleGetFirebaseData = async ({ commit }, payload) => {
  const urlEnd = '/data.json'
  const type = 'get'
  const resp = await api.exampleFirebaseAsyncRequest(urlEnd, type, payload)
  return resp
}

export const examplePostFirebaseData = async ({ commit }, payload) => {
  const urlEnd = '/data.json'
  const type = 'post'
  const resp = await api.exampleFirebaseAsyncRequest(urlEnd, type, payload)
  return resp
}

/*
  dispatch, commit is different
  dispatch => call action, commit => call mutation
*/
