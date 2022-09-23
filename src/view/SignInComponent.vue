<template>
  <div class="container">
    <br />
    <h3>SignIn</h3>

    <form>
      <div>
        <label>Username : </label>
        <input type="text" v-model="usercode" required />
      </div>

      <br />

      <div>
        <label>Password : </label>
        <input type="password" required v-model="passcode" />
      </div>
      <br />
      <button type="submit" @click.prevent="userValidate">Sign In</button>
    </form>
  </div>
</template>

<script lang="ts">
import router from "@/routes/routers";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "SignInComponent",
  setup() {

    let usercode = ref<string>();
    let passcode = ref<string>();
    let userAuth = ref<boolean>(false);

    function userValidate(): void {
      if (JSON.stringify(usercode.value) === localStorage.getItem("username") && JSON.stringify(passcode.value) === localStorage.getItem("password")) {
            userAuth.value = true;
        }

      if (userAuth.value) {
        localStorage.setItem("isAuth", JSON.stringify(true));
        router.push("/maincomponent");
      } else {
        alert(`Wrong Credentials`);
      }
    }

    return {
      usercode,
      passcode,
      userValidate,
    };
  },
});
</script>
<style scoped></style>
