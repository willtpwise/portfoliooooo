import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import home from 'containers/home.vue'
import work from 'containers/work.vue'
import company from 'containers/company.vue'
import contact from 'containers/contact.vue'
import notFound from 'containers/not-found.vue'

// application routes
const routes = [
  { path: '/', name: 'home', component: home },
  { path: '/work', name: 'work', component: work },
  { path: '/work/:company', name: 'company', component: company },
  { path: '/contact', name: 'contact', component: contact },
  { path: '*', name: 'not-found', component: notFound }
]

// export router instance
export default new Router({
  mode: 'history',
  routes,
  linkActiveClass: 'is-active'
})
