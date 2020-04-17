<!--芳疗师主页-->
<template>
  <div class="AromatherapistHomePage">
    <div class="page-content-inner">
      <div class="brand-search">
        <div class="Breadcrumb">当前位置：首页/芳疗学院/芳疗师主页</div>
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
      <div class="aroma-content-area">
        <div class="left">
          <div class="title">
            Aromatherapist<br/>
            home page
          </div>
          <div class="title-name">芳疗师</div>
          <div class="desc">
            想让您一成不变的生活有所改变吗？<br/>
            想让您的芳香生涯变得有趣而多姿多彩吗？<br/>
            这里是芳疗师专属的芳香学院，我们致力于传播科学护肤的芳疗价值与文化，分享健康生活的香氛乐趣，把身处天南海北的专业芳疗师带到每个人的身边，做您专属的芳香健康专家，共同成长为灵魂有香气的美丽女性。 </div>
        </div>
        <div class="right">
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
              class="slide-card"
              v-for="item in teacherList"
              :key="item.id"
              :style="{ backgroundImage: 'url(' + item.avatar + ')' }"
              @click.native="toPersonalPage(item.id)"
            >
              <div class="user-msg">
                <div class="line1">
                  <div class="name">{{ item.name }}</div>
                  <div class="job">/{{ item.title }}</div>
                </div>
                <div class="line2">{{ item.skill }}</div>
                <div class="line3">
                  <span class="toPersonalPage">查看更多 ></span>
                </div>
              </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <!--<div class="swiper-button-prev" ></div>-->
            <!--<div class="swiper-button-next" ></div>-->
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { teacherListApi } from '@/apis/index'

  export default {
    name: 'AromatherapistHomePage',
    data() {
      return {
        swiperOption: {
          slidesPerView: 3,
          slidesPerColumn: 2,
          spaceBetween : 30,
          slidesPerColumnFill : 'row',
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.to-right',
            prevEl: '.to-left'
          }
        },
        teacherList: [],
        page: 1,
        size: 100,
        keyword: ''
      }
    },
    mounted() {
      this.getTeacherList()
    },
    methods: {
      toPersonalPage(id) {
        this.$router.push({
          name: 'PersonalPage',
          params: {
            id: id
          }
        })
      },
      getTeacherList() {
        const params = {
          page: this.page,
          size: this.size,
          keyword: this.keyword
        }
        teacherListApi(params).then(res => {
          console.log(res)
          this.teacherList = JSON.parse(JSON.stringify(res.result))
        })
      },
      searchData(keyword) {
        this.keyword = keyword
        this.getTeacherList()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .AromatherapistHomePage {
    width: 100%;
    height: 100vh;
    background-image: url("~@IMG/te-banner.png");
    background-size: cover;
    .page-content-inner {
      padding-top: 0.94rem;
      .brand-search {
        width: 10.21rem;
        margin: auto;
        .Breadcrumb {
          color: #FFFFFF;
        }
      }
      .aroma-content-area {
        padding: 0 3rem 0 3rem;
        display: flex;
        justify-content: space-between;
        .left {
          width: 3.93rem;
          margin-right: 1.6rem;
          .title {
            font-size: 0.48rem;
            color: #FFFFFF;
            font-weight: bold;
            line-height: 1.2;
            padding-top: 0.44rem;
          }
          .title-name {
            font-size: 0.36rem;
            color: #FFFFFF;
            padding-top: 0.27rem;
          }
          .desc {
            font-size: 0.16rem;
            color: #FFFFFF;
            line-height: 1.6;
            padding-top: 0.91rem;
          }
        }
        .right {
          width: 7.57rem;
          margin-top: 0.4rem;
          position: relative;
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
          .swiper {
            .slide-card {
              height: 2.82rem !important;
              background-size: 100% 100%;
              position: relative;
              cursor: pointer;
              &:hover > .user-msg {
                opacity: 0.9;
              }
              .user-msg {
                width: 100%;
                height: 1rem;
                background-color: #069163;
                position: absolute;
                bottom: 0;
                padding: 0.13rem 0.13rem;
                line-height: 1.4;
                opacity: 0;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .line1 {
                  display: flex;
                  align-items: flex-end;
                  .name {
                    font-size: 0.18rem;
                    color: #FFFDFD;
                    max-width: 50%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                  }
                  .job {
                    font-size: 0.12rem;
                    color: #FFFDFD;
                    max-width: 50%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                  }
                }
                .line2 {
                  font-size: 0.12rem;
                  color: #FFFFFF;
                  overflow:hidden;
                  text-overflow:ellipsis;
                  white-space:nowrap;
                }
                .line3 {
                  text-align: right;
                  .toPersonalPage {
                    cursor: pointer;
                    font-size: 0.12rem;
                    color: #FFFFFF;
                  }
                }
              }
            }
          }
          /deep/ .swiper-pagination-bullet {
            width: 0.1rem;
            height: 0.04rem;
            background-color: #FFFFFF;
            border-radius: 0.03rem;
          }
          /deep/ .swiper-pagination-bullet-active {
            width: 0.15rem;
            height: 0.06rem;
            background-color: #FFFFFF;
          }
        }
      }
    }
  }
</style>
