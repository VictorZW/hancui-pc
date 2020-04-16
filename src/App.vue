<template>
  <div id="app">
    <PageHeader/>
    <router-view/>
    <PageFooter
      v-if="hideFooter"
    />
    <div class="po-right">
      <div class="po-ra">
        <div class="block block1 Customer_service"></div>
        <div class="block block2"></div>
        <div class="block block3"></div>
        <div class="block block4" @click="backToTop"></div>
        <div class="code_img">
          <img src="~@IMG/code_img.png" alt="">
        </div>
        <div class="tel">
          <img src="~@IMG/tel.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import PageHeader from '@/components/PageHeader'
  import PageFooter from '@/components/PageFooter'
  export default {
    name: 'App',
    components: {
      PageHeader,
      PageFooter
    },
    computed: {
      hideHeader() {
        return !this.$route.meta.hideHeader
      },
      hideFooter() {
        return !this.$route.meta.hideFooter
      }
    },
    methods: {
      backToTop() {
        console.log('1111')
        console.log(this.$refs)
        this.$nextTick(() => {
          document.getElementById('pureFullPage').style.top = '0'
        })
        document.body.scrollTop = document.documentElement.scrollTop = 0
      }
    }
  }
</script>

<style lang="scss">
  @import 'assets/styles/app.scss';
  .po-right {
    position: fixed;
    bottom: 1.55rem;
    right: 0.12rem;
    z-index: 300;
    .po-ra {
      display: flex;
      flex-direction: column;
      position: relative;
    }
    .block {
      width: 0.7rem;
      height: 0.7rem;
      margin-bottom: 0.02rem;
      background-size: cover;
      cursor: pointer;
      box-shadow: 0 0.04rem 0.08rem 0 rgba(26, 152, 111, 0.27);
      border-radius: 0.05rem;
    }
    .block1 {
      background-image: url("~@IMG/r_icon1.png");
      &:hover {
        background-image: url("~@IMG/r_icon1_2.png");
      }
    }
    .block2 {
      background-image: url("~@IMG/r_icon2.png");
      &:hover {
        background-image: url("~@IMG/r_icon2_2.png");
      }
      &:hover~.tel {
        display: block;
      }
    }
    .block3 {
      background-image: url("~@IMG/r_icon3.png");
      &:hover {
        background-image: url("~@IMG/r_icon3_2.png");
      }
      &:hover~.code_img {
        display: block;
      }
    }
    .block4 {
      background-image: url("~@IMG/r_icon4.png");
      &:hover {
        background-image: url("~@IMG/r_icon4_2.png");
      }
    }
    .code_img {
      position: absolute;
      right: 0.73rem;
      top: 1.44rem;
      height: 2rem;
      display: none;
      img {
        height: 100%;
      }
    }
    .tel {
      position: absolute;
      right: 0.73rem;
      top: 0.73rem;
      height: 0.7rem;
      display: none;
      background: none;
      img {
        height: 100%;
      }
    }
  }
</style>
