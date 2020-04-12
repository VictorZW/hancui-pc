<template>
  <div class="PersonalPage">
    <div class="page-inner">
      <div class="brand-search">
        <div class="Breadcrumb">当前位置：首页/企业资讯</div>
      </div>
      <div class="PersonalPage-content">
        <div class="avatar"
             :style="{ backgroundImage: 'url(' + TeacherDetail.avatar + ')' }"
        ></div>
        <div class="base-msg">
          <div class="left">
            <div class="padding-l">
              <div class="name-job">
                <span class="name">{{ TeacherDetail.name }}</span><span class="job">/ {{ TeacherDetail.title }}</span>
              </div>
              <div class="text">第一职业：{{ TeacherDetail.first_job }}</div>
              <div class="text">第二职业：{{ TeacherDetail.second_job }}</div>
              <div class="text">爱好：{{ TeacherDetail.fav }}</div>
              <div class="text">联系方式：{{ TeacherDetail.mobile }}</div>
              <div class="tips">有什么问题记得私信我呦！</div>
            </div>
          </div>
          <div class="right">
            <div class="block">
              <div class="title">
                <span class="title-name">擅长</span>
              </div>
              <div class="text">{{ TeacherDetail.skill }}</div>
              <div class="dotted"></div>
            </div>
            <div class="block">
              <div class="title">
                <span class="title-name">成就</span>
              </div>
              <div class="text">{{ TeacherDetail.achievement }}</div>
              <div class="dotted"></div>
            </div>
          </div>
        </div>
        <div class="other-msg">
          <div class="block">
            <div class="title">
              <span class="title-name">经历</span>
            </div>
            <div class="text">{{ TeacherDetail.experience }}</div>
            <div class="dotted"></div>
          </div>
          <div class="block">
            <div class="title">
              <span class="title-name">资历</span>
            </div>
            <div class="text">{{ TeacherDetail.seniority }}</div>
            <div class="dotted"></div>
          </div>
          <div class="block">
            <div class="title">
              <span class="title-name">课程预告</span>
            </div>
            <div class="text">{{ TeacherDetail.achievement }}</div>
            <div class="dotted"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { teacherDetailApi } from '@/apis/index'

  export default {
    name: 'PersonalPage',
    data() {
      return {
        TeacherDetail: {}
      }
    },
    mounted() {
      this.getTeacherDetail()
    },
    methods: {
      getTeacherDetail() {
        const params = {
          id: Number(this.$route.params.id)
        }
        teacherDetailApi(params).then(res => {
          console.log(res)
          this.TeacherDetail = JSON.parse(JSON.stringify(res.result))
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .PersonalPage {
    width: 100%;
    height: 100vh;
    background-image: url("~@IMG/te-banner.png");
    background-size: cover;
    .page-inner {
      padding-top: 0.94rem;
      .Breadcrumb {
        color: #FFFFFF;
      }
      .PersonalPage-content {
        margin-top: 0.65rem;
        width: 100%;
        height: 7.05rem;
        background-color: #FFFFFF;
        position: relative;
        padding: 0.19rem 0.59rem;
        .avatar {
          width: 2.25rem;
          height: 2.72rem;
          position: absolute;
          top: -0.66rem;
          left: -1.52rem;
          background-size: 100% 100%;
        }
        .text {
          font-size: 0.16rem;
          color: #333333;
          line-height: 1.8;
        }
        .dotted {
          width: 100%;
          border-bottom: 1px dotted #666666;
          padding: 0.05rem 0 0.1rem;
        }
        .base-msg {
          display: flex;
          .left {
            width: 3.67rem;
            .padding-l {
              padding-left: 0.32rem;
              .name-job {
                line-height: 1.5;
                .name {
                  font-size: 0.24rem;
                  color: #333333;
                }
                .job {
                  font-size: 0.16rem;
                  color: #666666;
                }
              }
              .tips {
                font-size: 0.18rem;
                color: #0B9366;
                padding-top: 0.2rem;
              }
            }
          }
          .right {
            flex: 1;
            .title {
              .title-name {
                font-size: 0.18rem;
                color: #0B9366;
                border-bottom: 0.02rem solid #1BB284;
                padding: 0.1rem 0.1rem 0.1rem 0;
                display: inline-block;
              }
            }
          }
        }
        .other-msg {
          padding-top: 0.3rem;
          .block {
            padding-top: 0.1rem;
            .title {
              .title-name {
                font-size: 0.18rem;
                color: #0B9366;
                border-bottom: 0.02rem solid #1BB284;
                padding: 0.1rem 0.1rem 0.1rem 0;
                display: inline-block;
              }
            }
          }
        }
      }
    }
  }
</style>
