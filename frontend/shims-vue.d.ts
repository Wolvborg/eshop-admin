import VueRouter, { Route, NavigationGuard } from 'vue-router';
import Vue from 'vue';

declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

declare module 'vue/types/vue' {
  interface VueConstructor {
    $router: VueRouter;
    $route: Route;
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    router?: VueRouter;
    beforeRouteEnter?: NavigationGuard;
    beforeRouteLeave?: NavigationGuard;
    beforeRouteUpdate?: NavigationGuard;
  }
}
