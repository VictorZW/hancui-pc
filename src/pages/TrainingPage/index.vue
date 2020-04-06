<template>
  <div class="TrainingPage page-content">
    <div class="pic1"></div>
    <div class="pic2"></div>
    <div class="pic3"></div>
    <div class="pic4"></div>
    <div class="pic5"></div>
    <div class="pic6"></div>
    <div class="pic7"></div>
    <div class="pic8"></div>
    <div class="pic9"></div>
    <div class="pic10"></div>
    <div class="pic11"></div>
    <div class="pic12"></div>
    <div class="pic13">
      <div class="title">成为CRA注册芳疗师的<span>四大理由</span></div>
      <div class="content">
        <div class="left">
          <div class="line">不失业金饭碗</div>
          <div class="line">炙手可热朝阳产业</div>
          <div class="line">成为中医学及芳疗大师</div>
          <div class="line">学芳疗，懂生活</div>
        </div>
        <div class="right">
          <div class="banner"></div>
          <div class="text">
            大健康产业，以成为<br/>
            未来的就业风口
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .pic1 {
    width: 100%;
    height: 10.8rem;
    background-image: url("~@IMG/pic1.png");
    background-size: cover;
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
          &:hover {
            background-color: #FF7A1C;
          }
        }
      }
      .right {
        display: flex;
        .banner {
          width: 5.67rem;
          height: 100%;
          background-color: #15B175;
        }
        .text {
          width: 3.5rem;
          height: 100%;
          text-align: center;
          font-size: 0.24rem;
          color: #333333;
          background-color: #FFFFFF;
          font-weight: bold;
          padding-top: 1.01rem;
          line-height: 1.6;
        }
      }
    }
  }
</style>
