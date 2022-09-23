<template>
  <div>
    <h1>Items</h1>
    
    <div class="maincontainer">
      <div class="card" style="width: 19rem" v-for="(item,index) in storeData" :key="item.id">
        <div class="card-body">
          <img src="../assets/logo.png" alt="" />
          <h5 class="card-title">{{ item.itemname }}</h5>
          <p class="card-text">Price: ₹{{ item.price }}</p>
          <a class="btn btn-primary" @click="addToCart(item)" >Add to Cart</a>
          <button :disabled="item.itemwishlist ? true : false" class="wishlist" @click="addToWishlist(index)">Add to Wishlist</button>
      
        </div>
      </div>
    </div>
<!-- <button @click="clearStorage">Clear Storage</button> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref} from "vue";

export default defineComponent({

  name: "MainComponent",
  setup() {

   let cart = ref<any>(inject("cart"));
   let buttonAuth = ref<boolean>(false);
   let storeData = ref<any>(inject("storeData"));
    
   function addToCart(itemList : any) {    
        cart.value.push(itemList);
    }

    function addToWishlist(index : number ) : void {
      let dummyData = [...storeData.value];
      dummyData[index].itemwishlist = !dummyData[index].itemwishlist;
      storeData.value = dummyData;
    }

    

    return {
      storeData,
      cart,
      addToCart,
      addToWishlist,
      buttonAuth,
      
    };
  },
});
</script>

<style scoped>
.wishlist{
  height: 36px;
  border-radius: 1px solid grey;
  margin-left: 10px;
  /* background-color: red; */
}
.maincontainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
h1 {
  text-align: center;
}
.btn {
  margin-left: 5px;
}
.card {
  margin: 10px;
  display: flex;
  flex-direction: row;
}
</style>
