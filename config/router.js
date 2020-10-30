export const routes = [
  {
    path: '/',
    component: '../layouts/index',
    routes: [
      { path: '/', redirect: '/life' },
      { path: '/life', component: '../pages/Life/index' },
      { path: '/koubei', component: '../pages/Koubei/index' },
      { path: '/friend', component: '../pages/Friend/indexfriend' },
      // { path: '/my', component: '../pages/My/index' },
    ],
  },
];
