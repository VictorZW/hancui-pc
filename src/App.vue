<template>
  <div id="app">
    <div class="header">header</div>
    <router-view/>
    <div class="footer">footer</div>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="scss">
  @import 'assets/styles/app.scss';
</style>
