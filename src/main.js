import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from '@/lang'

Vue.config.productionTip = false

import common from "@/commonjs/common"
Vue.use(common)

new Vue({
  render: h => h(App),
  router,
  i18n,
}).$mount('#app')
