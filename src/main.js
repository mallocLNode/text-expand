import Vue from 'vue'
import App from './App.vue'
import { router } from './router/index.js'
import 'element-ui/lib/theme-chalk/index.css'
import './plugins/element.js'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
