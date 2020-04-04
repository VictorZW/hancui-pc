<template>
  <div id="app">
    <PageHeader/>
    <router-view/>
    <PageFooter/>
  </div>
</template>

<script>
  import PageHeader from '@/components/PageHeader'
  import PageFooter from '@/components/PageFooter'
  export default {
    name: 'App',
    components: {
      PageHeader,
      PageFooter
    }
  }
</script>

<style lang="scss">
  @import 'assets/styles/app.scss';
</style>
