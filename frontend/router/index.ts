import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

const Auth = () =>
  import(
    /* webpackChunkName: "auth-page" */
    /* webpackMode: "lazy" */
    '../views/Auth.vue'
  );
const AuthLogin = () =>
  import(
    /* webpackChunkName: "auth-page" */
    /* webpackMode: "lazy" */
    '../views/auth/AuthLogin.vue'
  );
const AuthSignup = () =>
  import(
    /* webpackChunkName: "auth-page" */
    /* webpackMode: "lazy" */
    '../views/auth/AuthSignup.vue'
  );

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
      },
      {
        path: 'login',
        name: 'AuthSignup',
        component: AuthSignup,
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
