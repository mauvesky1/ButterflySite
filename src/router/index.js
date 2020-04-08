import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import ParentProfile from '../views/ParentProfile.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/profile',
    name: 'ParentProfile',
    component: ParentProfile,

    // component: () => import('../views/ParentProfile.vue'),
  },
  {
    path: '/childprofile/:username',
    name: 'ChildProfile',

    component: () => import('../views/ChildProfile.vue'),
  },
  {
    path: '/Profile/NewChild',
    name: 'CreateChildProfile',

    component: () => import('../views/CreateChildProfile.vue'),
  },
  {
    path: '/Profile/NewChild/AvatarImages',
    name: 'AvatarImages',
    component: () => import('../views/AvatarImages.vue'),
  },
  {
    path: '/ChildProfile/Collection',
    name: 'Collection',

    component: () => import('../views/Collection.vue'),
  },
  {
    path: '/ChildProfile/Butterflyhunt',
    name: 'Butterflyhunt',

    component: () => import('../views/Butterflyhunt.vue'),
  },
  {
    path: '/ChildProfile/Collection/flitzy',
    name: 'ButterflyProfile',

    component: () => import('../views/IndividualButterfly.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
