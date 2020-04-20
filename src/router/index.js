import Vue from "vue";
import VueRouter from "vue-router";
import LoginComponent from "../components/LoginForm.vue";
import ParentProfile from "../components/ParentProfile";
import CreateAccountComponent from "../components/CreateAccount.vue";
import ChildProfileComponent from "../components/ChildProfile.vue";
import CreateChildProfileComponent from "../components/CreateChildProfile.vue";
import ButterflyHuntComponent from "../components/Butterflyhunt.vue";
import CollectionComponent from "../components/Collection.vue";
import IndividualButterflyComponent from "../components/IndividualButterfly.vue";
import Instructions from "../components/Instructions.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: {
      name: "login",
    },
  },
  {
    path: "/login",
    name: "login",
    component: LoginComponent,
  },
  {
    path: "/createAccount",
    name: "createAccount",
    component: CreateAccountComponent,
  },
  {
    path: "/instructions",
    name: "instructions",
    component: Instructions,
  },
  {
    path: "/profile/:parentusername",
    name: "parentProfile",
    component: ParentProfile,
  },
  {
    path: "/profile/:parentusername/createChildAccount",
    name: "CreateChildProfile",
    component: CreateChildProfileComponent,
  },
  {
    path: "/:parentusername/:username",
    name: "ChildProfile",
    component: ChildProfileComponent,
  },
  {
    path: "/:parentusername/:username/butterflyhunt",
    name: "Butterflyhunt",
    component: ButterflyHuntComponent,
  },
  {
    path: "/:parentusername/:username/collection",
    name: "Collection",
    component: CollectionComponent,
  },
  {
    path: "/:parentusername/:username/collection/name",
    name: "IndividualButterfly",
    component: IndividualButterflyComponent,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
