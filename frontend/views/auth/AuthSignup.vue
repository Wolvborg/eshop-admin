<template>
  <div class="w-70">
    <p class="text-h4 black--text">Sign Up</p>

    <form class="mb-4">
      <v-row>
        <v-col sm="6">
          <v-text-field
            v-model="fName"
            hint="First Name"
            label="First Name"
            required
            :counter="10"
            :rules="[rules.required, rules.counter]"
          ></v-text-field>
        </v-col>

        <v-col sm="6">
          <v-text-field
            v-model="lName"
            hint="Last Name"
            label="Last Name"
            required
            :counter="10"
            :rules="[rules.required, rules.counter]"
          ></v-text-field>
        </v-col>
      </v-row>
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
  import ERole from '../../../typescript/enum/UserRolesEnum';
  import ISignUp from '../../../typescript/interface/SignupFormInterface';
  import axios, { AxiosResponse } from 'axios';
  import inputValidator from '../../mixin/input-validators';

  export default Vue.extend({
    mixins: [inputValidator],
    data: () => ({
      fName: '',
      lName: '',
      email: '',
      password: '',
      selectedUserRole: ERole.ADMIN,
      userGroups: [
        { label: 'Superadmin', id: ERole.SUPERADMIN },
        { label: 'Admin', id: ERole.ADMIN },
        { label: 'Staff', id: ERole.STAFF },
      ],
      showPassword: false,
    }),
    methods: {
      submit() {
        //TODO Implement form validation before sending request

        let userSignup: ISignUp = {
          firstName: this.fName,
          lastName: this.lName,
          email: this.email,
          password: this.password,
          role: this.selectedUserRole,
        };

        axios.post('/api/signup', userSignup).then((response: AxiosResponse) => {
          console.log(response.data);
        });
      },
    },
  });
</script>
