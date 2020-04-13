import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginComponent from '../components/LoginForm.vue'
import ParentProfile from '../components/ParentProfile'
import CreateAccountComponent from '../components/CreateAccount.vue'
import ChildProfileComponent from '../components/ChildProfile.vue'
import CreateChildProfileComponent from '../components/CreateChildProfile.vue'

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
    path: '/profile/:username',
    name: 'parentProfile',
    component: ParentProfile
  },
  {
    path: '/profile/:username/createChildAccount',
    name: 'CreateChildProfile',
    component: CreateChildProfileComponent
  },
  {
    path: '/:username',
    name: 'ChildProfile',
    component: ChildProfileComponent
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
