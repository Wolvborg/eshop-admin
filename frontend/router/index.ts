import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home';

const Auth = () => import(/* webpackChunkName: "auth" */ '../views/Auth');
const AuthLogin = () => import(/* webpackChunkName: "auth" */ '../views/auth/AuthLogin');
const AuthSignup = () => import(/* webpackChunkName: "auth" */ '../views/auth/AuthSignup');

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    children: [
      {
        path: 'signup',
        name: 'AuthLogin',
        component: AuthLogin,
        meta: { transition: 'slide-left' },
      },
      {
        path: 'login',
        name: 'AuthSignup',
        component: AuthSignup,
        meta: { transition: 'slide-right' },
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
