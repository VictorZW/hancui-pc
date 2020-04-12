<template>
  <div class="LibraryPage">
    <div class="page-inner">
      <div class="brand-search">
        <div class="Breadcrumb">当前位置：首页/企业资讯</div>
      </div>
      <!--轮播-->
      <div class="slider-area">
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide
            v-for="item in libraryData"
            :key="item.id"
            :style="{ backgroundImage: 'url(' + item.thumb + ')' }"
          >
            <div class="title">{{ item.title }}</div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
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
          spaceBetween: 53,
          slidesPerColumnFill : 'row',
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
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
          this.libraryData = JSON.parse(JSON.stringify(res.result))
        })
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
    .page-inner {
      padding-top: 0.94rem;
      .Breadcrumb {
        color: #FFFFFF;
      }
      .brand-search {
        margin-bottom: 0.76rem;
      }
      .slider-area {
        width: 11.73rem;
        height: 6.65rem;
        margin: auto;
        .swiper {
          width: 100%;
          height: 100%;
          .swiper-slide {
            height: 2.6rem;
            background-size: 100% 100%;
            position: relative;
            cursor: pointer;
            &:hover {
              transform: scale(1.1, 1.1);
              transition: transform .2s;
            }
            .title {
              background-color: #2ED199;
              opacity: 0.9;
              width: 100%;
              height: 0.68rem;
              line-height: 0.34rem;
              padding: 0 0.15rem;
              text-align: center;
              position: absolute;
              bottom: 0;
              color: #FFFFFF;
            }
          }
        }
      }
    }
  }
</style>
