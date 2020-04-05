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
          <div class="img-area"></div>
          <div class="text-area">
            <div class="title">汉萃（天津）生物技术股份有限公司</div>
            <div class="desc">
              汉萃（天津）生物技术股份有限公司于2016年8月在天津滨海新区中英医疗健康产业基地成立， 2016年 9 月我公司还成立了营销子公司--汉萃（上海）生物科技有限公司
            </div>
          </div>
        </div>
      </div>
      <!--分割线条-->
      <div class="page-line"></div>
      <!--企业文化-->
      <div class="about-area">
        <div class="about-title">企业文化</div>
        <div class="title-english">ENTERPRISE CULTURE</div>
        <div class="description">“汉萃”始终坚持天然原料，严格遵循品质规格；依托高端技术型人才和研发团队，致力于打造顶尖的精油和肽产品，以“卓越品质、专业素养”为理念，倡导提高人类健康水平、服务大众、造福大众，是“汉萃”终身的追求与使命。“汉萃”源自中国古代传统文化和西方技术的结合，引用毛主席“古为今用，洋为中用”的理论；</div>
        <div class="swiper-area">
          <swiper class="swiper" :options="swiperOption">
            <swiper-slide class="prize">Slide 1</swiper-slide>
            <swiper-slide class="prize">Slide 2</swiper-slide>
            <swiper-slide class="prize">Slide 3</swiper-slide>
            <swiper-slide class="prize">Slide 4</swiper-slide>
            <swiper-slide class="prize">Slide 5</swiper-slide>
            <swiper-slide class="prize">Slide 6</swiper-slide>
            <swiper-slide class="prize">Slide 7</swiper-slide>
            <swiper-slide class="prize">Slide 8</swiper-slide>
            <swiper-slide class="prize">Slide 9</swiper-slide>
            <swiper-slide class="prize">Slide 10</swiper-slide>
          </swiper>
        </div>
      </div>
      <!--分割线条-->
      <div class="page-line"></div>
      <!--核心技术-->
      <div class="about-area">
        <div class="about-title">核心技术</div>
        <div class="title-english">CORE TECHNOLOGY</div>
        <div class="description">
          汉萃生物被认定为国家级科技型中小企业，公司自有专业实验室和研发团队，从全球筛选采购进口200余种单方精油原料，为国内食品、药品、日化用品企业提供优质的芳香原料，并研发6大系列40余种无添加任何化学成分的复方功效精油，为芳疗产业提供产品及技术支持；凭借先进的生产工艺、生产设备及全球数据资源，为芳香种植企业提供全产业链服务；同时也是天津市政府的扶持项目。
          我司和山东大学淄博生物医药研究院合作，成立“山东大学汉肽生物技术研究院”，培养了一支高素质研发管理团队，积极为整个健康产品服务平台的实现奠定技术基础及人才基础；并开展新药筛查和抗衰药物研发。致力于针对糖尿病、肿瘤、心血管疾病、耐药菌感染等重大疾病药物的研发。通过多年的积累，
          目前已拥有20多个一线肽药物的成熟生产工艺，齐考诺肽和利那洛肽即将申报临床申请。公司也开发了30种美容肽原料、发酵生产胶原蛋白等生产工艺；公司已申请精油相关发明专利9项、肽相关发明专利7项，并拥有3项关于精油和肽原料研发的软件系统；未来计划还将针对研发的30余种产品配方来申请新的产品专利。
        </div>
        <div class="swiper-area">
          <swiper class="swiper" :options="swiperOption">
            <swiper-slide class="prize">Slide 1</swiper-slide>
            <swiper-slide class="prize">Slide 2</swiper-slide>
            <swiper-slide class="prize">Slide 3</swiper-slide>
            <swiper-slide class="prize">Slide 4</swiper-slide>
            <swiper-slide class="prize">Slide 5</swiper-slide>
            <swiper-slide class="prize">Slide 6</swiper-slide>
            <swiper-slide class="prize">Slide 7</swiper-slide>
            <swiper-slide class="prize">Slide 8</swiper-slide>
            <swiper-slide class="prize">Slide 9</swiper-slide>
            <swiper-slide class="prize">Slide 10</swiper-slide>
          </swiper>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AboutUS',
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
  .page-banner {
    background-image: url("~@IMG/about-banner.png");
    background-size: cover;
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
      line-height: 1.4;
      padding-bottom: 0.3rem;
    }
    .about-company {
      display: flex;
      padding-bottom: 0.53rem;
      .img-area {
        width: 4.35rem;
        height: 3.01rem;
        background: #36A27B;
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
          line-height: 1.4;
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
        background: red;
        margin-right: 0.2rem;
      }
    }
  }
</style>
