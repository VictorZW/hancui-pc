<template>
  <div class="page-header">
    <div class="header-inner">
      <div class="left">
        <span class="menu-btn menu-btn-active">首页</span>
        <router-link to="/Products">
          <span class="menu-btn">产品展示</span>
        </router-link>
        <span class="menu-btn">芳疗学院</span>
      </div>
      <div class="logo"></div>
      <div class="right">
        <span class="menu-btn">企业资讯</span>
        <span class="menu-btn">关于我们</span>
        <span class="menu-btn">联系我们</span>
      </div>
    </div>
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
    opacity: 0.8;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    .header-inner {
      width: 1200px;
      min-width: 1200px;
      height: 100%;
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .logo {
        width: 44px;
        height: 44px;
        background-size: cover;
        background-image: url("~@IMG/LOGO.png");
        opacity: 1;
        margin-left: 90px;
        margin-right: 90px;
      }
      .left, .right {
        flex: 1;
      }
      .left {
        text-align: right;
      }
      .right {
        text-align: left;
      }
      .menu-btn {
        display: inline-block;
        font-size: 11px;
        color: #FFFFFF;
        padding: 4px 12px;
        margin: 0 11px;
        cursor: pointer;
      }
      .menu-btn-active {
        color: #004033;
        background-color: #FFFFFF;
        border-radius: 3px;
      }
    }
  }
</style>
