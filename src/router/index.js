import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/components/home'
import signup from '@/components/register/signup'
import authguard from './authguard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: homepage,
      beforeEnter: authguard
    },
    {
      path: '/',
      name: 'Signup',
      component: signup
    }
  ],
  mode: 'history'
})
