<template>
  <div class="LibraryPage">
    <div class="page-inner">
      <div class="brand-search">
        <div class="Breadcrumb">当前位置：首页/芳疗学院/芳疗图书馆</div>
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
      <!--轮播-->
      <div class="slider-area">
        <div class="to-icon to-left">
          <div class="icon-area" slot="button-prev">
            <div class="img-icon icon-left"></div>
          </div>
        </div>
        <div class="to-icon to-right">
          <div class="icon-area" slot="button-next">
            <div class="img-icon icon-right"></div>
          </div>
        </div>
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide
            v-for="item in libraryData"
            :key="item.id"
            :style="{ backgroundImage: 'url(' + item.thumb + ')' }"
          >
            <router-link
              :to="{ name: 'LibraryDetailPage', params: { id: item.id }}"
            >
              <div class="title">{{ item.title }}</div>
            </router-link>
          </swiper-slide>
        </swiper>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import { newsListApi } from '@/apis/index'

  export default {
    name: 'LibraryPage',
    data() {
      return {
        swiperOption: {
          slidesPerView: 3,
          slidesPerColumn: 2,
          spaceBetween: 30,
          slidesPerColumnFill : 'row',
          prevButton: '.to-right',
          nextButton: '.to-left',
          pagination : '.swiper-pagination'
        },
        page: 1,
        size: 100,
        keyword: this.keyword,
        libraryData: []
      }
    },
    mounted() {
      this.getLibraryData()
    },
    methods: {
      getLibraryData() {
        const params = {
          type_id: 4,
          page: this.page,
          size: this.size,
          keyword: this.keyword
        }
        newsListApi(params).then(res => {
          this.libraryData = JSON.parse(JSON.stringify(res.result.list))
        })
      },
      searchData(keyword) {
        this.keyword = keyword
        this.getLibraryData()
      }
    }
  }
</script>


<style lang="scss" scoped>
  .LibraryPage {
    width: 100%;
    height: 100vh;
    background-image: url("~@IMG/te-banner.png");
    background-size: cover;
    .swiper-pagination {
      left: 0;
      right: 0;
      padding-top: 0.15rem;
      /deep/ .swiper-pagination-bullet {
        width: 0.1rem;
        height: 0.04rem;
        background-color: #FFFFFF;
        border-radius: 0.03rem;
        display: inline-block;
        margin: 0 0.05rem;
      }
      /deep/ .swiper-pagination-bullet-active {
        width: 0.15rem;
        height: 0.06rem;
        background-color: #FFFFFF;
      }
    }
    .page-inner {
      padding-top: 0.94rem;
      .Breadcrumb {
        color: #FFFFFF;
      }
      .brand-search {
        margin-bottom: 0.56rem;
      }
      .slider-area {
        width: 11.73rem;
        height: 6.65rem;
        margin: auto;
        position: relative;
        .swiper {
          width: 100%;
          height: 100%;
          .swiper-slide {
            height: 2.6rem;
            background-size: 100% 100%;
            position: relative;
            cursor: pointer;
            /*&:hover {*/
              /*transform: scale(1.1, 1.1);*/
              /*transition: transform .2s;*/
            /*}*/
            a {
              width: 100%;
              height: 100%;
              display: inline-block;
            }
            .title {
              background-color: #2ED199;
              opacity: 0.9;
              width: 100%;
              height: 0.68rem;
              line-height: 1.8;
              padding: 0.11rem 0.15rem;
              text-align: center;
              position: absolute;
              bottom: 0;
              color: #FFFFFF;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
        }
      }
    }
    .to-icon {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      &:focus {
        outline: none;
      }
      .icon-area {
        cursor: pointer;
        .img-icon {
          width: 0.66rem;
          height: 0.66rem;
        }
        .icon-left {
          background-size: cover;
          background-image: url("~@IMG/right-active.png");
        }
        .icon-right {
          background-size: cover;
          background-image: url("~@IMG/left-active.png");
        }
        &:hover > .icon-left {
          background-size: cover;
          background-image: url("~@IMG/to-left.png");
        }
        &:hover > .icon-right {
          background-size: cover;
          background-image: url("~@IMG/to-right.png");
        }
      }
    }
    .to-right {
      left: -0.8rem;
      top: 0;
      bottom: 0;
      margin: auto;
    }
    .to-left {
      right: -0.8rem;
      top: 0;
      bottom: 0;
      margin: auto;
    }
  }
</style>
