<template>
  <div>
    <Header />
    <BackButton />
    <HowToPlayButton />
    <LogOut />
    <div id="profile">
      <h1 class="welcome-msg" v-html="username"></h1>

      <p>Welcome to your Butterfly House Account!</p>
      <p>
        Here you can add as many player profiles as you like, or select an
        existing profile, to catch butterflies to your own collection!
      </p>
      <ul class="gridlist">
        <li v-for="child in childrenUsers" :key="child.username" class="child-username">
          <router-link
            :to="{
              name: 'ChildProfile',
              params: { username: child.username, url: child.avatarUrl },
            }"
            class="child-link"
          >
            <img :src="child.avatarUrl" class="avatar-url" />
            <br />
            {{ child.username }}
          </router-link>
        </li>
      </ul>

      <CreateChildProfile v-on:add-new-child="addNewChild" />
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import BackButton from "./BackButton";
import HowToPlayButton from "./HowToPlayButton";
import CreateChildProfile from "./CreateChildProfile.vue";
import LogOut from "./Logout";
import * as firebase from "firebase";
import { firestore } from "firebase";
import "@firebase/auth";

export default {
  name: "ParentProfile",
  components: {
    Header,
    BackButton,
    HowToPlayButton,
    CreateChildProfile,
    LogOut
  },
  data() {
    return {
      childrenUsers: [],
      username: ""
    };
  },
  created() {
    const auth = firebase.auth();

    auth.onAuthStateChanged(user => {
      if (user) {
        this.username = `Welcome ${user.displayName}`;
      }
    });

    firestore()
      .collection(`parents/${window.localStorage.uid}/userProfiles`)
      .get()
      .then(children => {
        children.docs.forEach(child => {
          this.childrenUsers.push({
            username: child.lm.Ee.proto.mapValue.fields.username.stringValue,
            avatarUrl: child.lm.Ee.proto.mapValue.fields.avatarUrl.stringValue
          });
        });
      });
  },
  methods: {
    addNewChild(newChildUser) {
      this.childrenUsers = [...this.childrenUsers, newChildUser];
    }
  }
};
</script>

<style scoped>
@media screen and (max-width: 600px) {
  #profile {
    width: 85%;
    border: 4px solid #acd998;
    background-color: #e6e6fa;
    border-radius: 30px;
    margin: auto;
    padding: 20px;
    text-align: center;
    display: grid;
    margin-bottom: 2%;
    box-shadow: 0 8px 6px -6px black;
  }
}
@media screen and (min-width: 601px) {
  #profile {
    width: 500pt;
    border: 4px solid #acd998;
    background-color: #e6e6fa;
    border-radius: 30px;
    margin: auto;
    padding: 20px;
    text-align: center;
    display: grid;
    margin-bottom: 2%;
    box-shadow: 0 8px 6px -6px black;
  }
}

.welcome-msg {
  font-family: Pacifico;
  color: #d95c26;
  text-align: center;
  font-size: 1.9em;
  width: 100%;
}

.child-username {
  color: black;
  font-weight: bold;
  font-size: 20px;
}

.child-link {
  text-decoration: none;
  color: black;
}

.new-child-btn {
  margin-top: 50px;
}

.avatar-url {
  cursor: pointer;
  margin-right: 20px;
  margin-left: 20px;
  height: 6em;
  width: 6em;
  border-radius: 50%;
  box-shadow: 1px 7px 6px black;
}

.top-link {
  text-decoration: none;
  color: white;
}

.top-btn {
  font-size: 18px;
  border-radius: 30px;

  border: 2px solid #cccccc;
  background: rgba(204, 204, 204, 0.2);
  padding: 14px 20px;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  margin-top: 30px;
  margin-bottom: 10px;
}
</style>
