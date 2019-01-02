import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
/**
 * 添加  Vuetify 依赖
 */
import Vuetify from 'vuetify';
 
Vue.use(Vuetify)
import 'vuetify/dist/vuetify.min.css';
// vuetify 依赖的ICONS
import 'material-design-icons-iconfont/dist/material-design-icons.css';




Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
