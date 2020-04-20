<template>
  <div class="TrainingPage page-content">
    <div class="pic1">
      <a href="https://hancui.sobot.com/chat/pc/v2/index.html?sysnum=4facc019323444a58732af25a1511448" target="_blank">
        <div class="click-btn-page1 Customer_service"></div>
      </a>
    </div>
    <div class="pic2"></div>
    <div class="pic3"></div>
    <div class="pic4"></div>
    <div class="pic5"></div>
    <div class="pic6"></div>
    <div class="pic7"></div>
    <div class="pic8">
      <a href="https://hancui.sobot.com/chat/pc/v2/index.html?sysnum=4facc019323444a58732af25a1511448" target="_blank">
        <div class="click-btn Customer_service">预约免费试听</div>
      </a>
    </div>
    <div class="pic9"></div>
    <div class="pic10">
      <a href="https://hancui.sobot.com/chat/pc/v2/index.html?sysnum=4facc019323444a58732af25a1511448" target="_blank">
        <div class="click-btn Customer_service">预约免费试听</div>
      </a>
    </div>
    <div class="pic11"></div>
    <div class="pic12">
      <a href="https://hancui.sobot.com/chat/pc/v2/index.html?sysnum=4facc019323444a58732af25a1511448" target="_blank">
        <div class="click-btn Customer_service">预约免费学习</div>
      </a>
    </div>
    <div class="pic13">
      <div class="title">成为CRA注册芳疗师的<span>四大理由</span></div>
      <div class="content">
        <div class="left">
          <div class="line"
               :class="[Number(whichTab) === 1 ? 'line-active' : '']"
               @mouseover="chooseTab(1)">不失业金饭碗</div>
          <div class="line"
               :class="[Number(whichTab) === 2 ? 'line-active' : '']"
               @mouseover="chooseTab(2)">炙手可热朝阳产业</div>
          <div class="line"
               :class="[Number(whichTab) === 3 ? 'line-active' : '']"
               @mouseover="chooseTab(3)">成为中医学及芳疗大师</div>
          <div class="line"
               :class="[Number(whichTab) === 4 ? 'line-active' : '']"
               @mouseover="chooseTab(4)">学芳疗，懂生活</div>
        </div>
        <div class="right" v-if="Number(whichTab) === 1">
          <div class="banner banner1"></div>
          <div class="text">
            多选就业岗位:<br/>
            芳疗保健师<br/>
            SPA水疗师<br/>
            美容师<br/>
            健康管理师<br/>
            ......
          </div>
        </div>
        <div class="right" v-if="Number(whichTab) === 2">
          <div class="banner banner2"></div>
          <div class="text">
            大健康产业，以成为<br/>
            未来的就业风口
          </div>
        </div>
        <div class="right" v-if="Number(whichTab) === 3">
          <div class="banner banner3"></div>
          <div class="text">
            通过系统的学习你将成为掌握中医学基础理论与西方精油技术运用的<span>稀缺人才</span>，为深入研究奠定良好的基础
          </div>
        </div>
        <div class="right" v-if="Number(whichTab) === 4">
          <div class="banner banner4"></div>
          <div class="text">
            呵护家人健康，修身养性<br/>
            提升生活品味
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TrainingPage',
    data() {
      return {
        whichTab: 1
      }
    },
    methods: {
      chooseTab(index) {
        this.whichTab = index
      }
    }
  }
</script>

