<template>
  <div id="app">
    <div>
      <router-link to="/page1">Go to page1</router-link>
      <router-link to="/page2">Go to page2</router-link>
    </div>
    <img src="../assets/logo.png">
    <hello></hello>
  </div>
</template>

<script>
import Hello from 'components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  }
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
