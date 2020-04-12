import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginComponent from '../components/LoginForm.vue'
import ParentProfile from '../components/ParentProfile'
import CreateAccountComponent from '../components/CreateAccount.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {
      name: 'login'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginComponent
  },
  {
    path: '/createAccount',
    name: 'createAccount',
    component: CreateAccountComponent
  },
  {
    path: '/profile',
    name: 'parentProfile',
    component: ParentProfile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
