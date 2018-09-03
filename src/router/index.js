import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/login'},
    {path: '/login', component: resolve => require(['@/components/login.vue'], resolve),meta: { keepAlive: true }},
    { path: '/main', component: resolve => require(['@/components/main.vue'], resolve),
      children:[
        {path: '/', redirect: '/zhuye'},
        {path: '/me', component: resolve => require(['@/components/me/me.vue'], resolve),},
        {path: '/zhuye', component: resolve => require(['@/components/zhuye/zhuye.vue'], resolve)},
        {path: '/localtion', component: resolve => require(['@/components/localtion/localtion.vue'], resolve),},
      ]
    },
  ]
})
