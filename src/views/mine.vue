<template>
  <div>
    mine-{{curDateTime()}}
  </div>
</template>
<script>
import { curDateTime, sayHello } from '../common/func'
import { multiply } from '@/common/math'

export default {
  created() {
    sayHello()
    console.log(multiply(3, 8))
  },
  methods: {
    curDateTime
  }
}
</script>

<style lang="scss">
  
</style>