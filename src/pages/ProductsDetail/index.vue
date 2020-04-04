<template>
  <div class="page-content Products-Detail">
    <div class="page-inner">
      <div class="Breadcrumb">
        当前位置：<span>首页</span>/<span>产品中心</span>/<span>护肤类</span>
      </div>
      <div class="pro-des">
        <div class="pro-show">
          <div class="pro-img"></div>
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
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProductsDetail'
  }
</script>

<style lang="scss" scoped>
  .page-inner {
    padding-top: 0.29rem;
    .pro-des {
      padding-top: 0.96rem;
      .pro-show {
        display: flex;
        align-items: center;
        .pro-img {
          width: 5.17rem;
          height: 5.73rem;
          background: red;
        }
        .pro-msg {
          width: 4.65rem;
          height: 5.73rem;
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
  }
</style>
