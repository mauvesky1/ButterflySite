<template>
  <div class="home">
    <HelloWorld msg="Butterfly House 2020" />
    <LoginForm v-if="!creatingAccount" />
    <CreateAccountForm v-if="creatingAccount" />
    <button
      v-if="!creatingAccount"
      v-on:click="creatingAccount = !creatingAccount"
    >Create a New Account</button>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from "@/components/LoginForm.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import CreateAccountForm from "@/components/CreateAccountForm.vue";
export default {
  name: "Home",
  components: {
    HelloWorld,
    LoginForm,
    CreateAccountForm
  },
  data: function() {
    return { creatingAccount: false };
  }
};
</script>
