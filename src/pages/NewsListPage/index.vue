<template>
  <div class="NewsListPage page-content">
    <div class="page-banner"></div>
    <div class="page-inner">
      <div class="brand-search">
        <div class="Breadcrumb">当前位置：首页/企业资讯/{{ brandName }}</div>
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
               @click="changeType(1)"
               :class="[(typeId === 1) ? 'tab-active' : '']"
          >实时资讯</div>
          <div class="tab"
               @click="changeType(2)"
               :class="[(typeId === 2) ? 'tab-active' : '']"
          >芳疗资讯</div>
          <div class="tab second"
               @click="changeType(3)"
               :class="[(typeId === 3) ? 'tab-active' : '']"
          >科技资讯</div>
        </div>
      </div>
      <!--list-->
      <div class="list-ul">
        <div class="news-card"
             v-for="item in newsList"
             :key="item.id"
             @click="toNewsDetailPage(item.id)"
        >
          <div class="text-area">
            <div class="time">
              <span class="month">{{ getDate(item.publish_at) }}</span><span class="year">/{{ getYear(item.publish_at) }}</span>
            </div>
            <div class="title">{{ item.title }}</div>
            <div class="body">{{ item.instruction }}</div>
            <div class="read-more">
              <span>
                <img class="read-more-img" src="~@IMG/read-more.png" alt="">
              </span>
            </div>
          </div>
          <div class="img-area"
               :style="{ backgroundImage: 'url(' + item.thumb + ')' }"
          ></div>
        </div>
      </div>
      <el-pagination
        @current-change="handleCurrentChange"
        layout="prev, pager, next"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import { getYear, getDate } from '@/utils'
  import { newsListApi } from '@/apis/index'

  export default {
    name: 'NewsListPage',
    data() {
      return {
        typeId: 1,
        page: 1,
        size: 6,
        keyword: '',
        newsList: [],
        total: 0
      }
    },
    computed: {
      brandName() {
        if (this.typeId === 1) {
          return '实时资讯'
        } else if (this.typeId === 2) {
          return '芳疗资讯'
        } else {
          return '科技资讯'
        }
      }
    },
    watch: {
      $route: {
        handler: function(){
          this.typeId = Number(this.$route.params.type)
          this.getNewsList()
        },
        deep: true
      }
    },
    mounted() {
      this.typeId = Number(this.$route.params.type)
      this.getNewsList()
    },
    methods: {
      getDate,
      getYear,
      handleCurrentChange(val) {
        this.page = val
        this.getProductList()
      },
      changeType(type) {
        this.$router.push({
          name: 'NewsListPage',
          params: { type: type }
        })
        this.getNewsList()
      },
      toNewsDetailPage(id) {
        this.$router.push({
          name: 'NewsDetailPage',
          params: {
            id: id
          }
        })
      },
      getNewsList() {
        const params = {
          type_id: this.typeId,
          page: this.page,
          size: this.size,
          keyword: this.keyword
        }
        newsListApi(params).then(res => {
          this.total = res.result.total
          this.newsList = JSON.parse(JSON.stringify(res.result.list))
        })
      },
      searchData(keyword) {
        this.keyword = keyword
        this.getNewsList()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .page-banner {
    width: 100%;
    height: 4.5rem;
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
      cursor: pointer;
      &:hover {
        transform: scale(1.02, 1.02);
        transition: transform .2s;
      }
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
        background-size: 100% 100%;
      }
    }
    .read-more-img {
      width: 0.65rem;
    }
  }
</style>
