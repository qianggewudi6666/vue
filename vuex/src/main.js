import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Axios from "axios"

Vue.config.productionTip = false
Vue.prototype.$axios=Axios

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
