<template>
  <div>
    home-{{curDateTime()}}
    <div class="name">{{$store.state.name}}</div>
  </div>
</template>
<script>
import { curDateTime, sayHello } from '../common/func'

export default {
  data() {
    return {
      
    }
  },
  created() {
    sayHello()
  },
  methods: {
    curDateTime
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