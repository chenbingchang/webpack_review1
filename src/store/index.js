import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    name: '用户协议',
    count: 33,
    pageSize: 12,

  }
})

export default store