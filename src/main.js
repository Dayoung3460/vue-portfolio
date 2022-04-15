import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from '@/lang'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  i18n,
}).$mount('#app')
