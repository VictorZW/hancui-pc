<template>
  <div class="Products page-content">
    <div class="banner"></div>
    <div class="page-inner">
      <div class="brand-search">
        <div class="Breadcrumb">当前位置：首页/产品中心/护肤类</div>
        <div class="search">搜索</div>
      </div>
      <div class="pro-list">
        <div class="pro-card">
          <div class="pro-img">
            <img src="~@IMG/banner2.png" alt="">
          </div>
          <div class="pro-text">
            <div class="title">玫瑰纯露500ml</div>
            <div class="description">纯天然 正品 补水保湿 提亮肤色  温和嫩肤 女神必备 清爽 吸收快 </div>
          </div>
        </div>
        <div class="pro-card">
          <div class="pro-img">
            <img src="~@IMG/banner2.png" alt="">
          </div>
          <div class="pro-text">
            <div class="title">玫瑰纯露500ml</div>
            <div class="description">纯天然 正品 补水保湿 提亮肤色  温和嫩肤 女神必备 清爽 吸收快 </div>
          </div>
        </div>
        <div class="pro-card">
          <div class="pro-img">
            <img src="~@IMG/banner2.png" alt="">
          </div>
          <div class="pro-text">
            <div class="title">玫瑰纯露500ml</div>
            <div class="description">纯天然 正品 补水保湿 提亮肤色  温和嫩肤 女神必备 清爽 吸收快 </div>
          </div>
        </div>
        <div class="pro-card">
          <div class="pro-img">
            <img src="~@IMG/banner2.png" alt="">
          </div>
          <div class="pro-text">
            <div class="title">玫瑰纯露500ml</div>
            <div class="description">纯天然 正品 补水保湿 提亮肤色  温和嫩肤 女神必备 清爽 吸收快 </div>
          </div>
        </div>
        <div class="pro-card">
          <div class="pro-img">
            <img src="~@IMG/banner2.png" alt="">
          </div>
          <div class="pro-text">
            <div class="title">玫瑰纯露500ml</div>
            <div class="description">纯天然 正品 补水保湿 提亮肤色  温和嫩肤 女神必备 清爽 吸收快 </div>
          </div>
        </div>
        <div class="pro-card">
          <div class="pro-img">
            <img src="~@IMG/banner2.png" alt="">
          </div>
          <div class="pro-text">
            <div class="title">玫瑰纯露500ml</div>
            <div class="description">纯天然 正品 补水保湿 提亮肤色  温和嫩肤 女神必备 清爽 吸收快 </div>
          </div>
        </div>
        <div class="pro-card">
          <div class="pro-img">
            <img src="~@IMG/banner2.png" alt="">
          </div>
          <div class="pro-text">
            <div class="title">玫瑰纯露500ml</div>
            <div class="description">纯天然 正品 补水保湿 提亮肤色  温和嫩肤 女神必备 清爽 吸收快 </div>
          </div>
        </div>
        <div class="pro-card">
          <div class="pro-img">
            <img src="~@IMG/banner2.png" alt="">
          </div>
          <div class="pro-text">
            <div class="title">玫瑰纯露500ml</div>
            <div class="description">纯天然 正品 补水保湿 提亮肤色  温和嫩肤 女神必备 清爽 吸收快 </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Products'
  }
</script>

<style lang="scss" scoped>
  .Products {
    .banner {
      width: 100%;
      height: 7rem;
      background-image: url("~@IMG/banner2.png");
      background-size: cover;
    }
    .brand-search {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 0.76rem;
      .search {
        font-size: inherit;
      }
    }
    .page-inner {
      width: 12rem;
      margin: auto;
      .pro-list {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .pro-card {
          width: 5.8rem;
          height: 3.3rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          padding-left: 0.1rem;
          padding-right: 0.7rem;
          background: rgba(255, 255, 255, 1);
          box-shadow: 0px 0px 13px 0px rgba(0, 64, 51, 0.15);
          margin-bottom: 0.4rem;
          &:hover {
            transform: scale(1.06, 1.06);
            transition: transform .2s;
          }
          .pro-img {
            width: 2.46rem;
            height: 2.46rem;
            margin-right: 0.27rem;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .pro-text {
            height: 2.46rem;
            flex: 1;
            .title {
              font-size: 0.18rem;
              color: #333333;
              font-weight: 400;
              padding-top: 0.82rem;
            }
            .description {
              font-size: 0.16rem;
              color: #333333;
              font-weight: 300;
              padding-top: 0.21rem;
              line-height: 1.4;
            }
          }
        }
      }
    }
  }
</style>
