<template>
  <v-container>
    <v-card
      :loading="loading"
      class="mx-auto my-12 pb-5"
      min-width="320"
      max-width="800"
    >
      <h1 class="text-center">Update Profile</h1>
      <div style="margin: 40px">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                label="First Name"
                v-model="firstName"
                type="text"
                :counter="10"
                :rules="fnameRules"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-model="lastName"
                :rules="lnameRules"
                :counter="10"
                label="Last name"
                required
              ></v-text-field>
            </v-col>
          </v-row>

          <v-text-field
            v-model="userName"
            :rules="usernameRules"
            :counter="20"
            label="user name"
            required
          ></v-text-field>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
          <v-text-field
            label="password"
            v-model="password"
            :rules="passwordRules"
            type="password"
            required
          ></v-text-field>

          <v-checkbox
            v-model="checkbox"
            :rules="[(v) => !!v || 'You must agree to continue!']"
            label="Do you agree?"
            required
          ></v-checkbox>

          <v-btn color="success" class="mr-4" @click="updatevalue">
            Update
          </v-btn>
        </v-form>
      </div>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "updateProfile",

  data() {
    return {
      valid: true,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      userName: "",
      number: "",
      currentAccount: [],
    };
  },
  created() {
    this.currentAccount = JSON.parse(localStorage.getItem("currentAccount"));
    this.firstName = this.currentAccount.firstname;
    this.lastName = this.currentAccount.lastname;
    this.userName = this.currentAccount.username;
    this.email = this.currentAccount.email;
    this.password = this.currentAccount.password;
  },
  methods: {
    updatevalue() {
      this.values = JSON.parse(localStorage.getItem("values"));
      this.index = this.values.findIndex((x) => x.email == this.e);
      this.values[this.index] = {
        email: this.email,
        firstname: this.firstName,
        lastname: this.lastName,
        password: this.password,
        username: this.userName,

      };
      localStorage.setItem("values", JSON.stringify(this.values));
      localStorage.setItem("currentAccount", JSON.stringify(this.values[this.index]));
      this.$alert("successfully");
    },
  },
};
</script>
<style>
</style>