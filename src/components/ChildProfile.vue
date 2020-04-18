<template>
  <div>
    <Header />
    <button class="back-btn">
      <router-link
        v-if="$routerHistory.hasPrevious()"
        :to="{ path: $routerHistory.previous().path }"
        class="back-link"
      >Back to Parent Profile</router-link>
    </button>

    <h1 class="welcome-msg">
      Welcome
      {{ $route.params.username }}
    </h1>
    <div id="nav">
      <router-link :to="{ name: 'Collection' }" class="butterfly-collection">Butterfly Collection</router-link>
      <br />
      <router-link :to="{ name: 'Butterflyhunt' }" class="go-hunting">Go Hunting</router-link>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
export default {
  name: "ChildProfile",
  components: { Header }
};
</script>

<style scoped>
.welcome-msg {
  font-family: Pacifico;
  color: white;
  font-size: 50px;
}

.butterfly-collection {
  width: 150px;
  border: 1px solid #cccccc;
  background: rgba(204, 204, 204, 0.2);
  border-radius: 30px;
  margin: auto;
  padding: 20px;
  text-align: center;
  display: grid;
  text-decoration: none;
  color: black;
  font-weight: bold;
}

.go-hunting {
  width: 150px;
  border: 1px solid #cccccc;
  background: rgba(204, 204, 204, 0.2);
  border-radius: 30px;
  margin: auto;
  padding: 20px;
  text-align: center;
  display: grid;
  text-decoration: none;
  color: black;
  font-weight: bold;
}

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
  margin-top: 30px;
  margin-bottom: 10px;
}
</style>
