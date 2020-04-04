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
    height: 0.94rem;
    background-color: #069163;
    opacity: 0.8;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    .header-inner {
      min-width: 1200px;
      height: 100%;
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .logo {
        width: 0.71rem;
        height: 0.72rem;
        background-size: cover;
        background-image: url("~@IMG/LOGO.png");
        opacity: 1;
        margin-left: 0.9rem;
        margin-right: 0.9rem;
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
        font-size: 0.18rem;
        color: #FFFFFF;
        padding: 0.05rem 0.15rem;
        margin: 0 0.11rem;
        cursor: pointer;
      }
      .menu-btn-active {
        color: #004033;
        background-color: #FFFFFF;
        border-radius: 0.03rem;
      }
    }
  }
</style>
