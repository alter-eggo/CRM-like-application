// default
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// Pages
import Home from '@/pages/Home'
import Users from '@/pages/Users'
import NotFound from '@/pages/404'
import NotifyPage from '@/pages/NotifyPage'

// Routering
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    },
    {
      path: '/notify',
      name: 'notifyPage',
      component: NotifyPage
    },
    {
      path: '/*',
      name: 'notFound',
      component: NotFound
    }
  ]
})
