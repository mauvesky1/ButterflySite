<template>
  <div id="app">
    <h1 class="game-title">Scavenger Hunt</h1>
    <router-view @authenticated="setAuthenticated" v-on:add-new-parent="addNewParent" />
    <div id="nav" class="logout-btn">
      <router-link
        class="logout-link"
        v-if="authenticated"
        to="/login"
        v-on:click.native="logout()"
        replace
      >Logout</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      authenticated: false,
      mockAccount: [
        {
          username: "parent1",
          password: "password"
        },
        {
          username: "parent2",
          password: "northcoders"
        }
      ]
    };
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    },
    addNewParent(newParentUser) {
      this.mockAccount = [...this.mockAccount, newParentUser];
    }
  }
};
</script>

<style>
body {
  background-color: white;
}
h1 {
  padding: 0;
  margin-top: 0;
}
#app {
  margin: auto;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
}
.game-title {
  text-align: center;
  line-height: 4;
  font-family: "Megrim", cursive;
  font-size: 60px;
  margin: 0;
}
.logout-link {
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  background-color: black;
  color: white;
  padding: 14px 20px;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  width: 100%;
}
.logout-btn {
  margin-top: 50px;
}
</style>
