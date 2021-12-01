import Vue from "vue";
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

export const getProducts = ({ commit }) => {
    Vue.axios.get('https://fakestoreapi.com/products')
        .then(response => {
            commit('SET_PRODUCTS', response.data);
        })
}

export const getProduct = ({ commit }, productId) => {
    Vue.axios.get(`https://fakestoreapi.com/products/${productId}`)
        .then(response => {
            commit('SET_PRODUCT', response.data);
        })
}
//  Category fetching


export const getJewelerys = ({commit}) => {
    axios.get('https://fakestoreapi.com/products/category/jewelery')
    .then(response => {
        commit('SET_JEWELERY', response.data);
        console.log(response.data)
       
    })
  
}

export const addProductToCart = ({ commit }, { product, quantity }) => {
    commit("ADD_TO_CART", { product, quantity });
  
    axios.post("https://fakestoreapi.com/carts", {
      product_id: product.id,
      quantity,
    });
  };
  
  
  export const getCartItems = ({ commit }) => {
    axios.get(`https://fakestoreapi.com/carts`)
    .then(response => {
      commit('SET_CART', response.data);
    })
  };
  
  export const removeProductFromCart = ({ commit }, product) => {
    commit("REMOVE_PRODUCT_FROM_CART", product);
    axios.delete("https://fakestoreapi.com/carts/${product.id}");
  };
  export const clearCartItems = ({ commit }) => {
    commit("CLEAR_CART_ITEMS");
    axios.delete("https://fakestoreapi.com/carts");
  };
  