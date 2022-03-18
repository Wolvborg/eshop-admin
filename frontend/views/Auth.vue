<template>
  <div class="d-flex fill-height auth-container">
    <div class="red d-flex align-center justify-center auth-container__msg">
      <p class="text-h2 white--text">Welcome to Eshop Admin</p>
    </div>
    <div class="d-flex align-center justify-center auth-container__router-view">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  export default Vue.extend({
    data: () => ({
      superUserExist: false,
    }),
    beforeRouteEnter(to, from, next) {
      next((vm) => {
        if (!vm.superUserExist && vm.$route.name !== 'AuthSignup') {
          vm.$router.push({ name: 'AuthSignup' });
        }
      });
    },
  });
</script>

<style lang="scss" scoped>
  .auth-container {
    &__msg {
      flex: 1 1 60%;
    }

    &__router-view {
      flex: 1 1 40%;
    }
  }
</style>
