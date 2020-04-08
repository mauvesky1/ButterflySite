<template>
  <form>
    <label for="username">
      Username:
      <input type="text" name="username" v-model="username" />
    </label>

    <label for="avatar_picture">
      Avatar Picture:
      <router-link to="/profile/newchild/avatarimages">Pick an avatar image!</router-link>
    </label>
  </form>
</template>

<script>
export default {
  name: "CreateChildForm"
};
</script>