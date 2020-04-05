<template>
  <div id="app">
    <PageHeader/>
    <router-view/>
    <PageFooter
      v-if="!showFooter"
    />
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
    },
    computed: {
      showFooter() {
        return this.$route.name === 'HomePage'
      }
    }
  }
</script>

<style lang="scss">
  @import 'assets/styles/app.scss';
</style>
