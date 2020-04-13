<template>
  <div class="page-header">
    <div class="header-inner">
      <div class="left">
        <router-link to="/">
          <span
            class="menu-btn"
            :class="[pageName === 'HomePage' ? 'menu-btn-active' : '']"
          >首页</span>
        </router-link>
        <el-dropdown placement="bottom-start">
          <span
            class="el-dropdown-link menu-btn"
            :class="[pageName === 'Products' ? 'menu-btn-active' : '']"
          >产品服务</span>
          <el-dropdown-menu slot="dropdown">
            <router-link
              :to="{ name: 'Products', params: { type: 1 }}"
            >
              <el-dropdown-item>护肤类</el-dropdown-item>
            </router-link>
            <router-link
              :to="{ name: 'Products', params: { type: 2 }}"
            >
              <el-dropdown-item>精油类</el-dropdown-item>
            </router-link>
            <router-link
              :to="{ name: 'Products', params: { type: 3 }}"
            >
              <el-dropdown-item>原料类</el-dropdown-item>
            </router-link>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown placement="bottom-start">
          <span
            class="el-dropdown-link menu-btn"
            :class="[pageName === 'flSchool' ? 'menu-btn-active' : '']"
          >芳疗学院</span>
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
          <span
            class="el-dropdown-link menu-btn"
            :class="[pageName === 'NewsListPage' ? 'menu-btn-active' : '']"
          >企业资讯</span>
          <el-dropdown-menu slot="dropdown">
            <router-link
              :to="{ name: 'NewsListPage', params: { type: 1 }}"
            >
              <el-dropdown-item>实时资讯</el-dropdown-item>
            </router-link>
            <router-link
              :to="{ name: 'NewsListPage', params: { type: 2 }}"
            >
              <el-dropdown-item>芳疗资讯</el-dropdown-item>
            </router-link>
            <router-link
              :to="{ name: 'NewsListPage', params: { type: 3 }}"
            >
              <el-dropdown-item>科技资讯</el-dropdown-item>
            </router-link>
          </el-dropdown-menu>
        </el-dropdown>
        <router-link to="/AboutUS">
          <span class="menu-btn"
                :class="[pageName === 'AboutUS' ? 'menu-btn-active' : '']"
          >关于我们</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PageHeader',
    data() {
      return {
        pageName: 'HomePage'
      }
    },
    watch: {
      $route: {
        handler: function(){
          this.getPageName()
        },
        deep: true
      }
    },
    mounted() {
      this.getPageName()
    },
    methods: {
      getPageName() {
        if (this.$route.name === 'AromatherapistHomePage' ||
          this.$route.name === 'TrainingPage' ||
          this.$route.name === 'LibraryPage') {
          this.pageName = 'flSchool'
        } else {
          this.pageName = this.$route.name
        }
      }
    }
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
