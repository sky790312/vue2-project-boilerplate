<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ mixinData }}</h2>
    <ul v-if="testMixin()">>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
  </div>
</template>

<script>
import mixins from '../mixins'
export default {
  name: 'hello',
  mixins: [
    mixins
  ],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  props: {
    title: {
      type: String,
      default () {
        return 'is title'
      }
    }
  },
  mounted () {
    // console.log(this)
  },
  methods: {
    test () {
      return 1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
