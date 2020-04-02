<template>
  <div id="app">
    <PageHeader/>
    <router-view/>
    <div class="footer">footer</div>
  </div>
</template>

<script>
  import PageHeader from '@/components/PageHeader'
  export default {
    name: 'App',
    components: {
      PageHeader
    }
  }
</script>

<style lang="scss">
  @import 'assets/styles/app.scss';
</style>
