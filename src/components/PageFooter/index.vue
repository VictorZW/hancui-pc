<template>
  <div class="page-footer">
    <div class="footer-content">
      <div class="company-name">汉萃（天津）生物技术股份有限公司</div>
      <div class="com-disc">我司始终坚持天然原料，严格遵循品质规格，依托高端技术型人才和研发团队，以“卓越品质、专业素养”为理念，倡导提高人类健康水平、服务大众、造福大众，是“汉萃”品牌终身的追求与使命。</div>
      <div class="text-line">
        <span>地址：天津市滨海高新区塘沽海洋科技园海星广场1号楼12层</span>
      </div>
      <div class="text-line">
        <span>电话：400-8610-855</span>
      </div>
      <div class="text-line">
        <span>邮箱：hancui@hancfl.com</span>
      </div>
      <div class="text-line">
        <span>网址：www.hancfl.com</span>
      </div>
      <div class="code-area">
        <div class="code-cont">
          <div class="code code1"></div>
          <div class="code code2"></div>
        </div>
        <div class="text">扫一扫关注公司公众号</div>
      </div>
    </div>
    <div class="beian">
      <div class="bei-an-area">
        <span>Copyright © 2020汉萃（天津)有限公司 保留所有权利</span>
        <img src="~@IMG/beian.png" class="beian-icon">
        <span>津ICP备19011178号</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PageFooter'
  }
</script>

<style lang="scss" scoped>
  .page-footer {
    background: #069163;
    .beian {
      width: 100%;
      height: 0.4rem;
      color: #FFFFFF;
      font-size: 0.14rem;
      text-align: center;
      line-height: 0.4rem;
      background-color: #004033;
      .beian-icon {
        width: 0.22rem;
        vertical-align: middle;
        margin-right: 0.05rem;
      }
    }
    .footer-content {
      width: 12rem;
      margin: auto;
      position: relative;
      .company-name {
        font-size: 0.18rem;
        color: #FFFFFF;
        padding-top: 0.67rem;
        font-weight: bold;
      }
      .com-disc {
        font-size: 0.16rem;
        color: #FFFFFF;
        margin-top: 0.21rem;
        margin-bottom: 0.71rem;
        font-weight: 300;
        line-height: 1.6;
      }
      .text-line {
        color: #FFFFFF;
        padding-bottom: 0.56rem;
        span {
          font-size: 0.18rem;
          font-weight: 400;
        }
      }
      .code-area {
        position: absolute;
        top: 1.93rem;
        right: 0;
        .code-cont {
          display: flex;
          .code {
            width: 1.44rem;
            height: 1.38rem;
            background-size: 100% 100%;
            margin-left: 0.43rem;
          }
          .code1 {
            background-image: url("~@IMG/qcode1.png");
          }
          .code2 {
            background-image: url("~@IMG/qcode2.png");
          }
        }
        .text {
          font-size: 0.18rem;
          color: #FFFFFF;
          margin-top: 0.28rem;
          text-align: center;
        }
      }
    }
  }
</style>
