<template>
<div class="col-3 mt-3" v-if="product">
     <v-card  max-width="400" >
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>

              <v-img height="250" :src="product.image"></v-img>

              <v-card-text >
                <v-row align="center" class="mx-0">
                  <v-card-title
                    class="text black--text"
                    >{{ product.title }}</v-card-title
                  >
                  
                  <v-rating
                    :value="4.5"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating>

                  <div class="grey--text ms-4">4.5 (413)</div> </v-row
                ><br />

                <strong class="text-center"
                  >${{ product.price }}</strong>
                <div>
                 {{product.description}}.
                </div>
                <v-divider class="mx-4"></v-divider>
                 <v-btn class="ma-2" outlined color="purple" @click=" addToCart">
      + Add to Cart
    </v-btn>
              </v-card-text>
            </v-card>
</div>
    
</template>
<script>
export default {
   props:['id'],
    computed: {
    product() {
      return this.$store.state.product;
    },
    },
    mounted() {
    this.$store.dispatch("getProduct", this.id );
  },
  method:{
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
