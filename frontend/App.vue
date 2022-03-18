<template>
  <v-app>
    <v-navigation-drawer v-if="!isAuthPage" temporary v-model="drawer" app>
      <!-- -->
    </v-navigation-drawer>

    <nav-bar v-if="!isAuthPage" @open-drawer="openDrawer" />

    <!-- Sizes your content based upon application components -->
    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer v-if="!isAuthPage" app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script lang="ts">
  import Vue from 'vue';
  import NavBar from './components/NavBar.vue';

  export default Vue.extend({
    name: 'App',
    components: { NavBar },

    data: () => ({
      drawer: false,
      isAuthPage: true,
    }),

    methods: {
      openDrawer() {
        this.drawer = true;
      },
    },
  });
</script>
