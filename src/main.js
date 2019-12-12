import Vue from 'vue';
import App from './App.vue';
import router from './router'
import store from './store'

/**
 * 这里有个坑
 * 正常情况下，VUE实例是不能用template，只能使用render来代替
 * 原因是import Vue from 'vue';导入的vue是编译版本的，要导入编译+运行版本才能使用template，
 */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})

