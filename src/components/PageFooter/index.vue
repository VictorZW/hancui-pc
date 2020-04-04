<template>
  <div class="page-footer">
    <div class="footer-content">
      <div class="company-name">汉萃（天津）生物技术股份有限公司</div>
      <div class="com-disc">我司始终坚持天然原料，严格遵循品质规格，依托高端技术型人才和研发团队，以“卓越品质、专业素养”为理念，倡导提高人类健康水平、服</div>
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
    .footer-content {
      width: 1200px;
      margin: auto;
      .company-name {
        font-size: 18px;
        color: #FFFFFF;
        padding-top: 67px;
      }
      .com-disc {
        font-size: 14px;
        color: #FFFFFF;
        margin-top: 21px;
        margin-bottom: 71px;
      }
      .text-line {
        color: #FFFFFF;
        padding-bottom: 56px;
        span {
          font-size: 18px;
        }
      }
    }
  }
</style>
