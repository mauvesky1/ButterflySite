<template>
  <div>
    <Header />
    <h1 class="welcome-msg">Welcome {{ $route.params.parentusername }}</h1>

    <p v-for="child in childrenUsers" :key="child.username" class="child-username">
      <router-link
        :to="{ name: 'ChildProfile', params: { username: child.username } }"
        class="child-link"
      >
        <img :src="child.avatarUrl" class="avatar-url" />
        <br />
        {{ child.username }}
      </router-link>
    </p>

    <CreateChildProfile v-on:add-new-child="addNewChild" />
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
.welcome-msg {
  color: black;
  text-align: center;
}

.child-username {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 20px;
  text-decoration: none;
  margin-bottom: 20px;
  background-color: white;
  width: 180px;
  border-radius: 40px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 1px 7px 6px black;
}

.child-link {
  text-decoration: none;
  color: black;
}

.new-child-btn {
  margin-top: 50px;
}

.avatar-url {
  width: 100px;
}
</style>
