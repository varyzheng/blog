import Vue from 'vue'
import Router from 'vue-router'
import index from '@/index/index'
import mirana from '@/mirana/index'
import vary from '@/vary/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/mirana',
      name: 'mirana',
      component: mirana
    },
    {
      path: '/vary',
      name: 'vary',
      component: vary
    }
  ]
})
