<template>
  <div class="page-content">
    <div class="page-banner"></div>
    <div class="page-inner">
      <div class="brand-search">
        <div class="Breadcrumb">当前位置：首页/关于我们</div>
      </div>
      <!--公司简介-->
      <div class="about-area">
        <div class="about-title">公司简介</div>
        <div class="title-english">ABOUT HANCUI</div>
        <div class="about-company">
          <div class="img-area"
               :style="{ backgroundImage: 'url(' + instruction.imgs[0] + ')' }"
          ></div>
          <div class="text-area">
            <div class="title">{{ instruction.company_name }}</div>
            <div class="desc">{{ instruction.content }}</div>
          </div>
        </div>
      </div>
      <!--分割线条-->
      <div class="page-line"></div>
      <!--企业文化-->
      <div class="about-area">
        <div class="about-title">企业文化</div>
        <div class="title-english">ENTERPRISE CULTURE</div>
        <div class="description">{{ culture.content }}</div>
        <div class="swiper-area">
          <swiper class="swiper" :options="swiperOption">
            <swiper-slide class="prize"
                          v-for="item in culture.imgs"
                          :key="item"
                          :style="{ backgroundImage: 'url(' + item + ')' }"
            ></swiper-slide>
          </swiper>
        </div>
      </div>
      <!--分割线条-->
      <div class="page-line"></div>
      <!--核心技术-->
      <div class="about-area">
        <div class="about-title">核心技术</div>
        <div class="title-english">CORE TECHNOLOGY</div>
        <div class="description">{{ teach.content }}</div>
        <div class="swiper-area">
          <swiper class="swiper" :options="swiperOption">
            <swiper-slide class="prize"
                          v-for="item in teach.imgs"
                          :key="item"
                          :style="{ backgroundImage: 'url(' + item + ')' }"
            ></swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { companyAboutApi } from '@/apis/index'

  export default {
    name: 'AboutUS',
    data() {
      return {
        swiperOption: {
          slidesPerView: 'auto',
          autoplay: true,
          loop: true
        },
        // 公司简介
        instruction: {},
        // 企业文化
        culture: {},
        // 核心技术
        teach: {}
      }
    },
    mounted() {
      this.getCompanyAbout()
    },
    methods: {
      getCompanyAbout() {
        companyAboutApi().then(res => {
          console.log(res)
          this.instruction = JSON.parse(JSON.stringify(res.result.instruction))
          this.culture = JSON.parse(JSON.stringify(res.result.culture))
          this.teach = JSON.parse(JSON.stringify(res.result.teach))
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .page-banner {
    background-image: url("~@IMG/about-banner.png");
    background-size: cover;
    width: 100%;
    height: 4.5rem;
  }
  .about-area {
    padding-top: 0.6rem;
    .about-title {
      font-size: 0.3rem;
      color: #004033;
      text-align: center;
      padding-bottom: 0.1rem;
    }
    .title-english {
      font-size: 0.12rem;
      color: #004033;
      text-align: center;
      padding-bottom: 0.39rem;
    }
    .description {
      font-size: 0.16rem;
      color: #004033;
      line-height: 1.7;
      padding-bottom: 0.3rem;
    }
    .about-company {
      display: flex;
      padding-bottom: 0.53rem;
      .img-area {
        width: 4.35rem;
        height: 3.01rem;
        background-size: 100% 100%;
      }
      .text-area {
        flex: 1;
        margin-left: 0.4rem;
        .title {
          font-size: 0.24rem;
          color: #004033;
          padding-bottom: 0.09rem;
          border-bottom: 0.01rem dotted #666666;
        }
        .desc {
          font-size: 0.16rem;
          color: #004033;
          line-height: 1.7;
          padding-top: 0.21rem;
        }
      }
    }
    .swiper-area {
      width: 100%;
      padding-bottom: 0.52rem;
      .prize {
        width: 2.21rem;
        height: 2.99rem;
        margin-right: 0.2rem;
        background-size: 100% 100%;
      }
    }
  }
</style>
