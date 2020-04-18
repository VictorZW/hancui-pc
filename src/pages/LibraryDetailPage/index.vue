<template>
  <div class="NewsDetailPage page-content">
    <div class="page-banner"></div>
    <div class="page-inner">
      <div class="brand-search">
        <div class="Breadcrumb">当前位置：首页/芳疗学院/芳疗图书馆</div>
      </div>
      <div class="detail-content">
        <div class="title">{{ newsDetail.title }}</div>
        <div class="user-time">
          <span class="user">作者：{{ newsDetail.author }}</span>
          <span class="time">时间：{{ newsDetail.updated_at }}</span>
        </div>
        <!--分割线条-->
        <div class="page-line"></div>
        <div class="body" v-html="newsDetail.content"></div>
        <div class="Pagination" v-if="pre_news !== null || next_news !== null">
          <span class="prev"
                v-if="pre_news !== null"
                @click="toTheDetail(pre_news.id)"
          >上一条 {{ pre_news.title }}</span>
          <span class="next"
                v-if="next_news !== null"
                @click="toTheDetail(next_news.id)"
          >{{ next_news.title }} 下一条</span>
        </div>
      </div>
      <!--最下面的三个-->
      <div class="Related-news">
        <div class="title-line">
          <div class="title">相关资料</div>
        </div>
        <div class="news-list">
          <div class="news-card"
               v-for="item in newsList"
               :key="item.id"
               @click="toTheDetail(item.id)"
          >
            <div class="time">
              <span class="date">{{ getDate(item.publish_at) }}</span><span class="year">/{{ getYear(item.publish_at) }}</span>
            </div>
            <div class="title">{{ item.title }}</div>
            <div class="instruction">{{ item.instruction }}</div>
            <div class="read-more">
              <span>查看详情</span>
              <span> > </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { getYear, getDate } from '@/utils'
  import { newsDetailApi, newsListApi } from '@/apis/index'

  export default {
    name: 'LibraryDetailPage',
    data() {
      return {
        newsDetail: {},
        pre_news: {},
        next_news: {},
        typeId: 4,
        newsList: []
      }
    },
    mounted() {
      this.getNewsDetail()
      this.getNewsList()
    },
    watch: {
      $route: {
        handler: function() {
          this.getNewsDetail()
        },
        deep: true
      }
    },
    methods: {
      getDate,
      getYear,
      getNewsDetail() {
        const params = {
          id: Number(this.$route.params.id)
        }
        newsDetailApi(params).then(res => {
          console.log(res)
          this.newsDetail = JSON.parse(JSON.stringify(res.result.news))
          this.pre_news = JSON.parse(JSON.stringify(res.result.pre_news))
          this.next_news = JSON.parse(JSON.stringify(res.result.next_news))
          this.typeId = this.newsDetail.type
        })
      },
      // 上一页下一页跳转
      toTheDetail(id) {
        console.log(id)
        this.$router.push({
          name: 'LibraryDetailPage',
          params: {
            id: id
          }
        })
      },
      getNewsList() {
        const params = {
          type_id: 4,
          page: 1,
          size: 3,
          keyword: ''
        }
        newsListApi(params).then(res => {
          console.log(res)
          this.newsList = JSON.parse(JSON.stringify(res.result.list))
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .page-banner {
    background-image: url("~@IMG/lbpage.jpg");
    background-size: cover;
    width: 100%;
    height: 4.5rem;
  }
  .detail-content {
    width: 10.8rem;
    margin: auto;
    .title {
      font-size: 0.3rem;
      color: #333333;
      text-align: center;
      padding-bottom: 0.2rem;
    }
    .user-time {
      font-size: 0.12rem;
      color: #999999;
      text-align: center;
      padding-bottom: 0.37rem;
    }
    .page-line {
      width: 100%;
    }
    .body {
      font-size: 0.14rem;
      line-height: 1.4;
      color: #333333;
      padding-top: 0.33rem;
      padding-bottom: 0.86rem;
    }
    .Pagination {
      width: 100%;
      height: 0.58rem;
      background-color: #F5F5F5;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 0.3rem;
      margin-bottom: 0.98rem;
      span {
        font-size: 0.14rem;
        color: #999999;
        cursor: pointer;
      }
    }
  }
  .Related-news {
    .title-line {
      .title {
        font-size: 0.28rem;
        color: #333333;
      }
    }
    .news-list {
      padding-top: 0.41rem;
      padding-bottom: 1.43rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .news-card {
        width: 3.8rem;
        background-color: #F8F8F8;
        box-shadow: 0 0 0.21rem 0 rgba(0, 64, 51, 0.15);
        padding: 0.31rem 0.33rem 0;
        cursor: pointer;
        &:hover {
          transform: scale(1.02, 1.02);
          transition: transform .2s;
        }
        .time {
          .date {
            font-size: 0.28rem;
            color: #999999;
          }
          .year {
            font-size: 0.14rem;
            color: #999999;
          }
        }
        .title {
          font-size: 0.18rem;
          color: #333333;
          padding-top: 0.23rem;
          line-height: 1.4;
        }
        .instruction {
          font-size: 0.14rem;
          color: #666666;
          padding-top: 0.31rem;
          padding-bottom: 0.21rem;
          border-bottom: 0.01rem dotted #666666;
          line-height: 1.4;
        }
        .read-more {
          padding-top: 0.31rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 0.27rem;
          font-size: 0.14rem;
          color: #666666;
          cursor: pointer;
        }
      }
    }
  }
</style>
