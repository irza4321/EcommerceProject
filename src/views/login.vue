<template >
<v-app>
  <v-card
    :loading="loading"
    class=" pb-5 formargin"
    min-width="320"
    max-width="800"

  >
    <h1 class="text-center mt-3">Login</h1>
    <div style="margin: 40px">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="username"
          :rules="usernameRules"
          :counter="20"
          label="user name"
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
          @click="logIn"
        >
          Login
        </v-btn>
      </v-form>
    </div>
  </v-card>
</v-app>
</template>
<script>
import { usernameRules, passwordRules } from "@/constants/constants.js";
export default {
  data: () => ({
    valid: true,
    usernameRules: usernameRules,
    passwordRules: passwordRules,

       username: "",
        password: "", 
        values: [],

    checkbox: false,
  }),

  methods: {
    logIn() {
      this.values = JSON.parse(localStorage.getItem("values")); 
       console.log(this.values);
        this.currentAccount = this.values.find((e) => { 
          return e.userName == this.userName && e.password == this.password; }); 
          if (this.currentAccount)
           { 
             (this.$store.state.authenticated = true),
             this.$router.push({ name: "dashboard" });
      localStorage.setItem("currentAccount", JSON.stringify(this.currentAccount));
    } else { this.$alert("Account does not exist"); }
  },
},
};
</script>

<style>
.formargin{
  margin: auto;
  margin-top: 120px;
}
</style>

