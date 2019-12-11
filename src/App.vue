<template>
  <div id="app">
    <h1>1111111111111</h1>
    <div class="wrap">
      <div class="item">aaaaa</div>
      <div class="item">bbbbb</div>
    </div>
    <img src="./asset/logo.png" alt="">
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
</style>