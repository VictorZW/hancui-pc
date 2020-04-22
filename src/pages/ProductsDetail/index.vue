<template>
  <div class="page-content Products-Detail page-padding-top">
    <div class="page-inner">
      <div class="Breadcrumb">
        当前位置：<span>首页</span>/<span>产品中心</span>/<span>{{ brandName }}</span>
      </div>
      <div class="pro-des">
        <div class="pro-show">
          <!--侧边三个轮播图-->
          <div class="Stand-up-swiper">
            <div class="img-click img-click-top" @click="clickPrev">
              <img src="~@IMG/up.png" alt="">
            </div>
            <div class="pro-img-smail"
                 v-for="(item, index) in swipeImg"
                 :key="index"
                 :style="{ backgroundImage: 'url(' + item + ')' }"
                 @click="setBigImg(item)"
            ></div>
            <div class="img-click" @click="clickNext">
              <img src="~@IMG/down.png" alt="">
            </div>
          </div>
          <!--大的产品图-->
          <div class="pro-img"
               :style="{ backgroundImage: 'url(' + bigImg + ')' }"
          >
            <div class="amplification" @click="clickAmplification"></div>
          </div>
          <!--右边的信息-->
          <div class="pro-msg">
            <div class="title">{{ ProductDetail.title }}/<span class="English">Rose Hydrosol</span></div>
            <div class="desc">{{ ProductDetail.sub_title }}</div>
            <div class="price">
              <span class="size">{{ ProductDetail.sku }}</span>
              <span class="num">￥{{ ProductDetail.origin_price }}</span>
            </div>
            <div class="to-buy-btn" @click="centerDialogVisible = true">购买产品</div>
            <div class="line"></div>
            <div class="work-title">功效</div>
            <div class="work-des">{{ ProductDetail.effect }}</div>
          </div>
        </div>
      </div>
      <div class="use-text">
        <div class="block">
          <div class="title">使用范围</div>
          <div class="desc">{{ ProductDetail.apply_scope }}</div>
        </div>
        <div class="block">
          <div class="title">核心成分</div>
          <div class="desc">{{ ProductDetail.nuclear }}</div>
        </div>
        <div class="block">
          <div class="title">使用方法</div>
          <div class="desc">{{ ProductDetail.usage_method }}</div>
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
    <div class="pro-swiper-area" v-if="ProductList && ProductList.length > 0">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide
          class="pro-area"
          v-for="item in ProductList"
          :key="item.id"
        >
          <router-link
            :to="{ name: 'ProductsDetail', params: { id: item.id }}"
          >
            <div class="pro-image"
                 :style="{ backgroundImage: 'url(' + item.logo + ')' }"
            ></div>
            <div class="title">{{ item.title }}</div>
            <div class="sub_title">{{ item.sub_title }}</div>
          </router-link>
        </swiper-slide>
      </swiper>
    </div>
    <!--图片放大-->
    <el-image-viewer
      v-if="showViewer"
      :on-close="closeViewer"
      :url-list="[bigImg]" />
    <!--dialog-->
    <el-dialog
      :visible.sync="centerDialogVisible"
      center
      :showClose="false"
      class="wx-code-dialog"
    >
      <div class="wx-code">
        <img src="~@IMG/wx-code.png" alt="">
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import ElImageViewer from 'element-ui/packages/image/src/image-viewer'

  import {
    productDetailApi,
    productListApi
  } from '@/apis/index'

  export default {
    name: 'ProductsDetail',
    data() {
      return {
        swiperOption: {
          slidesPerView: 'auto',
          autoplay: 3000,
          autoplayDisableOnInteraction : false,
          loop: true
        },
        ProductDetail: {},
        ProductList: [],
        proType: 1,
        // 缩略图数组
        swipeImg: ['', '', ''], // 侧边的三个图片区域
        allImages: [], // 所有的图片
        clickCount: 0,
        bigImg: '',
        showViewer: false,
        centerDialogVisible: false,
        keyword: '',
        description: ''
      }
    },
    metaInfo () {
      return {
        meta: [
          { vmid: 'description', name: 'description', content: this.description },
          { vmid: 'keywords', name: 'keywords', content: this.keyword }
        ]
      }
    },
    components: {
      ElImageViewer
    },
    mounted() {
      this.clickCount = 0
      this.getProductDetail()
      this.getProductList()
    },
    watch: {
      $route: {
        handler: function(){
          this.clickCount = 0
          this.getProductDetail()
          this.getProductList()
        },
        deep: true
      }
    },
    updated() {
      this.$nextTick(() => {
        document.getElementsByClassName('el-image-viewer__mask')[0] && document.getElementsByClassName('el-image-viewer__mask')[0].addEventListener('click', () => {
          this.closeViewer()
        })
      })
    },
    computed: {
      brandName() {
        if (this.proType === 1) {
          return '护肤类'
        } else if (this.proType === 2) {
          return '精油类'
        } else {
          return '原料类'
        }
      }
    },
    methods: {
      resetImg() {
        // 所有的图片数组
        const allImages = JSON.parse(JSON.stringify(this.allImages))
        const firstPageImg = allImages.splice(0, this.swipeImg.length)
        this.swipeImg = firstPageImg
      },
      clickPrev() {
        if ((this.clickCount + this.swipeImg.length) >= this.allImages.length) {
          // console.log('没有下一张图片了')
        } else {
          this.clickCount += 1
          const nextIndex = this.clickCount + this.swipeImg.length - 1 // 下一张图片的index
          const allImages = JSON.parse(JSON.stringify(this.allImages)) // 全部的数据
          const nextData = allImages[nextIndex] // 下一张图片
          const swipeImg = JSON.parse(JSON.stringify(this.swipeImg))
          swipeImg.shift()
          swipeImg.push(nextData)
          this.swipeImg = swipeImg
        }
      },
      clickNext() {
        if (this.clickCount === 0) {
          return false
        }
        const prevIndex = this.clickCount - 1 // 上一张图片的index
        const allImages = JSON.parse(JSON.stringify(this.allImages)) // 全部的数据
        const prevData = allImages[prevIndex] // 下一张图片
        const swipeImg = JSON.parse(JSON.stringify(this.swipeImg))
        swipeImg.pop()
        swipeImg.unshift(prevData)
        this.swipeImg = swipeImg
        this.clickCount -= 1
      },
      getProductDetail() {
        const params = {
          id: Number(this.$route.params.id)
        }
        productDetailApi(params).then(res => {
          this.ProductDetail = JSON.parse(JSON.stringify(res.result))
          this.proType = Number(this.ProductDetail.type)
          this.allImages = this.ProductDetail.imgs
          this.bigImg = this.ProductDetail.logo
          this.keyword = res.result.keyword
          this.description = res.result.description
          this.resetImg()
        })
      },
      setBigImg(img) {
        this.bigImg = img
      },
      clickAmplification() {
        this.showViewer = true
      },
      closeViewer() {
        this.showViewer = false
      },
      getProductList() {
        const params = {
          type_id: this.proType,
          page: 1,
          size: 100,
          keyword: ''
        }
        productListApi(params).then(res => {
          this.ProductList = JSON.parse(JSON.stringify(res.result.list))
        })
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
          display: flex;
          flex-direction: column;
          align-items: center;
          .pro-img-smail {
            width: 1.5rem;
            height: 1.5rem;
            margin-bottom: 0.16rem;
            background-size: 100% 100%;
            border: 0.01rem solid #069163;
            cursor: pointer;
            &:hover {
              transform: scale(1.11, 1.11);
              transition: transform .2s;
            }
          }
          .img-click {
            width: 0.89rem;
            height: 0.3rem;
            background-color: #069062;
            opacity: 0.2;
            cursor: pointer;
            text-align: center;
            &:hover {
              background-color: #333333;
            }
            img {
              height: 0.3rem;
            }
          }
          .img-click-top {
            margin-bottom: 0.16rem;
          }
        }
        .pro-img {
          width: 5.17rem;
          height: 100%;
          background-size: 100% 100%;
          border: 0.01rem solid #069163;
          border-radius: 0.05rem;
          position: relative;
          .amplification {
            width: 0.65rem;
            height: 0.64rem;
            background-size: 100% 100%;
            background-image: url("~@IMG/amplification.png");
            position: absolute;
            right: 0.11rem;
            bottom: 0.11rem;
            cursor: pointer;
          }
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
            line-height: 1.4;
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
  .pro-swiper-area {
    padding: 0.42rem 0 0.5rem;
    overflow: hidden;
    /deep/ .swiper-container {
      overflow: visible;
    }
    .pro-area {
      width: 2.7rem;
      height: 3.4rem;
      background-color: #FFFFFF;
      cursor: pointer;
      margin-right: 0.3rem;
      font-size: 16px;
      box-shadow: 0 0 0.21rem 0 rgba(0, 64, 51, 0.15);
      padding-top: 0.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      &:hover {
        transform: scale(1.11, 1.11);
        transition: transform .2s;
      }
      .pro-image {
        width: 2.2rem;
        height: 2.2rem;
        background-size: 100% 100%;
        margin: auto;
      }
      .title {
        text-align: center;
        font-size: 0.16rem;
        color: #333333;
        padding: 0.16rem 0.1rem 0;
      }
      .sub_title {
        color: #333333;
        font-size: 0.12rem;
        text-align: center;
        padding: 0.09rem 0.1rem 0;
        line-height: 1.4;
      }
    }
  }
  .wx-code-dialog {
    .wx-code {
      width: 5rem;
      margin: auto;
      img {
        width: 100%;
      }
    }
  }
  /deep/ .el-dialog {
    background: none;
    box-shadow: none;
  }
  /deep/ .el-dialog__wrapper {
    .el-dialog__header {
      padding: 0;
    }
    .el-dialog__body {
      padding: 0;
    }
  }
  /deep/ .el-icon-circle-close {
    color: #FFFFFF;
  }
</style>
