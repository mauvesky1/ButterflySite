<template>
  <div>
    <Header />
    <IntroMessage />
    <div id="new-account-login">
      <h1 class="signUp-title">Sign Up</h1>

      <form @submit="addNewParentUser">
        <label class="email-signup">Email</label>
        <input
          type="text"
          name="email"
          v-model="input.email"
          placeholder="Enter Email"
          required
        />

        <label class="username-signup">Username</label>
        <input
          type="text"
          name="username"
          v-model="input.username"
          placeholder="Enter Username"
          required
        />

        <label class="password-signup">Password</label>
        <input
          type="password"
          name="password"
          v-model="input.password"
          placeholder="Enter Password"
          required
        />

        <label class="confirm-password">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          v-model="input.confirmPassword"
          placeholder="Confirm Password"
          required
        />

        <br />
        <p
          v-if="input.password !== input.confirmPassword"
          class="invalid-password"
        >
          Passwords do not match!
        </p>

        <p
          class="signedUp-msg"
          v-if="input.signedUp && input.password === input.confirmPassword"
        >
          You have created an account!
        </p>
        <button class="signUpBtn" type="submit" v-on:click="clickHandler">
          Sign Up
        </button>
      </form>

      <button class="backToLogIn">
        <router-link :to="{ name: 'login' }" class="backToLogIn"
          >Back to Log In</router-link
        >
      </button>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import IntroMessage from "./IntroMessage";
import * as firebase from "firebase";
import "@firebase/auth";
import { firestore } from "firebase";

export default {
  name: "CreateAccount",
  data() {
    return {
      input: {
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
        signedUp: false,
      },
    };
  },
  components: {
    IntroMessage,
    Header,
  },
  methods: {
    addNewParentUser(event) {
      event.preventDefault();
      const newParentUser = {
        email: this.input.email,
        username: this.input.username,
        password: this.input.password,
      };

      if (this.input.password === this.input.confirmPassword) {
        this.$emit("add-new-parent", newParentUser);
      }
      (this.input.email = ""),
        (this.input.username = ""),
        (this.input.password = ""),
        (this.input.confirmPassword = "");
    },
    clickHandler() {
      const auth = firebase.auth();

      auth.createUserWithEmailAndPassword(
        this.input.email,
        this.input.password
      );

      firestore()
        .collection("parents")
        .add({ username: this.input.username })
        .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
          window.localStorage.setItem("parentDoc", docRef.id);
        });

      if (
        this.input.username.length !== 0 &&
        this.input.password.length !== 0 &&
        this.input.confirmPassword.length !== 0
      ) {
        this.input.signedUp = !this.input.signedUp;
      } else {
        this.input.signedUp = false;
      }
    },
  },
};
</script>

<style>
@media (min-width: 500px) {
  #new-account-login {
    width: 400px;
    border: 1px solid #cccccc;
    margin: auto;
    margin-top: 10px;
    padding: 20px;
    color: white;
    border-radius: 30px;
    background-color: white;
  }
}

.signUp-title {
  color: grey;
  font-size: 35px;
}

.valid-password {
  color: black;
}
.invalid-password {
  color: red;
  font-weight: bold;
}

.signUpBtn {
  text-decoration: none;
  font-size: 18px;
  background-color: black;
  color: white;
  padding: 14px 20px;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  width: 50%;
  margin-top: 5px;
  margin-bottom: 20px;
}

.backToLogIn {
  text-decoration: none;
  color: black;
  text-decoration: none;
  font-size: 18px;
  background-color: black;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  width: 50%;
}

input[type="text"],
input[type="password"] {
  width: 95%;
  padding: 15px 20px;
  margin: 8px 0;
  margin-bottom: 25px;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 40px;
  box-shadow: 4px 5px 5px grey;
}

.email-signup {
  color: black;
  font-size: 18px;
}

.username-signup {
  color: black;
  font-size: 18px;
}

.password-signup {
  color: black;
  font-size: 18px;
}

.confirm-password {
  color: black;
  font-size: 18px;
}

.signedUp-msg {
  color: white;
  font-weight: bold;
  text-align: center;
  font-size: 20px;
  background-color: rgb(16, 71, 173);
  border-radius: 20px;
  padding: 12px 20px;
}
</style>
