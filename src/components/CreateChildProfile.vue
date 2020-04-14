<template>
  <div>
    <form id="new-child-account-login" @submit="addNewChildUser">
      <label class="child-username">Username</label>
      <input type="text" v-model="childForm.username" placeholder="Enter Username" required />

      <label class="avatar-title">Choose an avatar:</label>
      <input type="text" v-model="childForm.avatarUrl" placeholder="Enter avatar animal" required />

      <p v-for="animalType in avatarImages" :key="animalType.id" class="animal-type">
        <br />
        <img
          :src="animalType.imageUrl"
          :key="animalType.id"
          class="avatar-img"
          @click="childForm.avatarUrl = animalType.imageUrl"
        />
        <br />
        {{ animalType.animal }}
      </p>

      <p v-if="childForm.signedUp" class="new-account-msg">You have created an account!</p>

      <button
        class="sign-up-btn"
        type="submit"
        v-on:click="
          childForm.username.length !== 0 && childForm.avatarUrl.length !== 0
            ? (childForm.signedUp = !childForm.signedUp)
            : (childForm.signedUp = false)
        "
      >Sign Up</button>
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
        signedUp: false
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
      console.log(window.localStorage.uid, "the right one");

      const docRef = firestore().doc(
        `parents/${window.localStorage.uid}/userProfiles/${this.childForm.username}`
      );

      docRef.set({ username: this.childForm.username });

      const newChildUser = {
        username: this.childForm.username,
        avatarUrl: this.childForm.avatarUrl
      };

      this.$emit("add-new-child", newChildUser);
      (this.childForm.username = ""), (this.childForm.avatarUrl = "");
    }
  }
};
</script>

<style scoped>
#new-child-account-login {
  width: 400px;
  border: 1px solid #cccccc;
  margin: auto;
  margin-top: 10px;
  padding: 20px;
  color: white;
  border-radius: 30px;
  background-color: white;
  margin-bottom: 30px;
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
  width: 150px;
  cursor: pointer;
  margin-right: 20px;
  margin-left: 20px;
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
  background-color: black;
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
</style>
