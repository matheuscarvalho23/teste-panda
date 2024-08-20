import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import { messages } from 'vee-validate/dist/locale/en.json'
import 'vue-toast-notification/dist/theme-sugar.css'
import VueToast from 'vue-toast-notification'
import * as rules from 'vee-validate/dist/rules'
import router from '@/router/index'
import VueRouter from 'vue-router'
import store from '@/store/index'
import App from './App.vue'
import Vue from 'vue'

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)

Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule],
    message: messages[rule]
  })
})

Vue.config.productionTip = false
Vue.prototype.$store = store

Vue.use(VueRouter)
Vue.use(VueToast, {
  position: 'top-right',
  duration: 5000,
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')