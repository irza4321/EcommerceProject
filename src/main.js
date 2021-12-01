import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueSimpleAlert from "vue-simple-alert";
import BootstrapVue from 'bootstrap-vue'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
Vue.use(BootstrapVue)

Vue.use(VueSimpleAlert);

Vue.config.productionTip = false;

new Vue({

  vuetify,
  render: (h) => h(App),
  router: router,
  store: store,
}).$mount("#app");


