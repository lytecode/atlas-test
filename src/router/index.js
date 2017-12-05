import Vue from 'vue'
import Router from 'vue-router'
import HelpPage from '@/pages/HelpPage'
import LoginPage from '@/pages/LoginPage'
import SignupPage from '@/pages/SignupPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/help',
      name: 'help',
      component: HelpPage
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupPage
    }
  ]
})
