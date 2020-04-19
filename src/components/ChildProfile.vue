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
    <div id="child-profile">
      <img :src="`${avatarUrl}`" class="avatar" />
      <h1 class="welcome-msg">
        Hi,
        {{ username }}!
      </h1>
      <p>Welcome to your personal Butterfly Hunt Profile!</p>
      <p>From here, you can either enter the game and Go Huntin' for butterflies, or you can simply sit back and admire your Butterfly Collection!</p>

      <div id="nav">
        <router-link :to="{ name: 'Collection' }" class="butterfly-collection">Butterfly Collection</router-link>
        <br />
        <router-link :to="{ name: 'Butterflyhunt' }" class="go-hunting">Go Hunting</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import { firestore } from "firebase";

export default {
  name: "ChildProfile",
  components: { Header },
  data() {
    return {
      username: "",
      avatarUrl: ""
    };
  },

  created() {
    {
      firestore()
        .collection(`parents/${window.localStorage.uid}/userProfiles/`)
        .get()
        .then(children => {
          console.log(children.docs);
          children.docs.forEach(child => {
            const childRef = child.lm.Ee.proto.mapValue.fields;

            if (childRef.username.stringValue === this.$route.params.username) {
              this.username = childRef.username.stringValue;
              this.avatarUrl = childRef.avatarUrl.stringValue;
            }
          });
        });
    }
  }
};
</script>

<style scoped>
.welcome-msg {
  font-family: Pacifico;
  color: #d95c26;
  font-size: 30pt;
}
@media screen and (max-width: 600px) {
  #child-profile {
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
  #child-profile {
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

.butterfly-collection {
  width: 150px;
  border: 1px solid #cccccc;
  background: #d95c26;
  border-radius: 30px;
  margin: auto;
  padding: 20px;
  text-align: center;
  display: grid;
  display: grid;
  text-decoration: none;
  color: white;
  font-weight: bold;
}

.go-hunting {
  width: 150px;
  border: 1px solid #cccccc;
  background: #d95c26;
  border-radius: 30px;
  margin: auto;
  padding: 20px;
  text-align: center;
  display: grid;
  text-decoration: none;
  color: white;
  font-weight: bold;
}

.back-link {
  text-decoration: none;
  color: white;
}

.back-btn {
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

.avatar {
  height: 8em;
  width: 8em;
  border-radius: 50%;
  margin: auto;
}
</style>
