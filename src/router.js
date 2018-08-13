import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Work from './views/Work.vue'
import Method from './views/Method.vue'
import Case from './views/Case.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/work',
      name: 'work',
      component: Work
    },
    {
      path: '/method',
      name: 'method',
      component: Method
    },
    {
      path: '/case',
      name: 'case',
      component: Case
    }
  ]
})
