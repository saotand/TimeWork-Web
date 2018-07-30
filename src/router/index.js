import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/views/home'
import logincomponent from '@/views/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: homepage
    },
    {
      path: '/',
      name: 'login',
      component: logincomponent
    }
  ]
})
