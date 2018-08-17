import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/components/home'
import signup from '@/components/register/signup'
import signin from '@/components/register/signin'
import authguard from './authguard'
import task from '@/components/task/task'
import comment from '@/components/task/comment'
import profile from '@/components/user/profile'
import option from '@/components/user/options'

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
      path: '/tasks',
      name: 'Task',
      component: task,
      beforeEnter: authguard
    },
    {
      path: '/comments',
      name: 'Comment',
      component: comment,
      beforeEnter: authguard
    },
    {
      path: '/profile',
      name: 'Profile',
      component: profile,
      beforeEnter: authguard
    },
    {
      path: '/options',
      name: 'options',
      component: option,
      beforeEnter: authguard
    },
    {
      path: '/signin',
      name: 'Signin',
      component: signin
    },
    {
      path: '/signup',
      name: 'Signup',
      component: signup
    },
    {
      path: '*',
      beforeEnter: authguard
    }

  ],
  mode: 'history'
})
