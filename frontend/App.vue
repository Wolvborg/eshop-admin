<template>
  <v-app>
    <v-navigation-drawer temporary v-model="drawer" app>
      <!-- -->
    </v-navigation-drawer>

    <nav-bar @open-drawer="openDrawer" />

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
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
    }),

    methods: {
      openDrawer() {
        this.drawer = true;
      },
    },
  });
</script>
