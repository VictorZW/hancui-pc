<template>
  <div class="PersonalPage">
    <div class="page-inner">
      <div class="brand-search">
        <div class="Breadcrumb">当前位置：首页/企业资讯</div>
      </div>
      <div class="PersonalPage-content">
        <div class="avatar"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .PersonalPage {
    width: 100%;
    height: 100vh;
    background-image: url("~@IMG/te-banner.png");
    background-size: cover;
    .page-inner {
      padding-top: 0.94rem;
      .Breadcrumb {
        color: #FFFFFF;
      }
      .PersonalPage-content {
        margin-top: 0.65rem;
        width: 100%;
        height: 7.05rem;
        background-color: #FFFFFF;
        position: relative;
        .avatar {
          width: 2.25rem;
          height: 2.72rem;
          background-color: red;
          position: absolute;
          top: -0.66rem;
          left: -1.52rem;
        }
      }
    }
  }
</style>
