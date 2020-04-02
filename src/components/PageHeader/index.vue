<template>
  <div class="page-header">
    <div class="header-inner"></div>
  </div>
</template>

<script>
  export default {
    name: 'PageHeader'
  }
</script>

<style lang="scss" scoped>
  .page-header {
    width: 100%;
    height: 59px;
    background-color: #069163;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    .header-inner {
      width: 1200px;
      height: 100%;
      margin: auto;
    }
  }
</style>
