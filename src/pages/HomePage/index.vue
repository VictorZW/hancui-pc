<template>
  <div id="pureFullPage" class="home-page">
    <div class="page">
      <p>Page 1</p>
    </div>
    <div class="page">
      <p>Page 2</p>
    </div>
    <div class="page">
      <p>Page 3</p>
    </div>
  </div>
</template>

<script>
  import HelloWorld from '@/components/HelloWorld'

  export default {
    name: 'HomePage',
    data() {
      return {
        Msg: 'this is homepage'
      }
    },
    components: {
      HelloWorld
    },
    mounted() {
      // 创建全屏滚动实例，传入动画回调函数，并初始化
      new PureFullPage({
        delay: 1000,
        isShowNav: true
      })
    }
  }
</script>

<style lang="scss">
  html, body, #app {
    overflow: hidden;
    height: 100%;
  }
  .home-page {
    width: 100%;
    height: 100%;

    .page {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .page p {
      font-size: 66px;
    }

    .page:nth-child(1) {
      background: lightpink no-repeat center/cover;
    }

    .page:nth-child(2) {
      background: lightgreen no-repeat center/cover;
    }

    .page:nth-child(3) {
      background: lightskyblue no-repeat center/cover;
    }
  }
</style>
