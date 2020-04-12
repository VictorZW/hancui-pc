<template>
  <div class="Products page-content">
    <div class="banner"></div>
    <div class="page-inner">
      <div class="brand-search">
        <div class="Breadcrumb">当前位置：首页/产品服务/{{ brandName }}</div>
        <div class="search">
          <el-input
            placeholder="输入要搜索的内容"
            prefix-icon="el-icon-search"
            v-model="keyword"
            clearable
            @change="searchData"
          >
          </el-input>
        </div>
      </div>
      <div class="cate-area">
        <div class="tab-area">
          <div class="tab first"
               @click="changeProType(1)"
               :class="[(proType === 1) ? 'tab-active' : '']"
          >护肤类</div>
          <div class="tab"
               @click="changeProType(2)"
               :class="[(proType === 2) ? 'tab-active' : '']"
          >精油类</div>
          <div class="tab second"
               @click="changeProType(3)"
               :class="[(proType === 3) ? 'tab-active' : '']"
          >原料类</div>
        </div>
      </div>
      <div class="pro-list">
        <div class="pro-card"
             @click="toProDetailPage(item.id)"
             v-for="item in ProductList"
             :key="item.id"
        >
          <div class="pro-img">
            <img :src="item.logo" alt="">
          </div>
          <div class="pro-text">
            <div class="title">{{ item.title }}</div>
            <div class="description">{{ item.sub_title }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    productListApi
  } from '@/apis/index'

  export default {
    name: 'Products',
    data() {
      return {
        proType: 1, // 产品类型1：护肤，2：精油，3：原料
        page: 1,
        size: 100,
        keyword: '',
        ProductList: []
      }
    },
    mounted() {
      this.proType = Number(this.$route.params.type)
      this.getProductList()
    },
    watch: {
      $route: {
        handler: function(){
          this.proType = Number(this.$route.params.type)
          this.getProductList()
        },
        deep: true
      }
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
      toProDetailPage(id) {
        this.$router.push({
          name: 'ProductsDetail',
          params: {
            id: id
          }
        })
      },
      changeProType(type) {
        this.$router.push({
          name: 'Products',
          params: { type: type }
        })
        this.getProductList()
      },
      getProductList() {
        const params = {
          type_id: this.proType,
          page: this.page,
          size: this.size,
          keyword: this.keyword
        }
        productListApi(params).then(res => {
          this.ProductList = JSON.parse(JSON.stringify(res.result))
        })
      },
      searchData(keyword) {
        this.keyword = keyword
        this.getProductList()
      }
    }
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
    .cate-area {
      padding-bottom: 0.46rem;
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
