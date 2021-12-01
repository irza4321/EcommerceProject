<template>
  <v-app>
    <v-container>
    <v-row class="pt-5">
          <v-col
            class="mb-5"
             v-for="jewelery in jewelerys" :key='jewelery.id'
            cols="4"
          >
    <v-card >
      <v-img contain height="250" :src="jewelery.image">
      </v-img>
      <v-card-title>{{ jewelery.title }}</v-card-title>

      <v-card-text>
        <v-row align="center" class="mx-0"> </v-row>

        <div class="my-4 text-subtitle-1">{{ jewelery.price }}</div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>
      <v-btn class="ma-2" outlined color="purple" @click=" addToCart"> + Add to Cart </v-btn>

    </v-card>
          </v-col>
    </v-row>
    </v-container>
  </v-app>
</template>


<script>
import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios,axios)

export default {
  name: "jewelery",
  // props: ["jewelery"],
  data: () => {
    return {
      loading: false,
      selection: 1,
     jewelerys:[],
    };
  },
 
  mounted(){
    Vue.axios.get("https://fakestoreapi.com/products/category/jewelery")
    .then((response) => {
      this.jewelerys =response.data,
      console.log( response.data)

    })
  },
   methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
     addToCart() {
       this.$alert("Added Successfully");
      this.$store.dispatch("addProductToCart", {
        product: this.product,
        quantity: 1,
       
      });
    },
  },
};
</script>

<style scoped>

</style>