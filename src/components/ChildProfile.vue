<template>
  <div>
    <h1>This is the child page</h1>
    <div id="nav">
      <router-link to="/profile/:username/collection">Butterfly Collection</router-link>
      <br />
      <router-link to="/profile/:username/butterflyhunt">Go Hunting</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChildProfile"
};
</script>


<style scoped>
</style>