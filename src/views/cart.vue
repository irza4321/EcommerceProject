<template>
  <div>
      <div class="container">
        <!-- <div class="nav navbar-nav">
          <router-link to="/" class="nav-tem nav-link active">Home</router-link>
          <a class="nav-item nav-link" href="#">Product</a>
        </div> -->
        <div>
          <div class="dropdown open">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="triggerId"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {{ cartItemCount }} Cart
            </button>
          </div>
        </div>
      </div>
  </div>
</template>



<script>
export default {
  name: "AppHeader",
  components: {

  },
  computed: {
    cartItemCount() {
      return this.$store.getters.cartItemCount;
    }
  }
};
</script>