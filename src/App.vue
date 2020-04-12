<template>
  <div id="app">
    <PageHeader/>
    <router-view/>
    <PageFooter
      v-if="hideFooter"
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
      hideHeader() {
        return !this.$route.meta.hideHeader
      },
      hideFooter() {
        return !this.$route.meta.hideFooter
      },
    }
  }
</script>

<style lang="scss">
  @import 'assets/styles/app.scss';
</style>
