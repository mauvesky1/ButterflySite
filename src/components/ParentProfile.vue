<template>
  <div>
    <Header />
    <div id="profile">
      <h1 class="welcome-msg">Welcome {{ $route.params.parentusername }}</h1>

      <p>Welcome to your Butterfly House Account!</p>
      <p>Here you can add as many player profiles as you like, or select an existing profile, to catch butterflies to your own collection!</p>
      <ul class="gridlist">
        <li v-for="child in childrenUsers" :key="child.username" class="child-username">
          <router-link
            :to="{ name: 'ChildProfile', params: { username: child.username, url: child.avatarUrl } }"
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
import CreateChildProfile from "./CreateChildProfile.vue";
import { firestore } from "firebase";

export default {
  name: "ParentProfile",
  components: {
    Header,
    CreateChildProfile
  },
  data() {
    return {
      childrenUsers: []
    };
  },
  created() {
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
</style>
