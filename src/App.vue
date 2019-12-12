<template>
  <div id="app">
    <div class="wrap">
      <router-link to="/">home</router-link>
      <router-link to="/mine">mine</router-link>
      <router-link to="/car">car</router-link>
    </div>
    <img src="./asset/logo.png" alt="" class="mini">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    async fun1() {
      let result = await Promise.resolve('aa')
      return 'tewe'
    }
  },
  mounted() {
    let arr = ['aaaa', 'bbb', 'ccc', 'dd', 'ee']

    for(let item of arr) {
      console.log(item)
    }
    console.log(this.fun1())
    
  },
}
</script>

<style lang="scss">
$main_color: #f00;

  h1 {
    color: $main_color;
  }

  .wrap {
    display: flex;
  }

  .mini {
    width: 16px;
    height: 16px;
  }
</style>