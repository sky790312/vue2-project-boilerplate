import Vue from 'vue'

const api = {
  serverURL: 'http://exampleServerUrl',
  version: '/example/v1'
}

api.example = (exampleProperty) => {
  return new Promise((resolve, reject) => {
    const EXAMPLE_API_URL = api.serverURL + api.version + '/exampleApi?property=' + exampleProperty
    Vue.http.get(EXAMPLE_API_URL, {}).then(resp => {
      resolve(resp)
    }, err => {
      console.log('call example api error: ', err)
      reject(err)
    })
  })
}
