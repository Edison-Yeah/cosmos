import Vue from 'vue'
import Router from 'vue-router'
import siders from '@/components/siders'
import create from '@/components/create'
import sign from '@/components/sign'
import setting from '@/components/setting'
import add from '@/components/add'
import search from '@/components/search'
import sendTx from '@/components/sendTx'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/setting'
    },
    {
      path: '/',
      name: 'siders',
      component: siders,
      children:[
        {
          path: 'create',
          name: 'create',
          component: create
        },
        {
          path: 'sign',
          name: 'sign',
          component: sign
        },
        {
          path: 'setting',
          name: 'setting',
          component: setting
        },
        {
          path: 'add',
          name: 'add',
          component: add
        },
        {
          path: 'search',
          name: 'search',
          component: search
        },
        {
          path: 'sendTx',
          name: 'sendTx',
          component: sendTx
        }
      ]
    },
    
  ]
})
