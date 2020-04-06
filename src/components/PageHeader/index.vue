<template>
  <div class="page-header">
    <div class="header-inner">
      <div class="left">
        <router-link to="/">
          <span class="menu-btn menu-btn-active">首页</span>
        </router-link>
        <el-dropdown placement="bottom-start">
          <span class="el-dropdown-link menu-btn">产品展示</span>
          <el-dropdown-menu slot="dropdown">
            <router-link to="/Products">
              <el-dropdown-item>护肤类</el-dropdown-item>
            </router-link>
            <router-link to="/Products">
              <el-dropdown-item>精油类</el-dropdown-item>
            </router-link>
            <router-link to="/Products">
              <el-dropdown-item>原料类</el-dropdown-item>
            </router-link>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown placement="bottom-start">
          <span class="el-dropdown-link menu-btn">芳疗学院</span>
          <el-dropdown-menu slot="dropdown">
            <router-link to="/TrainingPage">
              <el-dropdown-item>芳疗培训</el-dropdown-item>
            </router-link>
            <router-link to="/AromatherapistHomePage">
              <el-dropdown-item>芳疗师主页</el-dropdown-item>
            </router-link>
            <router-link to="/LibraryPage">
              <el-dropdown-item>芳疗图书馆</el-dropdown-item>
            </router-link>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="logo"></div>
      <div class="right">
        <el-dropdown placement="bottom-start">
          <span class="el-dropdown-link menu-btn">企业资讯</span>
          <el-dropdown-menu slot="dropdown">
            <router-link to="/NewsListPage">
              <el-dropdown-item>实时资讯</el-dropdown-item>
            </router-link>
            <router-link to="/NewsListPage">
              <el-dropdown-item>芳疗资讯</el-dropdown-item>
            </router-link>
            <router-link to="/NewsListPage">
              <el-dropdown-item>科技资讯</el-dropdown-item>
            </router-link>
          </el-dropdown-menu>
        </el-dropdown>
        <router-link to="/AboutUS">
          <span class="menu-btn">关于我们</span>
        </router-link>
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
