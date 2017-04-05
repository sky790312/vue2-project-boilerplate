import Vue from 'vue'

const api = {
  serverURL: 'http://exampleServerUrl', // your api server url
  version: '/api/v1', // maybe you have a api version
  timeout: { timeout: 20000 }
}

const firebaseConfig = {
  url: 'https://vue-boilerplate-a1aaa.firebaseio.com',
  apiKey: 'AIzaSyBWjuY8b3PszO1g2amB5qGc8Q-xfRwe2Js',
  authDomain: 'vue-boilerplate-a1aaa.firebaseapp.com',
  databaseURL: 'https://vue-boilerplate-a1aaa.firebaseio.com',
  storageBucket: 'vue-boilerplate-a1aaa.appspot.com',
  messagingSenderId: '440784053851'
}

/* eslint-disable */
firebase.initializeApp(firebaseConfig)
/* eslint-enable */

api.asyncRequest = async (urlEnd, type, payload = {}) => {
  return await Vue.http[type](api.url + urlEnd, payload, api.timeout)
}

api.exampleFirebaseAsyncRequest = async (urlEnd, type, payload = {}) => {
  console.log(firebaseConfig.url + urlEnd)
  // return await Vue.http.post('https://vue-boilerplate-a1aaa.firebaseio.com/data.json', 'test')
  return await Vue.http[type](firebaseConfig.url + urlEnd, payload, api.timeout)
}

export default api
