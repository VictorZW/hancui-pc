<template>
  <div id="pureFullPage" class="home-page">
    <div class="page page-first"></div>
    <div class="page page-second">
      <div class="product-banner">
        <div class="cover-model">
          <!--产品文字说明-->
          <div class="pro-msg">
            <div class="pro-icon-area">
              <div class="pro-icon pro-icon1"></div>
            </div>
            <div class="title">护肤品</div>
            <div class="title">SKIN CARE</div>
            <div class="detail">
              汉萃主营产品是天然植物健康产品、芳香疗法和护肤肽类产品；研发6大系列40余种无添加任何化学成分的复方功效精油，已申请精油相关发明专利9项、肽相关发明专利7。每款产品针对不同肌肤问题提供专业解决方案。产品专注于安全健康，源自天然。
            </div>
            <div class="read-more">
              <span>查看更多</span>
            </div>
          </div>
        </div>
      </div>
      <div class="product-banner">
        <div class="cover-model">
          <!--产品文字说明-->
          <div class="pro-msg">
            <div class="pro-icon-area">
              <div class="pro-icon pro-icon1"></div>
            </div>
            <div class="title">护肤品</div>
            <div class="title">SKIN CARE</div>
            <div class="detail">
              汉萃主营产品是天然植物健康产品、芳香疗法和护肤肽类产品；研发6大系列40余种无添加任何化学成分的复方功效精油，已申请精油相关发明专利9项、肽相关发明专利7。每款产品针对不同肌肤问题提供专业解决方案。产品专注于安全健康，源自天然。
            </div>
            <div class="read-more">
              <span>查看更多</span>
            </div>
          </div>
        </div>
      </div>
      <div class="product-banner">
        <div class="cover-model">
          <!--产品文字说明-->
          <div class="pro-msg">
            <div class="pro-icon-area">
              <div class="pro-icon pro-icon1"></div>
            </div>
            <div class="title">护肤品</div>
            <div class="title">SKIN CARE</div>
            <div class="detail">
              汉萃主营产品是天然植物健康产品、芳香疗法和护肤肽类产品；研发6大系列40余种无添加任何化学成分的复方功效精油，已申请精油相关发明专利9项、肽相关发明专利7。每款产品针对不同肌肤问题提供专业解决方案。产品专注于安全健康，源自天然。
            </div>
            <div class="read-more">
              <span>查看更多</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page">
      <p>Page 3</p>
    </div>
  </div>
</template>

<script>
  import HelloWorld from '@/components/HelloWorld'

  export default {
    name: 'HomePage',
    data() {
      return {
        Msg: 'this is homepage'
      }
    },
    components: {
      HelloWorld
    },
    mounted() {
      // 创建全屏滚动实例，传入动画回调函数，并初始化
      new PureFullPage({
        delay: 1000,
        isShowNav: true
      })
    }
  }
</script>

<style lang="scss">
  @import "@/assets/styles/_mixins.scss";

  html, body, #app {
    overflow: hidden;
    height: 100%;
  }
  .home-page {
    width: 100%;
    height: 100%;

    .page {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .page-first {
      background-image: url("~@IMG/1.jpg");
      @include background-cover-center();
    }
    .page-second {
      background: #069163 no-repeat center/cover;
      .product-banner {
        width: 33.33%;
        height: 100%;
        background-image: url("~@IMG/pro-banner.png");
        @include background-cover-center();
        position: relative;
        .cover-model {
          @include position-ab();
          background-color: rgba(6, 145, 99, 0.9);
          z-index: 10;
          &:hover {
            background: none;
            transition: all 1s linear;
          }
          &:hover > .pro-msg{
            background-color: rgba(6, 145, 99, 0.9);
          }
        }
        .pro-msg {
          width: 276px;
          height: 276px;
          @include position-ab();
          z-index: 20;
          margin: auto;
          border-radius: 50%;
          .pro-icon-area {
            display: flex;
            justify-content: center;
            margin-top: 27px;
            margin-bottom: 19px;
            .pro-icon {
              width: 20px;
              height: 21px;
            }
            .pro-icon1 {
              background-image: url("~@IMG/Skin-care.png");
              @include background-cover-center(20px, 21px);
            }
          }
          .title {
            font-size: 10px;
            font-weight: 400;
            color: #FEFEFE;
            text-align: center;
            padding-bottom: 4px;
          }
          .detail {
            font-size: 9px;
            color: #FEFEFE;
            padding: 0 44px;
            line-height: 1.2;
          }
          .read-more {
            text-align: center;
            span {
              display: inline-block;
              font-size: 10px;
              color: #FEFEFE;
              padding: 9px 0;
              border-bottom: 1px solid #FFFFFF;
              cursor: pointer;
            }
          }
        }
      }
    }

    .page p {
      font-size: 66px;
    }

    .page:nth-child(3) {
      background: lightskyblue no-repeat center/cover;
    }
  }
</style>
