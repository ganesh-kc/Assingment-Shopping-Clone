<template>
  <div class="container">
    <h2>Your Cart</h2>
    <h1>
      <label>Subtotal: ₹{{ total }} </label>
    </h1>

    <div v-if="cart.length > 0">
      <div class="itemcontainer" v-for="(items, index) in cart" :key="items.id">
        <img src="../assets/logo.png" alt="" />
        <p class="details">{{ items.itemname }}</p>
        <p class="details">{{ items.price }}</p>
        <input
          class="quantityOptions"
          type="number"
          value="1"
          min="1"
          @keydown="validateNumeric($event)"
          @change="changedQuantity($event, items)"
        />
        <button class="deletebtn danger" @click="deleteItem(index)">Remove</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, inject, watch } from "vue";

export default defineComponent({
  name: "CartComponent",

  setup() {
    let cart = ref<any>(inject("cart"));
    let total = ref<number>(0);

    function calculatePrice() {
       total.value = 0;
       let newData = [...cart.value];
       newData.forEach((priceTotal)=>{
         total.value += priceTotal.price * priceTotal.quantity
      })
    }
    watch(calculatePrice, () => {
        console.log(`Updating prices`);
    });

    function deleteItem(item: any) : void {
       let newData = [...cart.value];
       newData.splice(item,1);
       cart.value = newData;
    }

    function changedQuantity(event : any, item: any) : void {
      item.quantity = parseInt(event.target.value);
    }

    function validateNumeric(e: any) : void {
        ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();
    }

    return {
      cart,
      calculatePrice,
      deleteItem,
      changedQuantity,
      total,
      validateNumeric
    };
  },
});
</script>

<style scoped>
.quantityOptions {
  height: 30px;
  margin-top: 15px;
  width: 50px;
}
.details{
  height: 30px;
  margin-top: 15px;  
}
.itemcontainer {
  height: 70px;
  width: 100%;
  border: 1px solid black;
  display: flex;
  justify-content: space-around;
  margin: auto;
}
.deletebtn {
  height: 30px;
  margin-top: 15px;
}
</style>
