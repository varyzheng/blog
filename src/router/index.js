import Vue from 'vue'
import Router from 'vue-router'
import index from '@/index/index'
import component from '@/components/develop-component'
import blog from '@/blog/index'
import basic from '@/blog/frontend/basic'

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
      path: '/component',
      name: 'component',
      component: component
    },
    {
      path: '/mirana',
      name: 'mirana',
      component: blog
    },
    {
      path: '/vary',
      name: 'vary',
      component: blog
    },
    {
      path: '/blog',
      name: 'blog',
      component: blog
    },
    {
      path: '/blog/frontend/basic',
      name: 'basic',
      component: basic
    },
    {
      path: '/blog/frontend/basic/:level1',
      name: 'basic-level1',
      component: basic
    },
    {
      path: '/blog/frontend/basic/:level1/:level2',
      name: 'basic-level2',
      component: basic
    },
    {
      path: '/blog/frontend/basic/:level1/:level2/:level3',
      name: 'basic-level3',
      component: basic
    }
  ]
})
