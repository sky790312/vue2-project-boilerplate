<template>
  <div id="app">
    <h2>{{ $t("example") }}</h2>
    <p>{{ count }}</p>
    <p>
      <button @click="increment()">+</button>
      <button @click="decrement()">-</button>
    </p>
    <input type="text" v-model="newUserName">
    <button @click="handleAddUserButton()">add</button>
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

  data () {
    return {
      newUserName: ''
    }
  },

  computed: {
    ...mapGetters([
      'count'
    ])
  },

  methods: {
    ...mapActions([
      'increment',
      'decrement',
      'exampleGetFirebaseData',
      'examplePostFirebaseData'
    ]),

    handleAddUserButton () {
      const user = {
        name: this.newUserName
      }
      this.examplePostFirebaseData(user)
        .then(resp => {
          // console.log('resp: ', resp)
        })
        .catch(error => {
          console.log('catch error: ', error)
        })
    },

    handleError () {

    }
  },

  beforeMount () {
    this.exampleGetFirebaseData()
      .then(resp => {
        // console.log('resp: ', resp)
      })
      .catch(error => {
        this.handleError(error)
        // console.log('catch error: ', error)
      })
  }
}
</script>

<style lang="stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px

  .dropdown > input {
    height: 30px
  }
}

</style>
