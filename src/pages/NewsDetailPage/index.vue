<template>
  <div class="NewsDetailPage page-content">
    <div class="page-banner"></div>
    <div class="page-inner">
      <div class="brand-search">
        <div class="Breadcrumb">当前位置：首页/企业资讯/实时资讯</div>
      </div>
      <div class="detail-content">
        <div class="title">千栢蕙市场如何走向成熟 品牌化是关键</div>
        <div class="user-time">
          <span class="user">作者：汉萃（天津）生物技术有限公司</span>
          <span class="time">时间：2020-3-16</span>
        </div>
        <!--分割线条-->
        <div class="page-line"></div>
        <div class="body">
          汉萃（天津）生物技术有限公司（下述简称我公司）于2016年8月应联合诺华（天津）有限公司招商邀请，在集生物医药研发、孵化、转化、生产、生物医药资讯等多种功能于一体的生物科技产业园----天津滨海新区中英医疗健康产业基地成立, 2016年 9 月我公司还成立了销售子公司--汉萃（上海）生物科技有限公司。
          我公司目前开展的业务已经涉及农业、种植、加工、研发、运用、教育与人才培养等领域，并与上海交通大学、山东大学淄博生物医药研究院建立产学研合作关系，在植物萃取应用方向开展课程、为研发成果产业化提供更扎实的理论支撑，以及设立国际芳疗师培训基地，培育出一批迎合市场需求的芳疗师。

          我公司着力推广自然、保健、环保与健康事业相结合，以陈炳坤博士研制成果为主导，研究和开发独创的自然芳疗产品，以本草精髓结合芳疗精油的奇效，致力专研出高效可靠的功效性辅助医疗产品，利用自然界赋予的无限能量---植物的精纯本质对人体进行内外兼调，为特殊的、个性化的自然健康需求提供完美的解决方案，以此铸就芳香产业中的领导品牌，并且具有相对完整的产业链运营经验。我公司秉承中国中医药养生的平衡理论和整体观念，以“卓越品质、专业素养”为企业理念，把提高人类健康水平为最高目标，用专业的质量和卓越的服务，为社会提供高品质的健康产品和全方位的支持服务。我公司在中英医疗健康产业基地建立研发中心及健康体验中心，提供标准化产品，将为人们提供更加多元及开放式的体验，希望更多的人能够透过自然的灵性和对不同文明的解读，获得心灵的回归。

          我公司自成立之初至今，一直从事研究天然植物提取物在医疗健康领域的应用。依据中医药配伍理论，并利用现代科技，将萃取的高质量植物提取物进行科学调配，已经取得一定研发成果。目前，我公司已在成立不到3年的时间内，培养了一支高素质研发管理团队，积极为整个健康产品服务平台的实现奠定技术基础及人才基础，现已被认定为天津市科技型中小企业，此外还注册申请了5项商标（芊栢荟、P K Robert、靓肽媄、百灵油、汉萃本草），并获得3项实用新型证书（一种萃取装置、一种高效气液分离器、一种水油分离装置），另有6项发明专利已经通过审批，进入实质性审查阶段，未来计划还将针对研发的30余种产品配方来申请新的产品专利，在与CRO公司合作进行临床验证后申请药字号。
        </div>
        <div class="Pagination">
          <span class="prev">上一条 千栢蕙市场如何走向成熟</span>
          <span class="next">千栢蕙市场如何走向成熟 下一条</span>
        </div>
      </div>
      <!--最下面的三个-->
      <div class="Related-news">
        <div class="title-line">
          <div class="title">相关新闻</div>
        </div>
        <div class="news-list">
          <div class="news-card"></div>
          <div class="news-card"></div>
          <div class="news-card"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NewsDetailPage'
  }
</script>

<style lang="scss" scoped>
  .page-banner {
    background-image: url("~@IMG/news-list-banner.png");
    background-size: cover;
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
        height: 2.6rem;
        background-color: #F8F8F8;
        box-shadow: 0 0 0.21rem 0 rgba(0, 64, 51, 0.15);
      }
    }
  }
</style>
