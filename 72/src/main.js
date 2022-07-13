import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.config.devtools = true;
Vue.directive("focus",{
  inserted:function(el){
    el.focus()
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
