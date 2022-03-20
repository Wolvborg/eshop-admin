<template>
  <v-app>
    <v-navigation-drawer v-if="isAuthenticated" temporary v-model="drawer" app>
      <!-- -->
    </v-navigation-drawer>

    <nav-bar v-if="isAuthenticated" @open-drawer="openDrawer" />

    <!-- Sizes your content based upon application components -->
    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer v-if="isAuthenticated" app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script lang="ts">
  import Vue from 'vue';
  import NavBar from './components/NavBar.vue';
  import { mapState } from 'vuex';

  export default Vue.extend({
    name: 'App',
    components: { NavBar },

    data: () => ({
      drawer: false,
      isAuthPage: true,
    }),

    computed: {
      ...mapState('global', ['isAuthenticated']),
    },

    methods: {
      openDrawer() {
        this.drawer = true;
      },
    },
  });
</script>
