<template>
  <div class="home-page">
    <div id="pureFullPage" ref="pureFullPage">
      <div class="page">
        <swiper class="swiper page1-swiper" :options="swiperOption1">
          <swiper-slide
            class="homepage-banner"
            v-for="item in homePageBanner"
            :key="item.id"
          >
            <a :href="item.url" target="_blank">
              <img :src="item.img_url"
                   :alt="item.title"
              >
            </a>
          </swiper-slide>
        </swiper>
      </div>
      <div class="page page-second">
        <div class="product-banner"
             v-for="item in productCate"
             :key="item.id"
             :style="{ backgroundImage: 'url(' + item.bk_url + ')' }"
        >
          <div class="cover-model">
            <!--产品文字说明-->
            <div class="pro-msg">
              <div class="pro-icon-area">
                <div class="pro-icon"
                     :style="{ backgroundImage: 'url(' + item.icon_url + ')' }"></div>
              </div>
              <div class="title">{{ item.title }}</div>
              <div class="title">{{ item.en_title }}</div>
              <div class="detail">{{ item.instruction }}</div>
              <div class="read-more">
                <router-link
                  :to="{ name: 'Products', params: { type: item.type }}"
                >
                  <span>查看更多</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="page page3">
        <div class="left-area">
          <div class="left-inner">
            <div class="click-area">
              <div class="click-line"
                   :class="[(page3Index === 1) ? 'click-line-active' : '']"
                   @mouseover="choosePage3Index(1)"
              >
                <span class="line"></span>
                <span class="text">芳疗培训</span>
              </div>
              <div class="click-line"
                   :class="[(page3Index === 2) ? 'click-line-active' : '']"
                   @mouseover="choosePage3Index(2)"
              >
                <span class="line"></span>
                <span class="text">芳疗师主页</span>
              </div>
              <div class="click-line"
                   :class="[(page3Index === 3) ? 'click-line-active' : '']"
                   @mouseover="choosePage3Index(3)"
              >
                <span class="line"></span>
                <span class="text">芳疗图书馆</span>
              </div>
            </div>
          </div>
        </div>
        <div class="right-area">
          <div class="right-box">
            <div class="flpx" v-if="page3Index === 1">
              <router-link to="/TrainingPage">
                <div class="click-btn"></div>
              </router-link>
            </div>
            <div class="page3-slide" v-if="page3Index === 2">
              <swiper class="swiper" :options="swiperOption">
                <swiper-slide
                  class="pro-area"
                  v-for="item in teacherList"
                  :key="item.id"
                  :style="{ backgroundImage: 'url(' + item.avatar + ')' }"
                  @click.native="toPersonalPage(item.id)"
                >
                  <div class="teacher-msg">
                    <div class="line1">
                      <span class="name">{{ item.name }}</span>
                      <span class="job">{{ item.title }}</span>
                    </div>
                    <div class="line2">{{ item.skill }}</div>
                  </div>
                </swiper-slide>
                <!--<div class="swiper-pagination" slot="pagination"></div>-->
                <div class="swiper-button-prev-new" slot="button-prev"></div>
                <div class="swiper-button-next-new" slot="button-next"></div>
              </swiper>
            </div>
            <div class="page3-slide" v-if="page3Index === 3">
              <swiper class="swiper" :options="swiperOption">
                <swiper-slide
                  class="pro-area"
                  v-for="item in libraryData"
                  :key="item.id"
                  :style="{ backgroundImage: 'url(' + item.thumb + ')' }"
                >
                  <div class="teacher-msg">
                    <div class="line1">
                      <span class="job">{{ item.title }}</span>
                    </div>
                  </div>
                </swiper-slide>
                <!--<div class="swiper-pagination" slot="pagination"></div>-->
                <div class="swiper-button-prev-new" slot="button-prev"></div>
                <div class="swiper-button-next-new" slot="button-next"></div>
              </swiper>
            </div>
          </div>
        </div>
      </div>
      <!--page4-->
      <div class="page page4">
        <div class="content-inner">
          <div class="left-area">
            <div class="left-inner">
              <div class="click-area">
                <div class="click-line"
                     :class="[(page4Index === 1) ? 'click-line-active' : '']"
                     @mouseover="choosePage4Index(1)"
                >
                  <span class="line"></span>
                  <span class="text">实时资讯</span>
                </div>
                <div class="click-line"
                     :class="[(page4Index === 2) ? 'click-line-active' : '']"
                     @mouseover="choosePage4Index(2)"
                >
                  <span class="line"></span>
                  <span class="text">芳疗资讯</span>
                </div>
                <div class="click-line"
                     :class="[(page4Index === 3) ? 'click-line-active' : '']"
                     @mouseover="choosePage4Index(3)"
                >
                  <span class="line"></span>
                  <span class="text">科技资讯</span>
                </div>
              </div>
            </div>
          </div>
          <div class="right-area">
            <div class="block-1">
              <div class="block">
                <el-timeline>
                  <el-timeline-item
                    placement="top"
                    v-for="item in newsListData"
                    :key="item.id"
                    :timestamp="item.publish_at"
                  >
                    <el-card @click.native="toNewsDetailPage(item.id)">
                      <div class="title">{{ item.title }}</div>
                      <div class="read-more">
                        <span>查看详情 ></span>
                      </div>
                    </el-card>
                  </el-timeline-item>
                  <el-timeline-item>
                    <router-link
                      :to="{ name: 'NewsListPage', params: { type: page4Index }}"
                    >
                      <span class="to-read-more">更多</span>
                    </router-link>
                  </el-timeline-item>
                </el-timeline>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--page5-->
      <div class="page page5">
        <div class="left">
          <div class="text-content">
            <div class="title1">About us</div>
            <div class="title2">关于我们</div>
            <div class="desc">
              汉萃（天津）生物技术股份有限公司于2016年8月在天津滨海新区中英医疗健康产业基地成立， 2016年 9 月我公司还成立了营销子公司--汉萃（上海）生物科技有限公司；2019年8月完成股改，9月在天津OTC挂牌(股票代码000313）。
            </div>
            <div class="line">
              <span></span>
            </div>
          </div>
        </div>
        <div class="right"></div>
        <div class="po-text-area">
          <div class="content">
            <div class="content-1">
              <div class="icon-area">
                <div class="icon qyjs"></div>
              </div>
              <div class="title">企业介绍</div>
              <div class="line">
                <span></span>
              </div>
              <div class="desc">2018年汉萃与芳香芳疗产业协会合作成立检测研发中心，为芳香行业企业提供技术支持与服务；并与美国著名生物研究机构紧密合作，主营业务是天然植物健康产品、芳香疗法和护肤肽类终端产品的技术研发与销售、健康咨询服务。关联公司山东汉肽生物医药有限公司，目前拥有3000平方米的研发基地和10000余平方米的生产基地，并与山东大学合作，成立“山东大学汉肽生物技术研究院”，致力于研发针对糖尿病、肿瘤、心血管疾病、耐药菌感染等重大疾病的药物，并研发了30种美容肽原料、发酵生产胶原蛋白等工艺，推出了多款活性肽产品。</div>
            </div>
            <div class="content-1">
              <div class="icon-area">
                <div class="icon hxjs"></div>
              </div>
              <div class="title">核心技术</div>
              <div class="line">
                <span></span>
              </div>
              <div class="desc">
                汉肽生物和山东大学淄博生物医药研究院合作，成立“山东大学汉肽生物技术研究院”，培养了一支高素质研发管理团队，并开展新药筛查和抗衰药物研发。已拥有20多个一线肽药物的成熟生产工艺，齐考诺肽和利那洛肽即将申报临床申请，并开发了30种美容肽原料、发酵生产胶原蛋白等生产工艺。从全球筛选采购进口200余种单方精油原料，为国内食品、药品、日化用品企业提供优质的芳香原料，并研发6大系列40余种无添加任何化学成分的复方功效精油，为芳疗产业提供产品及技术支持。已申请精油相关发明专利9项、肽相关发明专利7项，并拥有3套关于精油和肽原料研发的软件系统。
              </div>
            </div>
          </div>
          <div class="content">
            <div class="content-1">
              <div class="icon-area">
                <div class="icon qywh"></div>
              </div>
              <div class="title">企业文化</div>
              <div class="line">
                <span></span>
              </div>
              <div class="desc">
                “汉萃”始终坚持天然原料，严格遵循品质规格；依托高端技术型人才和研发团队，致力于打造顶尖的精油和肽产品，以“卓越品质、专业素养”为理念，倡导提高人类健康水平、服务大众、造福大众，是“汉萃”终身的追求与使命。
              </div>
            </div>
            <div class="content-1">
              <div class="icon-area">
                <div class="icon jyfw"></div>
              </div>
              <div class="title">经营范围</div>
              <div class="line">
                <span></span>
              </div>
              <div class="desc">
                “汉萃”旗下目前拥有“芊栢荟”等品牌，主要以精油及活性肽为基础所研发的美容护肤、亚健康调理、芳香疗法等系列衍生产品。并成立了中华注册芳疗师协会，设立国际芳疗师培训基地，在植物萃取应用方向开展课程，为研发成果产业化提供更扎实的理论支撑，形成芳疗研究、培训、就业的智慧芳疗生态圈。
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--page6-->
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
        <div class="beian">津ICP备19011178号</div>
      </div>
    </div>
    <div id="upDownIcon"></div>
  </div>
</template>

<script>
  import {
    BannerApi,
    productCateApi,
    teacherListApi,
    newsListApi,
    messageApi
  } from '@/apis/index'

  export default {
    name: 'HomePage',
    data() {
      return {
        swiperOption1: {
          autoplay: true,
        },
        swiperOption: {
          slidesPerView: 'auto',
          autoplay: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        homePageBanner: [],
        productCate: [],
        page3Index: 1,
        page4Index: 1,
        teacherList: [],
        libraryData: [],
        newsListData: [],
        name: '',
        mobile: '',
        content: ''
      }
    },
    mounted() {
      // 创建全屏滚动实例，传入动画回调函数，并初始化
      new PureFullPage({
        delay: 1000,
        isShowNav: true
      })
      this.getHomepageBanner()
      this.getProductCate()
      this.getNewsList()
    },
    methods: {
      getHomepageBanner() {
        // homePageBanner
        BannerApi({ type: 1 }).then(res => {
          this.homePageBanner = JSON.parse(JSON.stringify(res.result))
        })
      },
      getProductCate() {
        productCateApi().then(res => {
          this.productCate = JSON.parse(JSON.stringify(res.result))
        })
      },
      getTeacherList() {
        teacherListApi().then(res => {
          console.log(res)
          this.teacherList = JSON.parse(JSON.stringify(res.result))
        })
      },
      getLibraryData() {
        const params = {
          type_id: 4,
          page: this.page,
          size: this.size,
          keyword: this.keyword
        }
        newsListApi(params).then(res => {
          this.libraryData = JSON.parse(JSON.stringify(res.result))
        })
      },
      getNewsList() {
        const params = {
          type_id: this.page4Index,
          page: 1,
          size: 4,
          keyword: ''
        }
        newsListApi(params).then(res => {
          this.newsListData = JSON.parse(JSON.stringify(res.result))
        })
      },
      choosePage3Index(index) {
        this.page3Index = index
        if (index === 3) {
          this.getLibraryData()
        } else if (index === 2) {
          this.getTeacherList()
        }
      },
      choosePage4Index(index) {
        this.page4Index = index
        this.getNewsList()
      },
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
      },
      toPersonalPage(id) {
        console.log(id)
        this.$router.push({
          name: 'PersonalPage',
          params: {
            id: id
          }
        })
      },
      toNewsDetailPage(id) {
        this.$router.push({
          name: 'NewsDetailPage',
          params: {
            id: id
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/_mixins.scss";

  .home-page {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: rgba(6, 145, 99, 0.9);

    .page {
      display: flex;
    }

    #upDownIcon {
      width: 0.24rem;
      height: 0.26rem;
      background-image: url("~@IMG/upDownIcon.png");
      background-size: cover;
      position: fixed;
      bottom: 0.6rem;
      left: 0;
      right: 0;
      margin: auto;
      z-index: 1000;
      cursor: pointer;
    }

    .page-first {
      @include background-cover-center();
    }
    .page1-swiper {
      width: 100%;
      height: 100%;
    }
    .homepage-banner {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .page-second {
      background: #069163 no-repeat center/cover;
      .product-banner {
        width: 33.33%;
        height: 100%;
        @include background-cover-center();
        position: relative;
        .cover-model {
          @include position-ab();
          background-color: rgba(6, 145, 99, 0.9);
          z-index: 10;
          &:hover {
            background: none;
            transition: all 1s linear;
          }
          &:hover > .pro-msg{
            background-color: rgba(6, 145, 99, 0.9);
          }
        }
        .pro-msg {
          width: 4.42rem;
          height: 4.42rem;
          @include position-ab();
          z-index: 20;
          margin: auto;
          border-radius: 50%;
          .pro-icon-area {
            display: flex;
            justify-content: center;
            margin-top: 0.43rem;
            margin-bottom: 0.3rem;
            .pro-icon {
              width: 0.34rem;
              height: 0.34rem;
              background-size: 100% 100%;
            }
          }
          .title {
            font-size: 0.16rem;
            font-weight: 400;
            color: #FEFEFE;
            text-align: center;
            padding-bottom: 0.07rem;
          }
          .detail {
            font-size: 0.14rem;
            color: #FEFEFE;
            padding: 0.22rem 0.7rem 0;
            line-height: 1.5;
          }
          .read-more {
            text-align: center;
            span {
              display: inline-block;
              font-size: 0.16rem;
              color: #FEFEFE;
              padding: 0.34rem 0 0.15rem;
              border-bottom: 0.02rem solid #FFFFFF;
              cursor: pointer;
            }
          }
        }
      }
    }

    .page3 {
      background-image: url("~@IMG/page2bg.png");
      @include background-cover-center();
      .left-area {
        flex: 1;
        height: 100%;
        .left-inner {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          .click-area {
            .click-line {
              padding: 0.24rem 0;
              .line {
                width: 0.3rem;
                height: 0.04rem;
                background-color: #8CD8BE;
                display: inline-block;
                vertical-align: middle;
                margin-right: 0.3rem;
              }
              .text {
                font-size: 0.18rem;
                color: #8CD8BE;
                cursor: pointer;
              }
            }
            .click-line-active {
              .line {
                background-color: #FFFFFF;
              }
              .text {
                color: #FFFFFF;
              }
            }
          }
        }
      }
      .right-area {
        width: 15.51rem;
        height: 100%;
        .right-box {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          .flpx {
            width: 13.50rem;
            height: 8.27rem;
            background-image: url("~@IMG/flpx.png");
            background-size: cover;
            position: relative;
            .click-btn {
              width: 3rem;
              height: 0.7rem;
              background-image: url("~@IMG/iconbg.png");
              background-size: 100% 100%;
              position: absolute;
              bottom: 0.64rem;
              left: 0;
              right: 0;
              margin: auto;
              cursor: pointer;
            }
          }
          .page3-slide {
            width: 100%;
            height: 4.73rem;
            padding-left: 0.47rem;
            /deep/ .swiper-container {
              overflow: visible;
            }
            .pro-area {
              width: 3.22rem;
              height: 4.73rem;
              margin-right: 0.25rem;
              cursor: pointer;
              background-size: 100% 100%;
              position: relative;
              &:hover {
                transform: scale(1.1, 1.1);
                transition: transform .2s;
              }
              .teacher-msg {
                padding: 0.13rem 0.21rem;
                background-color: #069163;
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                line-height: 1.4;
                opacity:0.9;
                display: none;
                .line1 {
                  .name {
                    font-size: 0.24rem;
                    color: #FFFDFD;
                  }
                  .job {
                    font-size: 0.16rem;
                    color: #FFFDFD;
                  }
                }
                .line2 {
                  font-size: 0.16rem;
                  color: #FFFFFF;
                }
              }
              &:hover > .teacher-msg {
                display: block;
              }
            }

            .swiper-button-prev-new {
              width: 0.97rem;
              height: 0.97rem;
              background-image: url("~@IMG/left.png");
              background-size: cover;
              cursor: pointer;
              position: absolute;
              top: 0;
              bottom: 0;
              margin: auto;
              z-index: 100;
              left: -0.47rem;
            }
            .swiper-button-next-new {
              width: 0.97rem;
              height: 0.97rem;
              background-image: url("~@IMG/right.png");
              background-size: cover;
              cursor: pointer;
              position: absolute;
              top: 0;
              bottom: 0;
              margin: auto;
              z-index: 100;
              right: 0.15rem;
            }
          }
        }
      }
    }

    .page4 {
      background-image: url("~@IMG/newsBg.png");
      @include background-cover-center();
      .content-inner {
        width: 100%;
        height: 100%;
        padding: 2.3rem 1.09rem 1.49rem;
        display: flex;
        .left-area {
          width: 2.97rem;
          height: 100%;
          .left-inner {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            .click-area {
              .click-line {
                padding: 0.24rem 0;
                .line {
                  width: 0.3rem;
                  height: 0.04rem;
                  background-color: #8CD8BE;
                  display: inline-block;
                  vertical-align: middle;
                  margin-right: 0.3rem;
                }
                .text {
                  font-size: 0.18rem;
                  color: #8CD8BE;
                  cursor: pointer;
                }
              }
              .click-line-active {
                .line {
                  background-color: #FFFFFF;
                }
                .text {
                  color: #FFFFFF;
                }
              }
            }
          }
        }
        .right-area {
          flex: 1;
          .block-1 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          /deep/ .block {
            .el-timeline-item__timestamp {
              font-size: 0.15rem;
              color: #FFFFFF;
            }
            .el-timeline-item__content {
              width: 10.09rem;
              margin-bottom: 0.1rem;
              .to-read-more {
                font-size: 0.15rem;
                color: #FFFFFF;
                cursor: pointer;
              }
              .el-card {
                background: none;
                border-radius: 0.15rem;
                cursor: pointer;
                &:hover {
                  transform: scale(1.02, 1.02);
                  transition: transform .2s;
                }
                .el-card__body {
                  padding: 0.21rem 0.28rem;
                  .title, .read-more{
                    font-size: 0.15rem;
                    color: #FFFFFF;
                    line-height: 1.6;
                  }
                  .read-more {
                    text-align: right;
                  }
                }
              }
            }
          }
        }
      }
    }

    .page5 {
      background-image: url("~@IMG/page5-bg.png");
      @include background-cover-center();
      position: relative;
      .left {
        width: 9rem;
        height: 100%;
        background-color: #069163;
        opacity: 0.8;
        padding-top: 2.66rem;
        padding-left: 2.66rem;
        padding-right: 2.62rem;
        .text-content {
          .title1 {
            font-size: 0.72rem;
            color: #FFFFFF;
            font-weight: bold;
            padding-bottom: 0.36rem;
          }
          .title2 {
            font-size: 0.36rem;
            color: #FFFFFF;
            padding-bottom: 0.91rem;
          }
          .desc {
            font-size: 0.16rem;
            line-height: 0.25rem;
            color: #FFFFFF;
            padding-bottom: 1.69rem;
          }
          .line {
            span {
              display: inline-block;
              width: 0.9rem;
              border-bottom: 0.02rem solid #FFFFFF;
            }
          }
        }
      }
      .right {
        flex: 1;
        height: 100%;
      }
      .po-text-area {
        width: 11.19rem;
        height: 7rem;
        position: absolute;
        right: 1.01rem;
        top: 1.5rem;
        background-image: url("~@IMG/flo.png");
        background-size: 100% 100%;
        box-sizing: border-box;
        padding: 0.58rem 0 0.58rem 0.58rem;
        overflow: hidden;
        .content {
          display: flex;
          padding-bottom: 0.4rem;
          .content-1 {
            width: 50%;
            padding-right: 0.55rem;
            .icon-area {
              padding-bottom: 0.16rem;
              .qyjs {
                width: 0.43rem;
                height: 0.43rem;
                background-image: url("~@IMG/qyjs.png");
                background-size: 100% 100%;
              }
              .hxjs {
                width: 0.44rem;
                height: 0.46rem;
                background-image: url("~@IMG/hxjs.png");
                background-size: 100% 100%;
              }
              .qywh {
                width: 0.38rem;
                height: 0.42rem;
                background-image: url("~@IMG/qywh.png");
                background-size: 100% 100%;
              }
              .jyfw {
                width: 0.45rem;
                height: 0.44rem;
                background-image: url("~@IMG/jyfw.png");
                background-size: 100% 100%;
              }
            }
            .title {
              font-size: 0.16rem;
              color: #004033;
            }
            .line {
              span {
                display: inline-block;
                width: 0.3rem;
                border-bottom: 0.03rem solid #004033;
              }
            }
            .desc {
              font-size: 0.14rem;
              color: #004033;
              line-height: 1.6;
            }
          }
        }
      }
    }
    .page6 {
      flex-direction: column;
      .beian {
        height: 0.6rem;
        border-bottom: 0;
        text-align: center;
        line-height: 0.6rem;
        font-size: 0.16rem;
        color: #FFFFFF;
      }
      .about-us {
        flex: 1;
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
            padding-bottom: 0.6rem;
            line-height: 1.4;
          }
          .line {
            font-size: 0.18rem;
            color: #004033;
            padding-bottom: 0.5rem;
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
            top: 3.8rem;
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
  }
</style>
