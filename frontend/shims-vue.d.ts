import VueRouter, { Route, NavigationGuard } from 'vue-router';
import Vue from 'vue';

declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}
