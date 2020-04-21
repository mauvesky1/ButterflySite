<template>
  <div>
    <div id="app">
      <router-view @authenticated="authe" />
    </div>
    <Header />
    <nav id="navbar">
      <BackButton class="navbutt" />
      <HowToPlayButton class="navbutt" />
      <LogOut class="navbutt" />
    </nav>
    <div id="toptext">
      <p>Press your device's back button to return to your profile page.</p>
    </div>
  </div>
</template>

<script>
import * as firebase from "firebase";
import { firestore } from "firebase";
import Header from "./Header.vue";
import LogOut from "./Logout";
import HowToPlayButton from "./HowToPlayButton";
import BackButton from "./BackButton";

export default {
  name: "Collection",
  data() {
    return {
      authenticated: undefined
    };
  },
  components: { Header, LogOut, BackButton, HowToPlayButton },
  created() {
    const queryArr = Object.entries(this.$route.query);

    const username = this.$route.query.username;
    const increment = firebase.firestore.FieldValue.increment(1);
    queryArr.forEach(entry => {
      if (entry[0] !== "username") {
        firestore()
          .doc(`parents/${window.localStorage.uid}/userProfiles/${username}`)
          .update({ Jamie: increment });
      }
    });
  },
  methods: {
    authe(status) {
      console.log(status);
      this.authenticated = status;
      console.log(this.authenticated, "HERER");
    }
  }
};
</script>

<style>
.butterfly-collection-title {
  font-family: Pacifico;
  color: #d95c26;
  font-size: 2.5em;
}

.back-btn {
  margin-top: 10px;
  margin-bottom: 10px;
}

.butterfly-name {
  font-family: Pacifico;
  color: white;
}

.butterfly-type {
  font-family: Pacifico;
  color: black;
  margin: 0;
}

.bfly {
  width: 100%;
}
.uncaught {
  filter: brightness(0.1);
}

.butterfly-details {
  width: 300px;
  border: 1px solid #cccccc;
  background: rgba(204, 204, 204, 0.2);
  border-radius: 30px;
  margin: auto;
  padding: 20px;
  text-align: center;
}
.hidden {
  display: none;
}
@media screen and (min-width: 769px) {
  #navbar {
    margin: auto;
    display: grid;
    width: 500pt;
    grid-template-columns: 1fr 1fr 1fr;
    list-style: none;
    column-count: 3;
    column-gap: 1em;
    row-gap: 1em;
    padding: 1em;
    justify-items: center;
  }
  .navbutt {
    width: 100%;
    height: auto;
  }
  #toptext {
    width: 500pt;
    border: 4px solid #acd998;
    background-color: #e6e6fa;
    border-radius: 30px;
    margin: auto;
    padding: 20px;
    text-align: center;
    display: grid;
    box-shadow: 0 8px 6px -6px black;
  }
  .gridlist {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    list-style: none;
    column-count: 3;
    column-gap: 1em;
    row-gap: 1em;
    padding: 1em;
  }
}

@media screen and (max-width: 768px) {
  #navbar {
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    list-style: none;
    column-count: 3;
    column-gap: 1em;
    row-gap: 1em;
    padding: 1em;
  }
  .navbutt {
    width: 100%;
    height: auto;
  }
  #toptext {
    width: 85%;
    border: 4px solid #acd998;
    background-color: #e6e6fa;
    border-radius: 30px;
    margin: auto;
    padding: 20px;
    text-align: center;
    display: grid;
    box-shadow: 0 8px 6px -6px black;
  }
  .gridlist {
    width: 100%;
    padding: 1em;
    list-style: none;
    text-align: center;
  }
  .butterfly-details {
    width: 85%;
  }
}
</style>
