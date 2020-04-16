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
        <div class="drop-down-comp">
          <router-link
            :to="{ name: 'Products', params: { type: 1 }}"
          >
            <div class="menu-btn"
                 :class="[pageName === 'Products' ? 'menu-btn-active' : '']"
            >产品服务</div>
          </router-link>
          <div class="drop-down-list">
            <div class="drop-down-li">
              <router-link
                :to="{ name: 'Products', params: { type: 1 }}"
              >
                <span>护肤类</span>
              </router-link>
            </div>
            <div class="drop-down-li">
              <router-link
                :to="{ name: 'Products', params: { type: 2 }}"
              >
                <span>精油类</span>
              </router-link>
            </div>
            <div class="drop-down-li">
              <router-link
                :to="{ name: 'Products', params: { type: 3 }}"
              >
                <span>原料类</span>
              </router-link>
            </div>
          </div>
        </div>
        <div class="drop-down-comp">
          <router-link to="/TrainingPage">
            <div class="menu-btn"
                 :class="[pageName === 'flSchool' ? 'menu-btn-active' : '']"
            >芳疗学院</div>
          </router-link>
          <div class="drop-down-list">
            <div class="drop-down-li">
              <router-link to="/TrainingPage">
                <span>芳疗培训</span>
              </router-link>
            </div>
            <div class="drop-down-li">
              <router-link to="/AromatherapistHomePage">
                <span>芳疗师主页</span>
              </router-link>
            </div>
            <div class="drop-down-li">
              <router-link to="/LibraryPage">
                <span>芳疗图书馆</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <router-link to="/">
        <div class="logo"></div>
      </router-link>
      <div class="right">
        <div class="drop-down-comp">
          <router-link
            :to="{ name: 'NewsListPage', params: { type: 1 }}"
          >
            <div class="menu-btn"
                 :class="[pageName === 'NewsListPage' ? 'menu-btn-active' : '']"
            >企业资讯</div>
          </router-link>
          <div class="drop-down-list">
            <div class="drop-down-li">
              <router-link
                :to="{ name: 'NewsListPage', params: { type: 1 }}"
              >
                <span>实时资讯</span>
              </router-link>
            </div>
            <div class="drop-down-li">
              <router-link
                :to="{ name: 'NewsListPage', params: { type: 2 }}"
              >
                <span>芳疗资讯</span>
              </router-link>
            </div>
            <div class="drop-down-li">
              <router-link
                :to="{ name: 'NewsListPage', params: { type: 3 }}"
              >
                <span>科技资讯</span>
              </router-link>
            </div>
          </div>
        </div>
        <router-link to="/AboutUS">
          <span class="menu-btn"
                :class="[pageName === 'AboutUS' ? 'menu-btn-active' : '']"
          >关于我们</span>
        </router-link>
        <router-link to="/ContactUs">
          <span class="menu-btn"
                :class="[pageName === 'ContactUs' ? 'menu-btn-active' : '']"
          >联系我们</span>
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
      // ProductsDetail
      getPageName() {
        console.log(this.$route.name)
        if (this.$route.name === 'AromatherapistHomePage' ||
          this.$route.name === 'TrainingPage' ||
          this.$route.name === 'LibraryPage' ||
          this.$route.name === 'PersonalPage'
        ) {
          this.pageName = 'flSchool'
        } else if (this.$route.name === 'ProductsDetail' || this.$route.name === 'Products') {
          this.pageName = 'Products'
        } else if (this.$route.name === 'NewsDetailPage') {
          this.pageName = 'NewsListPage'
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
    opacity: 0.8;
    .header-inner {
      min-width: 12rem;
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
