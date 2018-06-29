import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import signup from '@/components/user/signup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/signup',
      name: 'Signup',
      component: signup
    }
  ],
  mode: 'history'
})
