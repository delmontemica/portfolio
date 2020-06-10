import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import AOS from 'aos'
import 'aos/dist/aos.css'
import i18n from './i18n'

Vue.config.productionTip = false

new Vue({
  created () {
    AOS.init()
  },

  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
