<template>
  <div class="page-content Products-Detail">
    <div class="page-inner">
      <div class="Breadcrumb">
        当前位置：<span>首页</span>/<span>产品中心</span>/<span>护肤类</span>
      </div>
      <div class="pro-des">
        <div class="pro-show">
          <!--侧边三个轮播图-->
          <div class="Stand-up-swiper">
            <div class="pro-img-smail"></div>
            <div class="pro-img-smail"></div>
            <div class="pro-img-smail"></div>
          </div>
          <!--大的产品图-->
          <div class="pro-img"></div>
          <!--右边的信息-->
          <div class="pro-msg">
            <div class="title">芊栢荟玫瑰纯露500ML/<span class="English">Rose Hydrosol</span></div>
            <div class="desc">护肤/保湿/补水</div>
            <div class="price">
              <span class="size">500mL</span>
              <span class="num">￥298.00</span>
            </div>
            <div class="to-buy-btn">购买产品</div>
            <div class="line"></div>
            <div class="work-title">功效</div>
            <div class="work-des">
              纯天然 正品 补水保湿 提亮肤色 温和嫩肤 女神必备 清爽 吸收快
            </div>
          </div>
        </div>
      </div>
      <div class="use-text">
        <div class="block">
          <div class="title">使用范围</div>
          <div class="desc">
            各种肌肤质护理，可与千栢荟活性肽
            冻干粉配合使用或与护肤乳霜、植物
            精油配合使用。
          </div>
        </div>
        <div class="block">
          <div class="title">使用范围</div>
          <div class="desc">
            各种肌肤质护理，可与千栢荟活性肽
            冻干粉配合使用或与护肤乳霜、植物
            精油配合使用。
          </div>
        </div>
        <div class="block">
          <div class="title">使用范围</div>
          <div class="desc">
            各种肌肤质护理，可与千栢荟活性肽
            冻干粉配合使用或与护肤乳霜、植物
            精油配合使用。
          </div>
        </div>
      </div>
      <!--更多产品-->
      <div class="more-pro-area">
        <div class="area-title">更多产品</div>
        <div class="english">More products</div>
      </div>
      <!--分割线条-->
      <div class="page-line"></div>
    </div>
    <div class="pro-swiper-area">
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
      </swiper>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProductsDetail',
    data() {
      return {
        swiperOption: {
          slidesPerView: 'auto',
          autoplay: true
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .page-inner {
    padding-top: 0.29rem;
    .pro-des {
      padding-top: 0.96rem;
      .pro-show {
        height: 5.73rem;
        display: flex;
        align-items: center;
        .Stand-up-swiper {
          width: 1.5rem;
          height: 100%;
          margin-right: 0.16rem;
          .pro-img-smail {
            width: 1.5rem;
            height: 1.5rem;
            margin-bottom: 0.16rem;
            background-color: red;
          }
        }
        .pro-img {
          width: 5.17rem;
          height: 100%;
          background: red;
        }
        .pro-msg {
          width: 4.65rem;
          height: 100%;
          padding-left: 0.51rem;
          color: #333333;
          .title {
            font-size: 0.3rem;
            padding-top: 0.2rem;
            .English {
              font-size: 0.16rem;
            }
          }
          .desc {
            font-size: 0.18rem;
            padding: 0.18rem 0 0.5rem;
          }
          .price {
            width: 100%;
            height: 0.6rem;
            border-radius: 0.05rem;
            border: 0.01rem solid #333333;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 0.13rem 0 0.05rem;
            span {
              font-size: 0.16rem;
              font-weight: 300;
            }
          }
          .to-buy-btn {
            margin-top: 0.5rem;
            width: 100%;
            height: 0.6rem;
            background: #069062;
            box-shadow: 0 0.03rem 0.04rem 0 rgba(0, 54, 36, 0.39);
            border-radius: 0.05rem;
            font-size: 0.24rem;
            color: #FFFFFF;
            text-align: center;
            line-height: 0.6rem;
            font-weight: 400;
            cursor: pointer;
          }
          .line {
            width: 100%;
            border-bottom: 0.01rem dotted #666666;
            margin-top: 0.7rem;
          }
          .work-title {
            width: 100%;
            padding: 0.3rem 0;
            font-size: 0.24rem;
            color: #069163;
          }
          .work-des {
            width: 100%;
            font-size: 0.18rem;
            color: #333333;
            line-height: 1.4;
          }
        }
      }
    }
    .use-text {
      display: flex;
      padding-top: 1rem;
      .block {
        width: 33.33%;
        .title {
          font-size: 0.24rem;
          color: #069163;
          text-align: center;
          padding-bottom: 0.32rem;
        }
        .desc {
          font-size: 0.16rem;
          color: #666666;
          text-align: center;
          padding: 0 0.68rem;
          height: 1.6rem;
          margin: auto;
          line-height: 1.4;
          border-right: 0.01rem dotted #333333;
        }
        &:last-child {
          .desc {
            border: none;
          }
        }
      }
    }
    .more-pro-area {
      padding-top: 0.32rem;
      text-align: center;
      .area-title {
        font-size: 0.24rem;
        color: #068F61;
      }
      .english {
        font-size: 0.12rem;
        color: #069163;
        padding-top: 0.11rem;
        padding-bottom: 0.41rem;
      }
    }
  }
  .page-line {
    width: 12rem;
    border-bottom: 0.01rem solid #1BB284;
    margin: auto;
  }
  .pro-swiper-area {
    padding: 0.42rem 0 0.5rem;
    /deep/ .swiper-container {
      overflow: visible;
    }
    .pro-area {
      width: 2.7rem;
      height: 3.4rem;
      background: red;
      cursor: pointer;
      margin-right: 0.3rem;
      font-size: 16px;
      &:hover {
        transform: scale(1.11, 1.11);
        transition: transform .2s;
      }
    }
  }
</style>
