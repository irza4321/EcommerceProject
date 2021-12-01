<template>
  <v-container >
    <v-row class="text-center">
      <v-col>
        <h1>Profile</h1>

        <v-container style="width:70%">
          <v-card class="mt-15">
            
          <v-row >
            <v-col cols="6" sm="6" xsm="6" lg="6" md="6" >  <strong> First Name: </strong>  </v-col>
            <v-col cols="6" sm="6" xsm="6" lg="6" md="6"  v-model="firstname"> {{firstname}} </v-col>
          </v-row>
          <v-row>
            <v-col cols="6" sm="6" xsm="6" lg="6" md="6" >  <strong> Last Name:  </strong>  </v-col>
            <v-col cols="6" sm="6" xsm="6" lg="6" md="6"  v-model="lastname"> {{lastname}} </v-col>
          </v-row>
          <v-row>
            <v-col cols="6" sm="6" xsm="6" lg="6" md="6">  <strong> User Name:  </strong>  </v-col>
            <v-col cols="6" sm="6" xsm="6" lg="6" md="6"  v-model="username"> {{username}} </v-col>
          </v-row>
          <v-row>
            <v-col cols="6" sm="6" xsm="6" lg="6" md="6" >  <strong> Email: </strong>  </v-col>
            <v-col cols="6" sm="6" xsm="6" lg="6" md="6"  v-model="email"> {{email}} </v-col>
          </v-row>
          <v-row>
            <v-col cols="6" sm="6" xsm="6" lg="6" md="6" >  <strong> Password: </strong>  </v-col>
            <v-col cols="6" sm="6" xsm="6" lg="6" md="6"  v-model="password"> {{password}} </v-col>
          </v-row>
          </v-card>
        </v-container>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Profile",

  data() {
    return {
      valid: true,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      userName: "",
      currentAccount: [],
    };
  },

  created() {
    this.currentAccount = JSON.parse(localStorage.getItem("currentAccount"));
    // console.log(this.currentAccount);

    this.firstname = this.currentAccount.firstname;
    this.lastname = this.currentAccount.lastname;
    this.username = this.currentAccount.username;
    this.email = this.currentAccount.email;
    this.password = this.currentAccount.password;
  
  },
  
};
</script>
