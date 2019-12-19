<template>
  <div>
    home-{{curDateTime()}}
    <div
      class="name"
      @click="clickDiv"
    >{{$store.state.name}}</div>
  </div>
</template>
<script>
import { curDateTime, sayHello } from '../common/func'
import { multiply } from '@/common/math'

export default {
  data() {
    return {
      count: 0
    }
  },
  created() {
    sayHello()
  },
  mounted() {
  },
  methods: {
    curDateTime,
    clickDiv() {
      let Random = import(/* webpackChunkName: "h_random" */ '@/common/random')
      let _ = import('lodash')
      console.log(_.join(['aaa', 'ccc'], 'bbbb'))
      console.log(multiply(Random.random(), Random.random()))
    },
  }
}
</script>

<style lang="scss">
.name {
  color: #50bfff;
  font-size: 18px;
  // font-weight: bold;
}
</style>