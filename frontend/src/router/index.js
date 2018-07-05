import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Work from '@/pages/Work'
import Workplace from '@/pages/Workplace'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },

    {
      path: '/work/',
      name: 'Work',
      component: Work
    },

    {
      path: '/work/:company/',
      name: 'Workplace',
      component: Workplace
    }
  ]
})
