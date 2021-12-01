<template >
<v-app class="bgclr">

  <v-card
    :loading="loading"
    class="mx-auto my-12 pb-5"
    min-width="320"
    max-width="800"
  >
    <h1 class="text-center">Signup</h1>
    <div style="margin: 40px">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              label="First Name"
              v-model="firstname"
              type="text"
              :counter="10"
              :rules="fnameRules"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              v-model="lastname"
              :rules="lnameRules"
              :counter="10"
              label="Last name"
              required
            ></v-text-field>
          </v-col>
        </v-row>

        <v-text-field
          v-model="username"
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

        <v-btn
          color="success"
          :disabled="!valid"
          class="mr-4"
          @click="StoreData"
        >
          Signup
        </v-btn>

        <div class="d-flex">
          <p >
            Already have an Account?<router-link class="links" to="/login">
              Login</router-link
            >
          </p>
        </div>
      </v-form>
    </div>
  </v-card>
</v-app>
</template>
<script>
import {
  fnameRules,
  lnameRules,
  usernameRules,
  emailRules,
  passwordRules,
} from "@/constants/constants.js";

export default {
  data: () => ({
    valid: true,
    fnameRules: fnameRules,
    lnameRules: lnameRules,
    usernameRules: usernameRules,
    emailRules: emailRules,
    passwordRules: passwordRules,

    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    values: [],

  }),

  created() {
    this.values = JSON.parse(localStorage.getItem("values") || "[]");
  },
  methods: {
     StoreData() {
      if (this.$refs.form.validate()) {
        let value = {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          password: this.password,
          username: this.username,
        };
        this.values.push(value);
        localStorage.setItem("values", JSON.stringify(this.values));
         this.$alert("created successfully.");
        this.$router.push({ name: "login" });
      } else {
        this.$alert("Error");
      }
    },  
       resetValidation() {      this.$refs.form.resetValidation();    },  
  },

  
};
</script>
<style>
.links{
text-decoration: none;
}


</style>