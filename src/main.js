import Vue from 'vue'
import App from './App.vue'
import  from './router'
import './firebase'
import VueRouterBackButton from 'vue-router-back-button'

Vue.config.productionTip = false
Vue.use(VueRouterBackButton, { router })



new Vue({
  history: true,
  router,
  render: h => h(App)
}).$mount('#app')
