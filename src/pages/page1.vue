<template>
  <div class="page1">
    <h1>page1<h1>
  </div>
</template>

<script>
export default {
  name: 'page1',
  data () {
    return {

    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      // if get page data before route enter for page to use
      // page component keep alive, put data to vuex
      // check if data already exist to get async data or not
      // ex:
      // if (!Object.keys(vm.group).length) {
        //
      // }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page1 {
  color: yellow
}
</style>
