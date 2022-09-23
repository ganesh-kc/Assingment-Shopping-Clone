<template>
  <div>
    <div class="container"><br>
      <h3>SignUp</h3>

      <form>
        <div>
          <label>Username : </label>
          <input type="text" v-model="usercode" required />
        </div>

        <br />

        <div>
          <label>Password : </label>
          <input
            type="password"
            required
            v-model="passcode"
            @keyup="validatePassword"
          />
          <img v-if="auth" class="imagealt" src="../assets/images.jpeg" alt="Item-Image" >
          <div class="passtext">
            <p>
              * Minimum 8 characters <br />
              * Minimum 1 capital letter <br />
              * Minimum 1 lowercase letter <br />
              * Minimum 1 number from [0-9] <br />
            </p>
          </div>
        </div>
 <router-link to="/signin">
        <button
          type="submit"
          @click.prevent="setUser"
          :disabled="auth ? false : true"
        >
          Sign up
        </button>
 </router-link>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import router from "@/routes/routers";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "SignUpComponent",
  setup() {
    let usercode = ref<string>();
    let passcode = ref();
    const auth = ref<boolean>(false);
    
    function setUser() : void {
        localStorage.setItem("username",JSON.stringify(usercode.value));
        localStorage.setItem("password",JSON.stringify(passcode.value));
        router.push('/signin')
    }

    function validatePassword() : void {
      auth.value = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/.test(passcode.value);
    }

    return {
      setUser,
      validatePassword,
      passcode,
      usercode,
      auth
    };
  },
});
</script>

<style scoped>
.passtext {
  margin-left: 90px;
}
.imagealt{
    height: 33px;
}

</style>
