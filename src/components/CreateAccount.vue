<template>
  <div>
    <Header />
    <IntroMessage />
    <div id="new-account-login">
      <h1 class="signUp-title">Sign Up</h1>

      <form @submit="addNewParentUser">
        <label class="email-signup">Email</label>
        <input type="text" name="email" v-model="input.email" placeholder="Enter Email" required />

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
        >Passwords do not match!</p>

        <p
          class="signedUp-msg"
          v-if="input.signedUp && input.password === input.confirmPassword"
        >You have created an account!</p>
        <button class="signUpBtn" type="submit" v-on:click="clickHandler">Sign Up</button>
      </form>

      <button class="backToLogIn">
        <router-link :to="{ name: 'login' }" class="backToLogIn">Back to Log In</router-link>
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
        signedUp: false
      }
    };
  },
  components: {
    IntroMessage,
    Header
  },
  methods: {
    addNewParentUser(event) {
      event.preventDefault();
      const newParentUser = {
        email: this.input.email,
        username: this.input.username,
        password: this.input.password
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
      window.localStorage.setItem("username", this.input.username);
      const parentDoc = { username: window.localStorage.username };
      auth
        .createUserWithEmailAndPassword(this.input.email, this.input.password)
        .then(cred => {
          firestore()
            .collection("parents")
            .doc(cred.user.uid)
            .set(parentDoc);
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
    }
  }
};
</script>

<style>
#new-account-login {
  width: 400px;

  border: 4px solid #acd998;
  background-color: #e6e6fa;
  margin: auto;
  margin-top: 10px;
  padding: 20px;
  border-radius: 30px;
}
@media screen and (min-width: 600px) {
  #new-account-login {
    width: 500pt;
    border: 4px solid #acd998;
    background-color: #e6e6fa;
    padding: 20px;
    border-radius: 30px;
  }
}
@media screen and (max-width: 600px) {
  #new-account-login {
    width: 85%;
    border: 4px solid #acd998;
    background-color: #e6e6fa;
    padding: 20px;
    border-radius: 30px;
  }
  #login {
    width: 85%;
    border: 4px solid #acd998;
    background-color: #e6e6fa;
    border-radius: 30px;
    margin: auto;
    padding: 20px;
  }
}
/* 
@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) {
  #new-account-login {
    width: 330px;
    border: 1px solid #cccccc;
    margin: auto;
    margin-top: 10px;
    padding: 20px;
    color: white;
    border-radius: 30px;
    background-color: white;
  }
}

@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
  #new-account-login {
    width: 325px;
    border: 1px solid #cccccc;
    margin: auto;
    margin-top: 10px;
    padding: 20px;
    color: white;
    border-radius: 30px;
    background-color: white;
  }
}

@media only screen and (min-device-width: 375px) and (max-device-width: 667px) {
  #new-account-login {
    width: 320px;
    border: 1px solid #cccccc;
    margin: auto;
    margin-top: 10px;
    padding: 20px;
    color: white;
    border-radius: 30px;
    background-color: white;
  }
} */

.signUp-title {
  color: #d95c26;

  font-size: 2em;
  margin-top: 0;
  font-family: Pacifico;
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

  background-color: #d95c26;
  color: white;
  padding: 14px 20px;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  width: 75%;
  margin-top: 5px;
  margin-bottom: 20px;
}

.backToLogIn {
  text-decoration: none;
  text-decoration: none;
  font-size: 18px;

  background-color: #d95c26;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  width: 75%;
}
/* 
@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
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
    width: 65%;
  }
}

@media only screen and (min-device-width: 375px) and (max-device-width: 667px) {
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
    width: 70%;
  }
} */

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
