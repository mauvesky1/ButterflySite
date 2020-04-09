<template>
  <div class="home">
    <Header msg="Butterfly Scavenger Hunt" />
    <LoginForm v-if="!creatingAccount" />
    <CreateAccountForm v-if="creatingAccount" />
    <br />
    <button
      v-if="!creatingAccount"
      v-on:click="creatingAccount = !creatingAccount"
    >Create an Account</button>
  </div>
</template>

<script>
import LoginForm from "./LoginForm";
import Header from "./Header";
import CreateAccountForm from "./CreateAccountForm";

export default {
  name: "Home",
  components: {
    Header,
    LoginForm,
    CreateAccountForm
  },
  data: function() {
    return { creatingAccount: false };
  }
};
</script>
