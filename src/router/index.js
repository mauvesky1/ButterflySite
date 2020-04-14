import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginComponent from '../components/LoginForm.vue'
import ParentProfile from '../components/ParentProfile'
import CreateAccountComponent from '../components/CreateAccount.vue'
import ChildProfileComponent from '../components/ChildProfile.vue'
import CreateChildProfileComponent from '../components/CreateChildProfile.vue'
import ButterflyHuntComponent from '../components/Butterflyhunt.vue'
import CollectionComponent from '../components/Collection.vue'
import IndividualButterflyComponent from '../components/IndividualButterfly.vue'

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
  },
  {
    path: '/:username/butterflyhunt',
    name: 'Butterflyhunt',
    component: ButterflyHuntComponent
  },
  {
    path: '/:username/collection',
    name: 'Collection',
    component: CollectionComponent
  },
  {
    path: '/:username/collection/name',
    name: 'IndividualButterfly',
    component: IndividualButterflyComponent
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
