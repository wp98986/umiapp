// ref: https://umijs.org/config/
import router from './router';
// console.log(router);
export default {
  treeShaking: true,
  routes: [
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
  ],
  // plugins: [
  // ref: https://umijs.org/plugin/umi-plugin-react.html
  //   [
  //     'umi-plugin-react',
  //     {
  //       antd: true,
  //       dva: {
  //         hmr: true,
  //         dynamicImport: true,
  //       },
  //       dynamicImport: false,
  //       title: 'umiapp',
  //       dll: false,

  //       routes: {
  //         exclude: [/components\//],
  //       },
  //     },
  //   ],
  // ],
  antd: true,
  dva: {
    hmr: true,
    dynamicImport: true,
  },
  dynamicImport: false,
  title: 'umiapp',
  dll: false,

  routes: {
    exclude: [/components\//],
  },
  proxy: {
    '/site': {
      target: 'http://www.redstarbuy.com',
      changeOrigin: true,
      cookieDomainRewrite: 'localhost',
    },
    '/boss': {
      target: 'http://boss.redstarbuy.com',
      changeOrigin: true,
      cookieDomainRewrite: 'localhost',
    },
    '/supplier': {
      target: 'http://supplier.redstarbuy.com',
      changeOrigin: true,
      cookieDomainRewrite: 'localhost',
    },
  },
};
