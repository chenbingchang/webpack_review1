<template>
  <div>
    mine-{{curDateTime()}}
  </div>
</template>
<script>
import { curDateTime, sayHello } from '../common/func'

export default {
  created() {
    sayHello()
  },
  methods: {
    curDateTime
  }
}
</script>

<style lang="scss">
  
</style>