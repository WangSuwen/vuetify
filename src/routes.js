const mergeMixin = (component) => {
  let mixins = component.mixins || [];
  // mixins = mixins.concat(poiMixin).concat(sdkMixin);
  component.mixins = mixins;
  return component;
};

const Home = (resolve) => {
  import('./pages/Home.vue').then((component) => {
    resolve(mergeMixin(component));
  });
}
const About = (resolve) => {
  import('./pages/About.vue').then((component) => {
    resolve(mergeMixin(component));
  });
}
const CustomTheme = (resolve) => {
  import('./pages/CustomTheme.vue').then((component) => {
    resolve(mergeMixin(component));
  });
}
const Scroll = (resolve) => {
  import('./pages/Scroll.vue').then((component) => {
    resolve(mergeMixin(component));
  });
}
let routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/custom-theme',
    name: 'customTheme',
    component: CustomTheme
  },
  {
    path: '/scroll',
    name: 'scroll',
    component: Scroll
  }
];

export default routes;