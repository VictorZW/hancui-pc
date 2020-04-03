<template>
  <div class="Products page-content">
    <div class="banner"></div>
    <div class="pro-content">
      <div class="brand-search">
        <div class="brand">当前位置：首页/产品中心/护肤类</div>
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
      height: 437px;
      background-image: url("~@IMG/banner2.png");
    }
    .brand-search {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 10px;
      height: 47px;
      .brand {
        font-size: inherit;
        color: #004033;
      }
      .search {
        font-size: inherit;
      }
    }
    .pro-content {
      width: 750px;
      margin: auto;
      .pro-list {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .pro-card {
          width: 363px;
          height: 206px;
          cursor: pointer;
          display: flex;
          align-items: center;
          padding-right: 44px;
          background: rgba(255, 255, 255, 1);
          box-shadow: 0px 0px 13px 0px rgba(0, 64, 51, 0.15);
          margin-bottom: 25px;
          &:hover {
            transform: scale(1.06, 1.06);
            transition: transform .2s;
          }
          .pro-img {
            width: 154px;
            height: 154px;
            margin-left: 6px;
            margin-right: 17px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .pro-text {
            height: 154px;
            flex: 1;
            .title {
              font-size: 11px;
              color: #333333;
              font-weight: 400;
              padding-top: 51px;
            }
            .description {
              font-size: 10px;
              color: #333333;
              font-weight: 300;
              padding-top: 13px;
              line-height: 1.2;
            }
          }
        }
      }
    }
  }
</style>
