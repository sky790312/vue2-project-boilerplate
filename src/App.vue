<template>
  <div id="app">
    <h2>{{ $t("example") }}</h2>
    <p>{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
    <div>
      <router-link to="/page1">Go to page1</router-link>
      <router-link to="/page2">Go to page2</router-link>
    </div>
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <img src="./assets/logo.png">
    <hello></hello>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import Hello from 'components/Hello'

export default {
  name: 'app',

  components: {
    Hello
  },

  computed: mapGetters([
    'count'
  ]),

  methods: mapActions([
    'increment',
    'decrement'
  ])

  // computed: mapGetters([
  // ]),
  //
  // methods: {
  //   ...mapActions([
  //     'fetchGaUserLogin'
  //   ])
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
