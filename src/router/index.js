import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes.js';

Vue.use(Router);

const router = new Router({
  mode: 'hash',
  routes
});

router.beforeEach((to, from, next) => {
  console.log('beforeEach--', to, from);
  next();
});


router.afterEach((to, from) => {
  console.log('afterEach--', to, from);
});
export default router;