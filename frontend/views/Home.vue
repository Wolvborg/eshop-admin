<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />

    <h1 class="text-3xl font-bold underline">Hello world!</h1>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

  export default Vue.extend({
    name: 'Home',
    components: {
      HelloWorld,
    },
  });
</script>
