<template>
  <form class="createaccountform">
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
    <label>
      Confirm Password:
      <input type="text" id="confirmpasswordinput" />
    </label>
    <br />
    <button>Submit</button>
  </form>
</template>

<script>
export default {
  name: "CreateAccountForm"
};
</script>