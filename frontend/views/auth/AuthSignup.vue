<template>
  <div class="w-70">
    <p class="text-h4 black--text">Sign Up</p>

    <form class="mb-4">
      <v-text-field
        v-model="name"
        :counter="15"
        hint="First Name + Last Name"
        label="Name"
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        label="E-mail"
        hint="A mail will be sent to this email ID"
        required
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

      <v-radio-group v-model="selectedUserRole">
        <template v-slot:label>
          <div>Type of <strong class="primary--text">User</strong> you want to create</div>
        </template>
        <v-radio
          v-for="radio in userGroups"
          :key="radio.id"
          :label="radio.label"
          :value="radio.id"
        ></v-radio>
      </v-radio-group>

      <v-btn color="primary" class="mr-4" @click="submit"> Create an Account </v-btn>
    </form>

    <span>Already a user ? <router-link :to="{ name: 'AuthLogin' }">Click Here</router-link></span>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  export default Vue.extend({
    data: () => ({
      name: '',
      email: '',
      password: '',
      selectedUserRole: 1,
      userGroups: [
        { label: 'Superadmin', id: 0 },
        { label: 'Admin', id: 1 },
        { label: 'Staff', id: 2 },
      ],
      showPassword: false,
    }),
    methods: {
      submit() {
        console.log('onSubmit');
      },
    },
  });
</script>
