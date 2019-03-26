import Vue from 'vue'
import fastClick from 'fastclick'
import App from './App.vue'
import router from './router'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'

// styles在vue.config.js里配置了别名

Vue.config.productionTip = false
fastClick.attach(document.body)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
