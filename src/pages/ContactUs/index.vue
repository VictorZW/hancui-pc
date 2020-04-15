<template>
  <div class="contact-us">
    <div class="page page6">
      <div class="about-us">
        <div class="about-us-inner">
          <div class="com-name">汉萃（天津）生物技术股份有限公司</div>
          <div class="desc">我司始终坚持天然原料，严格遵循品质规格，依托高端技术型人才和研发团队，以“卓越品质、专业素养”为理念，倡导提高人类健康水平、服务大众、造福大众，是“汉萃”品牌终身的追求与使命。</div>
          <div class="line">
            地址：天津市滨海高新区塘沽海洋科技园海星广场1号楼12层
          </div>
          <div class="line">
            电话：400-8610-855
          </div>
          <div class="line">
            邮箱：hancui@hancfl.com
          </div>
          <div class="line">
            网址：www.hancfl.com
          </div>
          <div class="qr-code">
            <div class="code code1"></div>
            <div class="code code2"></div>
          </div>
          <div class="code-tips">扫一扫关注公司公众号</div>
          <div class="send-message">
            <div class="left">
              <div class="title">留言反馈</div>
              <div class="desc">如果您想了解更多或有什么需求，请给我们留言呦，我们会第一时间联系您的！</div>
            </div>
            <div class="right">
              <el-input v-model="name" placeholder="姓名:" class="name"></el-input>
              <el-input v-model="mobile" placeholder="电话:" class="mobile"></el-input>
              <el-input v-model="content"
                        placeholder="留言内容:"
                        resize="none"
                        type="textarea"
                        class="content"></el-input>
              <div class="submit-btn-area">
                <div class="submit-btn" @click="submitMessage">提交</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    messageApi
  } from '@/apis/index'

  export default {
    name: 'ContactUs',
    data() {
      return {
        name: '',
        mobile: '',
        content: ''
      }
    },
    methods: {
      submitMessage() {
        if (this.name.trim() === '' || this.mobile.trim() === '' || this.content.trim() === '') {
          this.$message({
            showClose: true,
            type: 'error',
            message: '请填写完整再提交！'
          })
          return false
        }
        const params = {
          name: this.name,
          mobile: this.mobile,
          content: this.content
        }
        messageApi(params).then(res => {
          if (res.success) {
            this.$message({
              showClose: true,
              type: 'success',
              message: '留言提交成功~'
            })
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .page6 {
    padding-bottom: 0.6rem;
    .about-us {
      width: 100%;
      background-color: #FFFFFF;
      .about-us-inner {
        width: 12rem;
        height: 100%;
        padding-top: 2.13rem;
        margin: auto;
        position: relative;
        .com-name {
          font-size: 0.18rem;
          color: #004033;
          padding-bottom: 0.21rem;
        }
        .desc {
          font-size: 0.14rem;
          color: #004033;
          padding-bottom: 1.01rem;
          line-height: 1.4;
        }
        .line {
          font-size: 0.18rem;
          color: #004033;
          padding-bottom: 0.56rem;
        }
        .qr-code {
          display: flex;
          padding-top: 0.21rem;
          .code {
            width: 1.45rem;
            height: 1.39rem;
            margin-right: 0.42rem;
          }
          .code1 {
            background-image: url("~@IMG/qcode1.png");
            background-size: 100% 100%;
          }
          .code2 {
            background-image: url("~@IMG/qcode2.png");
            background-size: 100% 100%;
          }
        }
        .code-tips {
          font-size: 0.18rem;
          color: #004033;
          padding-left: 0.68rem;
          padding-top: 0.28rem;
        }
        .send-message {
          width: 7rem;
          height: 4.05rem;
          background-color: #069163;
          position: absolute;
          top: 4.68rem;
          right: 0;
          display: flex;
          .left {
            width: 2.75rem;
            height: 100%;
            padding-top: 0.5rem;
            padding-left: 0.5rem;
            .title {
              font-size: 0.18rem;
              color: #FFFFFF;
              padding-bottom: 0.4rem;
            }
            .desc {
              font-size: 0.18rem;
              color: #FFFFFF;
              width: 1.47rem;
              line-height: 1.6;
            }
          }
          .right {
            flex: 1;
            height: 100%;
            padding-top: 0.6rem;
            padding-right: 0.5rem;
            /deep/ .el-input {
              width: 100%;
              height: 0.4rem;
              margin-bottom: 0.3rem;
            }
            .submit-btn-area {
              padding-top: 0.29rem;
              .submit-btn {
                width: 0.9rem;
                height: 0.4rem;
                float: right;
                background-color: #FFFFFF;
                text-align: center;
                line-height: 0.4rem;
                font-size: 0.18rem;
                color: #33A27D;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }
</style>
