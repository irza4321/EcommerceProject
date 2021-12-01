<template>
  <v-app id="inspire" >
    <!-- navigation bar -->
    <v-app-bar app color="light" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Ecommerce Store</v-toolbar-title>
      <v-spacer></v-spacer>
       <div id="nav">
      <router-link class="navlinks" to="/dashboard">Home</router-link>
      <router-link class="navlinks" to="/about">About</router-link>
      <router-link class="navlinks" to="/profile">Profile</router-link>
    </div>
    
     <v-spacer></v-spacer>
     <router-link class="navlinks" to="/updateProfile"> 
   <v-btn color="green" dark
        >Settings

      </v-btn>
     </router-link>
     <cart/>

      
    </v-app-bar>
   <!-- navigation drawer -->
        <v-navigation-drawer app v-model="drawer"  fixed temporary>
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://freevector-images.s3.amazonaws.com/uploads/vector/preview/36682/36682.png" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Categories</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
        
        <v-list-item two-line link>
          <v-list-item-avatar>
            <img src="https://thumbs.dreamstime.com/z/glittering-word-golden-color-white-background-jewelry-hand-lettered-text-jewelry-gold-112000836.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <router-link  class="links" to="/jewelery">
            <v-list-item-title>Jewelery</v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list-item>

        <v-list-item two-line link>
          <v-list-item-avatar>
            <img src="https://thumbs.dreamstime.com/b/electronics-gold-text-black-background-d-rendered-royalty-free-stock-picture-image-can-be-used-online-website-87914555.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <router-link class="links" to="/electronics">
            <v-list-item-title>Electronics</v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list-item>


        <v-list-item two-line link>
          <v-list-item-avatar>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi3G5YO5nrxLSgzVm6AUmJ4xRj0ZtKWCDaFQ&usqp=CAU" />
          </v-list-item-avatar>

          <v-list-item-content>
            <router-link class="links" to="/menClothing">
            <v-list-item-title>Mens Clothing</v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list-item>
        <v-list-item two-line link>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <router-link  class="links" to="/womanClothing">
            <v-list-item-title>Women Clothings</v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list-item>
        <v-spacer></v-spacer>
     <router-link class="navlinks" to="/"> 
   <v-btn color="primary " class="formargin" dark
        >logout
        <v-icon> mdi-logout</v-icon>

      </v-btn>
     </router-link>
      <!--  -->
    </v-navigation-drawer>
 <!-- product list -->
    <v-main>
      <v-container>
        <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
         
        <v-row class="pt-5">
          <v-col
            class="mb-5"
            v-for="product in products"
            :key="product.id"
            cols="4"
          >
            <v-card  max-width="374" height="500" >
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>

              <v-img  contain height="250" :src="product.image"></v-img>

              <v-card-text>
                <v-row align="center" class="mx-0">
                  <router-link
                    class="text black--text"
                    :to="{ name: 'product', params: { id: product.id } }"
                    >{{ product.title }}</router-link
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
                
      <v-divider class="mx-4"></v-divider>
                
               <div class="dropdown open">
          <v-btn class="ma-2" outlined color="purple" @click=" addToCart"> + Add to Cart </v-btn>
          </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <!-- footer -->
    <v-footer
    dark
    padless
    style="margin-top:100px"
  >
    <v-card
      flat
      tile
      class="dark lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>E-Commerce Store</strong>
      </v-card-text>
    </v-card>
  </v-footer>
  <!-- footer end -->
  </v-app>
</template>

<script>
import cart from "./cart.vue"
export default {
    name:'dashboard',
    components:{
      cart,
    },
    // fetch product 
  computed: {
    products() {
      return this.$store.state.products;
    },
    
  },
  mounted() {
      console.log(this);
       console.log("this");
    this.$store.dispatch("getProducts" );
  },
//  add to cart method
  methods:{
    addToCart() {
       this.$alert("Added Successfully");
      this.$store.dispatch("addProductToCart", {
        product: this.product,
        quantity: 1,
       
      });
    },
  },

//  carosal and footer script
  data: () => ({
    drawer: null,
    items: [
          {
            src: 'https://c.pxhere.com/images/8a/7f/65fbd5583a70d600f409b62eca79-1611896.jpg!d',
          },
          {
            src: 'https://cms.qz.com/wp-content/uploads/2016/10/gettyimages-164759083-cropped.jpg?quality=75&strip=all&w=1600&h=900',
          },
          {
            src: 'https://uniquekiosk.com/wp-content/uploads/2020/04/3-2-1-1024x683.jpg',
          },
        
        ],
        
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    
  }),
};
</script>
<style >
.iconclr{
    color: white;
}
.links{
text-decoration: none;
}
.btn{
  margin-top: 5%;

}
.formargin{
  margin-top: 280px;
  margin-left:20px;
}



</style>