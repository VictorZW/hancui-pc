<template>
  <div class="home-page">
    <div>{{ Msg }}</div>
    <HelloWorld/>
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
    }
  }
</script>
