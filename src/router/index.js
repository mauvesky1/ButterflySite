import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import ParentProfile from '../components/ParentProfile.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/:username',
    name: 'ParentProfile',
    component: ParentProfile,

    // component: () => import('../components/ParentProfile.vue'),
  },
  {
    path: '/profile/:username',
    name: 'ChildProfile',

    component: () => import('../components/ChildProfile.vue'),
  },
  {
    path: '/:username/NewChild',
    name: 'CreateChildProfile',

    component: () => import('../components/CreateChildProfile.vue'),
  },
  {
    path: '/profile/newchild/avatarimages',
    name: 'AvatarImages',
    component: () => import('../components/AvatarImages.vue'),
  },
  {
    path: '/profile/:username/collection',
    name: 'Collection',

    component: () => import('../components/Collection.vue'),
  },
  {
    path: '/profile/:username/butterflyhunt',
    name: 'Butterflyhunt',

    component: () => import('../components/Butterflyhunt.vue'),
  },
  {
    path: '/profile/:username/Collection/flitzy',
    name: 'ButterflyProfile',

    component: () => import('../components/IndividualButterfly.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
