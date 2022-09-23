<template>
  <div class="container">
    <h2>Wishlist Items</h2>
    <br />

    <div class="maincontainer">
    <div class="itemContainer" v-for="(item,index) in newData" :key="item.id">
      <div class="card" style="width: 18rem" v-if="item.itemwishlist"  >
        <div class="card-body"  >
          <h5 class="card-title">{{ item.itemname }}</h5>
          <p class="card-text">Price: ₹{{ item.price }}</p>
          <button :disabled="item.itemwishlist ? false : true" @click="removefromwishlist(index)">Remove from Wishlist</button>
        </div>
      </div>
    </div>
    </div>
    
  </div>
</template>

<script lang="ts">
import { defineComponent,inject, ref } from "vue";

export default defineComponent({
  setup() {
    
    let storeData = ref<any>(inject("storeData"));

    let newData = [...storeData.value].filter((prod)=>{
            return prod.itemwishlist === true;
        })
    
    function removefromwishlist(index : number) {
        newData[index].itemwishlist = !newData[index].itemwishlist;
    }

    return {
      removefromwishlist,
      newData
    };
  },
});
</script>

<style scoped>
.itemContainer{
    display: flex;
    margin: 10px;
    flex-wrap: wrap;
    flex-direction: row;
}
.card{
    display: flex;
    flex-wrap: wrap;
}
.maincontainer{
    display: flex;
    flex-wrap: wrap;
}
</style>
