<template>
  <div class="NewsListPage page-content">
    <div class="page-banner"></div>
    <div class="page-inner">
      <div class="brand-search">
        <div class="Breadcrumb">当前位置：首页/企业资讯</div>
      </div>
      <!--list-->
      <div class="list-ul">
        <div class="news-card">
          <div class="text-area">
            <div class="time">
              <span class="month">03-16</span><span class="year">/2020</span>
            </div>
            <div class="title">千栢蕙市场如何走向成熟 品牌化是关键</div>
            <div class="body">
              我公司目前开展的业务已经涉及农业、种植、加工、研发、运用、教育与人才培养等领域，并与上海交通大学、山东大学淄博生物医药
              研究院 建立产学研合作关系，在植物萃取应用方向开展课程以及设立国际芳疗师培训基地培育出一批迎合市场需求的芳疗师。
            </div>
            <div class="read-more">
              <span @click="toNewsDetailPage">查看详情</span>
            </div>
          </div>
          <div class="img-area"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    methods: {
      toNewsDetailPage() {
        this.$router.push({
          name: 'NewsDetailPage'
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .page-banner {
    background-image: url("~@IMG/news-list-banner.png");
    background-size: cover;
  }
  .list-ul {
    .news-card {
      width: 100%;
      height: 2.18rem;
      background-color: #F8F8F8;
      box-shadow: 0 0 0.21rem 0 rgba(0, 64, 51, 0.15);
      margin-bottom: 0.4rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 0.18rem 0 0.28rem;
      .text-area {
        width: 8.47rem;
        height: 100%;
        .time {
          padding-top: 0.32rem;
          .month {
            font-size: 0.28rem;
            color: #999999;
            padding-right: 0.07rem;
          }
          .year {
            font-size: 0.14rem;
            color: #999999;
          }
        }
        .title {
          font-size: 0.18rem;
          color: #333333;
          padding-top: 0.18rem;
        }
        .body {
          color: #999999;
          margin-top: 0.15rem;
          font-size: 0.14rem;
          line-height: 0.25rem;
          text-align: left;
          height: 0.5rem;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .read-more {
          padding-top: 0.28rem;
          span {
            display: inline-block;
            font-size: 0.14rem;
            color: #333333;
            cursor: pointer;
          }
        }
      }
      .img-area {
        width: 2.9rem;
        height: 1.8rem;
        background-color: #1B604E;
      }
    }
  }
</style>
