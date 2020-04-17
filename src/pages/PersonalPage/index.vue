<template>
  <div class="PersonalPage">
    <div class="page-inner">
      <div class="brand-search">
        <div class="Breadcrumb">当前位置：首页/芳疗学院/芳疗师主页</div>
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
              <div class="text hobby">爱好：{{ TeacherDetail.fav }}</div>
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
        margin-top: 0.25rem;
        width: 100%;
        min-height: 6.5rem;
        background-color: #FFFFFF;
        position: relative;
        padding: 0 0.59rem 0.19rem 0;
        .avatar {
          width: 2.25rem;
          height: 2.72rem;
          position: absolute;
          top: -0.2rem;
          left: -1.52rem;
          background-size: 100% 100%;
          border-radius: 0.05rem;
        }
        .text {
          font-size: 0.16rem;
          color: #333333;
          line-height: 1.8;
        }
        .hobby {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box; // 作为弹性伸缩盒子模型显示。
          -webkit-box-orient: vertical; // 设置伸缩盒子的子元素排列方式--从上到下垂直排列
          -webkit-line-clamp: 2; // 显示的行
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
            padding-top: 0.19rem;
            padding-bottom: 0.19rem;
            background-color: rgb(242, 242, 242);
            height: 2.52rem;
            .padding-l {
              padding-left: 0.9rem;
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
            padding-top: 0.19rem;
            padding-left: 0.1rem;
            .title {
              .title-name {
                font-size: 0.18rem;
                color: #0B9366;
                border-bottom: 0.02rem solid #1BB284;
                padding: 0.1rem 0.1rem 0.1rem 0;
                display: inline-block;
              }
            }
            .text {
              padding-top: 0.1rem;
              white-space: pre-wrap;
              word-wrap: break-word;
            }
          }
        }
        .other-msg {
          padding-top: 0.15rem;
          padding-left: 0.59rem;
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
            .text {
              padding-top: 0.1rem;
              white-space: pre-wrap;
              word-wrap: break-word;
            }
          }
        }
      }
    }
  }
</style>
