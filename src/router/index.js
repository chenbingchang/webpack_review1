import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // component: resolve => { require(['../views/home.vue'], resolve) }
    component: () => import(/* webpackChunkName: "home" */ '../views/home.vue')
  },
  {
    path: '/mine',
    // component: resolve => { require(['../views/mine.vue'], resolve) }
    component: () => import(/* webpackChunkName: "mine" */ '../views/mine.vue')
  },
  {
    path: '/car',
    // component: resolve => { require(['../views/car.vue'], resolve) }
    component: () => import(/* webpackChunkName: "car" */ '../views/car.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router