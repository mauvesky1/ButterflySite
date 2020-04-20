<template>
  <div id="app">
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
import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyB4tz8vEzmfsVvXs2hcKogzIdWECdNeQbc",
  authDomain: "backend-679e8.firebaseapp.com",
  databaseURL: "https://backend-679e8.firebaseio.com",
  projectId: "backend-679e8",
  storageBucket: "backend-679e8.appspot.com",
  messagingSenderId: "363772688197",
  appId: "1:363772688197:web:1b1ae070f6afdaf41eb02c",
  measurementId: "G-6FSQXQCNBN"
};
firebase.initializeApp(firebaseConfig);

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
  background-color: whitesmoke;
}

#app {
  margin: auto;
  font-family: "Mako", sans-serif;
  text-align: center;
}

.game-title {
  font-size: 60px;
  font-family: Megrim;
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
  /* margin: 0; */
}
@media (max-width: 470px) {
  .game-title {
    font-size: 50px;
    font-family: Megrim;
    margin-bottom: 70px;
    margin: 10px 0px 30px;
    padding: 0px;
  }
}
</style>
