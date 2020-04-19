<template>
  <div>
    <button
      class="create-child-link"
      v-on:click="childForm.showForm = !childForm.showForm"
    >Create Child Account</button>

    <form id="new-child-account-login" @submit="addNewChildUser" v-if="childForm.showForm">
      <label class="child-username">Username:</label>
      <input type="text" v-model="childForm.username" placeholder="Enter Username" required />

      <label class="avatar-title">Choose an avatar:</label>
      <input type="text" v-model="childForm.avatarUrl" placeholder="Enter avatar animal" required />

      <p v-for="animalType in avatarImages" :key="animalType.id" class="animal-type">
        <br />
        <img
          :src="animalType.imageUrl"
          :key="animalType.id"
          class="avatar-img"
          @click="childForm.avatarUrl = animalType.imageUrl "
        />
        <br />
        {{ animalType.animal }}
      </p>

      <p v-if="childForm.signedUp" class="new-account-msg">You have created an account!</p>

      <button class="sign-up-btn" type="submit" v-on:click="showForm()">Sign Up</button>
    </form>
  </div>
</template>

<script>
import { firestore } from "firebase";

export default {
  name: "CreateChildProfile",
  data() {
    return {
      childForm: {
        username: "",
        avatarUrl: "",
        signedUp: false,
        showForm: false
      },
      avatarImages: [
        {
          id: 1,
          animal: "Monkey",
          imageUrl:
            "https://i.pinimg.com/originals/b7/e0/38/b7e03818a217be00331cb18645351c62.jpg",
          chosen: false
        },
        {
          id: 2,
          animal: "Giraffe",
          imageUrl:
            "https://i.pinimg.com/600x315/56/12/94/56129403b7ca6ecd388cdff3d5b23978.jpg",
          chosen: false
        }
      ]
    };
  },
  methods: {
    addNewChildUser(event) {
      event.preventDefault();

      const docRef = firestore().doc(
        `parents/${window.localStorage.uid}/userProfiles/${this.childForm.username}`
      );

      docRef.set({
        username: this.childForm.username,
        avatarUrl: this.childForm.avatarUrl
      });

      const newChildUser = {
        username: this.childForm.username,
        avatarUrl: this.childForm.avatarUrl
      };

      this.$emit("add-new-child", newChildUser);
      this.childForm.username = "";
      this.childForm.avatarUrl = "";
    }
  },
  showForm() {
    this.childForm.username.length !== 0 &&
    this.childForm.avatarUrl.length !== 0
      ? (this.childForm.signedUp = !this.childForm.signedUp)
      : (this.childForm.signedUp = false);
  }
};
</script>

<style scoped>
#new-child-account-login
  @media
  only
  screen
  and
  (min-device-width: 414px)
  and
  (max-device-width: 736px)
  and(-webkit-min-device-pixel-ratio: 3) {
  #new-child-account-login {
    width: 300px;
    border: 1px solid #cccccc;
    margin: auto;
    margin-top: 10px;
    padding: 20px;
    color: white;
    border-radius: 30px;
    background-color: white;
    margin-bottom: 30px;
  }
}

@media only screen and (min-device-width: 375px) and (max-device-width: 667px) {
  #new-child-account-login {
    width: 300px;
    border: 1px solid #cccccc;
    margin: auto;
    margin-top: 10px;
    padding: 20px;
    color: white;
    border-radius: 30px;
    background-color: white;
    margin-bottom: 30px;
  }
}
.back-link {
  text-decoration: none;
  color: white;
}

.child-username {
  color: black;
  font-weight: bold;
}
.avatar-title {
  font-weight: bold;
  color: black;
  display: block;
}

.avatar-img {
  cursor: pointer;
  margin-right: 20px;
  margin-left: 20px;
  height: 6em;
  width: 6em;
  border-radius: 50%;
}

.animal-type {
  color: black;
  font-weight: bold;
  font-size: 20px;
}

.sign-up-btn {
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  background-color: #d95c26;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  width: 100%;
}

.new-account-msg {
  color: white;
  font-weight: bold;
  text-align: center;
  font-size: 20px;
  background-color: rgb(16, 71, 173);
  border-radius: 20px;
  padding: 12px 20px;
}

.create-child-link {
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  background-color: #d95c26;
  color: white;
  padding: 14px 20px;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  width: 250px;
  margin-bottom: 20px;
}

.chosen-animal {
  color: black;
}
</style>
