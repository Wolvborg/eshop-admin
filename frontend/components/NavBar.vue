<template>
  <v-app-bar elevation="4" app color="lime lighten-1" light>
    <v-app-bar-nav-icon @click="openDrawer"></v-app-bar-nav-icon>
    <v-toolbar-title>{{ title }}</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-menu bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-avatar color="white" size="48" v-bind="attrs" v-on="on">
          <span v-if="isLoggedIn && !hasAvtar" class="grey--text text-h5">VJ</span>
          <img
            v-if="isLoggedIn && hasAvtar"
            src="https://cdn.vuetifyjs.com/images/john.jpg"
            alt="John"
          />
          <v-icon v-if="!isLoggedIn" large color="grey lighten-1">account_circle</v-icon>
        </v-avatar>
      </template>

      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
<script lang="ts">
  import Vue from 'vue';
  export default Vue.extend({
    data: () => ({
      title: process.env.VUE_APP_TITLE,
      isLoggedIn: true,
      hasAvtar: false,
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    }),
    methods: {
      openDrawer() {
        this.$emit('open-drawer');
      },
    },
  });
</script>
<style lang="scss" scoped></style>
