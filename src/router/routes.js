const mergeMixin = (component) => {
  let mixins = component.mixins || [];
  // mixins = mixins.concat(poiMixin).concat(sdkMixin);
  component.mixins = mixins;
  return component;
};

const Main = (resolve) => {
  import('../components/main.vue').then((component) => {
    resolve(mergeMixin(component));
  });
}
const Index = (resolve) => {
  import('../components/index.vue').then((component) => {
    resolve(mergeMixin(component));
  });
}
let routes = [
  {
      path: '/',
      components: {
          default: Index,
          // loading: Loading,
      },
      redirect: '/main',
      children: [
        {
            path: '/main',
            component: Main,
            name: 'main',
            meta: {
                title: '主页面',
            }
        },
      ]
  }
];

export default routes;