<style lang="scss" scoped>
  .pic1 {
    width: 100%;
    height: 11.74rem;
    background-image: url("~@IMG/flpx.png");
    background-size: cover;
    position: relative;
    .click-btn-page1 {
      width: 3rem;
      height: 0.7rem;
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      bottom: 0.55rem;
      background-image: url("~@IMG/page1Btn.png");
      background-size: 100% 100%;
      cursor: pointer;
    }
  }
  .pic2 {
    width: 100%;
    height: 10.8rem;
    background-image: url("~@IMG/pic2.png");
    background-size: cover;
  }
  .pic3 {
    width: 100%;
    height: 10.8rem;
    background-image: url("~@IMG/pic3.png");
    background-size: cover;
  }
  .pic4 {
    width: 100%;
    height: 13.53rem;
    background-image: url("~@IMG/pic4.png");
    background-size: cover;
  }
  .pic5 {
    width: 100%;
    height: 10.8rem;
    background-image: url("~@IMG/pic5.png");
    background-size: cover;
  }
  .pic6 {
    width: 100%;
    height: 10.8rem;
    background-image: url("~@IMG/pic6.png");
    background-size: cover;
  }
  .pic7 {
    width: 100%;
    height: 10.8rem;
    background-image: url("~@IMG/pic7.png");
    background-size: cover;
  }
  .pic8 {
    width: 100%;
    height: 8.82rem;
    background-image: url("~@IMG/pic8.png");
    background-size: cover;
    position: relative;
  }
  .pic9 {
    width: 100%;
    height: 10.1rem;
    background-image: url("~@IMG/pic9.png");
    background-size: cover;
  }
  .pic10 {
    width: 100%;
    height: 7.06rem;
    background-image: url("~@IMG/pic10.png");
    background-size: cover;
    position: relative;
  }
  .pic11 {
    width: 100%;
    height: 7.76rem;
    background-image: url("~@IMG/pic11.png");
    background-size: cover;
  }
  .pic12 {
    width: 100%;
    height: 10.8rem;
    background-image: url("~@IMG/pic12.png");
    background-size: cover;
    position: relative;
  }
  .pic13 {
    width: 100%;
    height: 7rem;
    background-image: url("~@IMG/pic13.png");
    background-size: cover;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .title {
      font-size: 0.48rem;
      color: #333333;
      font-weight: bold;
      text-align: center;
      padding-top: 0.71rem;
      span {
        color: #1CB283;
      }
    }
    .content {
      display: flex;
      justify-content: space-between;
      padding-top: 0.64rem;
      .left {
        width: 3.26rem;
        margin-right: 0.07rem;
        border-top: 0.01rem solid rgba(0, 0, 0, 1);
        .line {
          width: 100%;
          height: 1.1rem;
          line-height: 1.1rem;
          background-color: #15B175;
          text-align: center;
          font-size: 0.24rem;
          color: #FFFFFF;
          cursor: pointer;
          border-left: 0.01rem solid rgba(0, 0, 0, 1);
          border-right: 0.01rem solid rgba(0, 0, 0, 1);
          border-bottom: 0.01rem solid rgba(0, 0, 0, 1);
        }
        .line-active {
          background-color: #FF7A1C;
        }
      }
      .right {
        display: flex;
        .banner {
          width: 5.67rem;
          height: 100%;
        }
        .banner1 {
          background-image: url("~@IMG/p3-banner.jpg");
          background-size: 100% 100%;
        }
        .banner2 {
          background-image: url("~@IMG/p3-banner2.jpeg");
          background-size: 100% 100%;
        }
        .banner3 {
          background-image: url("~@IMG/p3-banner3.jpeg");
          background-size: 100% 100%;
        }
        .banner4 {
          background-image: url("~@IMG/p3-banner4.jpeg");
          background-size: 100% 100%;
        }
        .text {
          width: 3.5rem;
          height: 100%;
          text-align: center;
          font-size: 0.24rem;
          color: #333333;
          background-color: #FFFFFF;
          font-weight: bold;
          padding: 1.01rem 0.46rem 0;
          line-height: 1.6;
          opacity: 0.7;
          span {
            color: #15B175;
          }
        }
      }
    }
  }
  .click-btn {
    position: absolute;
    bottom: 0.99rem;
    left: 0;
    right: 0;
    margin: auto;
    width: 3rem;
    height: 0.7rem;
    background: #FF7A1C;
    font-size: 0.24rem;
    color: #FFFFFF;
    text-align: center;
    line-height: 0.7rem;
    box-shadow: 0 0.02rem 0.07rem 0 rgba(156, 65, 0, 0.42);
    border-radius: 0.05rem;
    cursor: pointer;
  }
</style>
