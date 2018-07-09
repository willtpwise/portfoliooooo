import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Work from '@/pages/Work'
import Workplace from '@/pages/Workplace'
import Fun from '@/pages/Fun'
import Contact from '@/pages/Contact'
import Skills from '@/pages/Skills'

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
    },

    {
      path: '/fun/',
      name: 'Fun',
      component: Fun
    },

    {
      path: '/contact/',
      name: 'Contact',
      component: Contact
    },

    {
      path: '/skills/',
      name: 'Skills',
      component: Skills
    }
  ]
})
