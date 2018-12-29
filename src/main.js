import Vue from 'vue';
// import App from './App.vue'
import router from './router/index.js';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import './style/main.styl';
 
Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  // render: h => h(App),
  router
}).$mount('#app')
