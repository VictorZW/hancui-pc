<template>
  <div class="home-page">
    <div id="pureFullPage">
      <div class="page">
        <swiper class="swiper page1-swiper">
          <swiper-slide
            class="homepage-banner"
            v-for="item in homePageBanner"
            :key="item.id"
          >
            <img :src="item.img_url"
                 :alt="item.title"
            >
          </swiper-slide>
        </swiper>
      </div>
      <div class="page page-second">
        <div class="product-banner"
             v-for="item in productCate"
             :key="item.id"
        >
          <div class="cover-model">
            <!--产品文字说明-->
            <div class="pro-msg">
              <div class="pro-icon-area">
                <div class="pro-icon"
                     :style="{ backgroundImage: 'url(' + item.icon_url + ')' }"></div>
              </div>
              <div class="title">{{ item.title }}</div>
              <div class="title">{{ item.en_title }}</div>
              <div class="detail">{{ item.instruction }}</div>
              <div class="read-more">
                <span>查看更多</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="page page3">
        <div class="left-area">
          <div class="left-inner">
            <div class="click-area">
              <div class="click-line">
                <span class="line"></span>
                <span class="text">芳疗培训</span>
              </div>
              <div class="click-line">
                <span class="line"></span>
                <span class="text">芳疗师主页</span>
              </div>
              <div class="click-line">
                <span class="line"></span>
                <span class="text">芳疗图书馆</span>
              </div>
            </div>
          </div>
        </div>
        <div class="right-area">
          <div class="right-box">
            <div class="page3-slide">
              <swiper class="swiper" :options="swiperOption">
                <swiper-slide class="pro-area">Slide 1</swiper-slide>
                <swiper-slide class="pro-area">Slide 2</swiper-slide>
                <swiper-slide class="pro-area">Slide 3</swiper-slide>
                <swiper-slide class="pro-area">Slide 4</swiper-slide>
                <swiper-slide class="pro-area">Slide 5</swiper-slide>
                <swiper-slide class="pro-area">Slide 6</swiper-slide>
                <swiper-slide class="pro-area">Slide 7</swiper-slide>
                <swiper-slide class="pro-area">Slide 8</swiper-slide>
                <swiper-slide class="pro-area">Slide 9</swiper-slide>
                <swiper-slide class="pro-area">Slide 10</swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
                <div class="swiper-button-prev-new" slot="button-prev"></div>
                <div class="swiper-button-next-new" slot="button-next"></div>
              </swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    homapageBannerApi,
    productCateApi
  } from '@/apis/index'

  export default {
    name: 'HomePage',
    data() {
      return {
        swiperOption: {
          slidesPerView: 'auto',
          autoplay: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        homePageBanner: [],
        productCate: []
      }
    },
    mounted() {
      // 创建全屏滚动实例，传入动画回调函数，并初始化
      new PureFullPage({
        delay: 1000,
        isShowNav: true
      })
      this.getHomepageBanner()
      this.getProductCate()
    },
    methods: {
      getHomepageBanner() {
        // homePageBanner
        homapageBannerApi({ type: 1 }).then(res => {
          this.homePageBanner = JSON.parse(JSON.stringify(res.result))
        })
      },
      getProductCate() {
        productCateApi().then(res => {
          this.productCate = JSON.parse(JSON.stringify(res.result))
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/_mixins.scss";

  .home-page {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: rgba(6, 145, 99, 0.9);

    .page {
      display: flex;
    }
    .page-first {
      background-image: url("~@IMG/1.jpg");
      @include background-cover-center();
    }
    .page1-swiper {
      width: 100%;
      height: 100%;
    }
    .homepage-banner {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
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
          width: 4.42rem;
          height: 4.42rem;
          @include position-ab();
          z-index: 20;
          margin: auto;
          border-radius: 50%;
          .pro-icon-area {
            display: flex;
            justify-content: center;
            margin-top: 0.43rem;
            margin-bottom: 0.3rem;
            .pro-icon {
              width: 0.34rem;
              height: 0.34rem;
              background-size: cover;
            }
          }
          .title {
            font-size: 0.16rem;
            font-weight: 400;
            color: #FEFEFE;
            text-align: center;
            padding-bottom: 0.07rem;
          }
          .detail {
            font-size: 0.14rem;
            color: #FEFEFE;
            padding: 0.22rem 0.7rem 0;
            line-height: 0.2rem;
          }
          .read-more {
            text-align: center;
            span {
              display: inline-block;
              font-size: 0.16rem;
              color: #FEFEFE;
              padding: 0.34rem 0 0.15rem;
              border-bottom: 0.02rem solid #FFFFFF;
              cursor: pointer;
            }
          }
        }
      }
    }

    .page3 {
      background-image: url("~@IMG/page2bg.png");
      @include background-cover-center();
      .left-area {
        flex: 1;
        height: 100%;
        .left-inner {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          .click-area {
            .click-line {
              padding: 0.24rem 0;
              .line {
                width: 0.3rem;
                height: 0.04rem;
                background-color: #8CD8BE;
                display: inline-block;
                vertical-align: middle;
                margin-right: 0.3rem;
              }
              .text {
                font-size: 0.18rem;
                color: #8CD8BE;
                cursor: pointer;
              }
            }
          }
        }
      }
      .right-area {
        width: 15.51rem;
        height: 100%;
        .right-box {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          .page3-slide {
            width: 100%;
            height: 4.73rem;
            padding-left: 0.47rem;
            /deep/ .swiper-container {
              overflow: visible;
            }
            .pro-area {
              width: 3.22rem;
              height: 4.73rem;
              background-color: red;
              margin-right: 0.25rem;
              cursor: pointer;
              &:hover {
                transform: scale(1.1, 1.1);
                transition: transform .2s;
              }
            }

            .swiper-button-prev-new {
              width: 0.97rem;
              height: 0.97rem;
              background-image: url("~@IMG/left.png");
              background-size: cover;
              cursor: pointer;
              position: absolute;
              top: 0;
              bottom: 0;
              margin: auto;
              z-index: 100;
              left: -0.47rem;
            }
            .swiper-button-next-new {
              width: 0.97rem;
              height: 0.97rem;
              background-image: url("~@IMG/right.png");
              background-size: cover;
              cursor: pointer;
              position: absolute;
              top: 0;
              bottom: 0;
              margin: auto;
              z-index: 100;
              right: 0.15rem;
            }
          }
        }
      }
    }
    .page p {
      font-size: 66px;
    }
  }
</style>
