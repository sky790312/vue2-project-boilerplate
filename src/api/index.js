import Vue from 'vue'

const api = {
  serverURL: 'http://exampleServerUrl',
  version: '/api/v1',
  'timeout': { timeout: 20000 }
}

// api.example = async (exampleProperty) => {
//   const EXAMPLE_API_URL = api.serverURL + api.version + '/exampleApi?property=' + exampleProperty
//   const resp = await Vue.http.get(EXAMPLE_API_URL, {})
//   return resp
// }

api.asyncFunction = async (urlEnd, type, payload = {}) => {
  return await Vue.http[type](api.url + urlEnd, payload, api.timeout)
}
