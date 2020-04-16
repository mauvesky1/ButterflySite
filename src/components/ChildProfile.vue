<template>
  <div>
    <Header />
    <button class="back-btn">
      <router-link
        v-if="$routerHistory.hasPrevious()"
        :to="{ path: $routerHistory.previous().path }"
        class="back-link"
        >Back to Parent Profile</router-link
      >
    </button>

    <h1>Welcome {{ $route.params.username }}</h1>
    <div id="nav">
      <router-link :to="{ name: 'Collection' }"
        >Butterfly Collection</router-link
      >
      <br />
      <router-link :to="{ name: 'Butterflyhunt' }">Go Hunting</router-link>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
export default {
  name: "ChildProfile",
  data() {
    return {
      //collection("parent/parentdoc/children").then(children =>{
      //   children.forEach(child =>{
      //     if(child.username ==)
      //   })
      // })
    };
  },
  components: { Header },
};
</script>

<style scoped>
.back-link {
  text-decoration: none;
  color: white;
}

.back-btn {
  font-weight: bold;
  font-size: 18px;
  background-color: black;
  color: white;
  padding: 14px 20px;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  margin-bottom: 40px;
}
</style>
