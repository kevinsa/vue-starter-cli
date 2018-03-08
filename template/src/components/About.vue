<template>
  <div>
    <b-row>
      <b-col>
        <h1>{{ pageTitle }}</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <p>This is the app about page</p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    name: 'About',
    data () {
      return {
        pageTitle: 'About Page'
      }
    },
    created () {
      // created lifecycle hook...
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
</style>

