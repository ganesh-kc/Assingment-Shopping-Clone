<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link to="/maincomponent">
          <a class="navbar-brand" href="#">Shopping</a>
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/cartcomponent">
                <a class="nav-link active" aria-current="page" href="#"
                  >Cart
                </a>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/wishcomponent">
                <a class="nav-link active" href="#">Wishlist</a>
              </router-link>
            </li>

            <li class="nav-item">
                <a class="nav-link active" href="#" @click="clearStorage">Logout</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, ref } from "vue";

import axios from "axios";
import router from "./routes/routers";
export default defineComponent({

  name: "App",

  setup() {

    let cart = ref([]);
    provide("cart", cart);

    let storeData = ref([]);
    const api = "data.json";
    axios.get(api).then((res) => {
      storeData.value = res.data;
     });

    provide("storeData", storeData);

    function clearStorage() {
      
      const userAuth = localStorage.getItem("username");
      if(userAuth) {
        localStorage.clear();
        router.push("/") 
      }
      else{
        alert(`Create your account first, All account has been removed`);
      }
      
    }

    return {
      cart,
      storeData,
      clearStorage
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
