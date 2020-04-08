<template>
  <form class="loginform">
    <label>
      Username:
      <input type="text" id="usernameinput" />
    </label>
    <br />
    <label>
      Password:
      <input type="text" id="passwordinput" />
    </label>
    <br />
    <button>Submit</button>
  </form>
</template>

<script>
export default {
  name: "LoginForm"
};
</script>