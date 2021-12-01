<template>
  <v-container class="text-center center">
  
    <div class="mt-10 d-flex space">
      <div>
        <v-img
          height="350" width="600"
          src="https://assets.weforum.org/article/image/YlqprZMVrDcJUXbdjc5rAP6uqoO_YT1xZNby3HjH_KM.jpg"
        >
        </v-img>
      </div>
      <div >
        
            <h1>About us</h1>
            <div class="mt-15 left" >
              
          This E-commerce provides custom injection molding solutions. The
          injection molder incorporates many best practices on its About Us page
          by including a company overview and history, video, downloadable
          resources, and certifications.
          The group boldly displays association memberships to build credibility
          with their audience. The company actively engages its audience to
          pursue the website further through related blog links.
             
            </div>
      </div>
    </div>
    <router-link class="links " to="/dashboard">
      <v-btn class="mt-10">Back</v-btn>
    </router-link>
  </v-container>
</template>

<script>
export default {
  name: "about",
};
</script>
<style>
.center {
  margin-top: 10%;
 
}
.space{
  justify-content: space-between;
}
.left{
  margin-left: 15px;
}

</style>