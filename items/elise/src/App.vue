<template lang='pug'>
  #app
    router-view
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="stylus">
@import './assets/styles/utils'

html, body
  Default_W_H()
  background-color #f0f0f0
#app
  Default_W_H()
</style>

