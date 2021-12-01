<template>
  <v-app>
    

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default ({
  setup() {
    
  },
})
</script>
<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: white;
}
.navlinks{

padding-right: 20px;
text-decoration: none;
}

</style>

