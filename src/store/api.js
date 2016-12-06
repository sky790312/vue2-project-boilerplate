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
  let resp = {}
  if (type === 'get') resp = await Vue.http.get(api.serverUrl + urlEnd, payload, api.timeout)
  else if (type === 'post') resp = await Vue.http.post(api.serverUrl + urlEnd, payload, api.timeout)
  else if (type === 'put') resp = await Vue.http.put(api.serverUrl + urlEnd, payload, api.timeout)
  return resp
}
