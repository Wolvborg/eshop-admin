<template>
  <div class="w-70">
    <p class="text-h4 black--text">Login Up</p>

    <form class="mb-4">
      <v-text-field
        v-model="email"
        label="E-mail"
        hint="A mail will be sent to this email ID"
        required
        :rules="[rules.required, rules.email]"
      ></v-text-field>

      <v-text-field
        v-model="password"
        :append-icon="showPassword ? 'visibility_off' : 'visibility'"
        :type="showPassword ? 'text' : 'password'"
        name="input-10-1"
        label="Password"
        hint="At least 8 characters"
        counter
        @click:append="showPassword = !showPassword"
      ></v-text-field>

      <div class="mt-4">
        <v-btn color="primary" class="mr-4" @click="submit"> Log in </v-btn>
        <v-btn @click="clear"> Forgot your password </v-btn>
      </div>
    </form>

    <span
      >Don't have an Account ?
      <router-link :to="{ name: 'AuthSignup' }">Click Here</router-link></span
    >
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import inputValidator from '../../mixin/input-validators';

  export default Vue.extend({
    mixins: [inputValidator],

    data: () => ({
      email: '',
      password: '',
      showPassword: false,
    }),
    methods: {
      submit() {
        //TODO
      },
      clear() {
        //TODO
      },
    },
  });
</script>
