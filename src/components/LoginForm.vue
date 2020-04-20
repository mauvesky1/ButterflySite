<template>
  <div>
    <Header />
    <IntroMessage />
    <div id="login">
      <form class="login-form">
        <h1 class="signIn-title">Sign In</h1>

        <label class="email-login">Email</label>
        <input
          type="text"
          name="username"
          v-model="input.email"
          placeholder="Enter Email"
          class="email-input"
          required
        />
        <br />

        <label class="password-login">Password</label>
        <input
          type="password"
          name="password"
          v-model="input.password"
          placeholder="Enter Password"
          class="password-input"
          required
        />
        <br />
        <p v-if="input.error" class="error">{{input.error}}</p>
        <button class="signIn-btn" type="button" v-on:click="login()">Sign In</button>
        <br />
        <button class="create-account-btn">
          <router-link :to="{ name: 'createAccount' }" class="create-account-link">Create An Account</router-link>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import IntroMessage from "./IntroMessage.vue";
import * as firebase from "firebase";
import "@firebase/auth";

export default {
  name: "Login",
  data() {
    return {
      input: {
        email: "",
        password: "",
        error: false
      }
    };
  },
  components: {
    IntroMessage,
    Header
  },
  methods: {
    login() {
      const auth = firebase.auth();

      if (this.input.email !== "" && this.input.password !== "") {
        auth
          .signInWithEmailAndPassword(this.input.email, this.input.password)
          .then(cred => {
            window.localStorage.setItem("uid", cred.user.uid);

            this.$emit("authenticated", true);
            this.$router.replace({
              name: "parentProfile",
              params: { parentusername: this.input.email }
            });
          })
          .catch(err => {
            this.input.error = err.message;
          });
      } else {
        this.input.error = "An email and password must be present";
      }
    }
  }
};
</script>

<style scoped>
@font-face {
  font-family: "Pacifico";
  font-style: normal;
  font-weight: 400;
  src: url("../fonts/pacifico-v16-latin-regular.eot"); /* IE9 Compat Modes */
  src: local("Pacifico Regular"), local("Pacifico-Regular"),
    url("../fonts/pacifico-v16-latin-regular.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */ url("../fonts/pacifico-v16-latin-regular.woff2")
      format("woff2"),
    /* Super Modern Browsers */ url("../fonts/pacifico-v16-latin-regular.woff")
      format("woff"),
    /* Modern Browsers */ url("../fonts/pacifico-v16-latin-regular.ttf")
      format("truetype"),
    /* Safari, Android, iOS */
      url("../fonts/pacifico-v16-latin-regular.svg#Pacifico") format("svg"); /* Legacy iOS */
}

@media screen and (min-width: 600px) {
  #login {
    width: 500pt;
    border: 4px solid #acd998;
    background-color: #e6e6fa;
    border-radius: 30px;
    margin: auto;
    padding: 20px;
    text-align: left;
    display: grid;
  }
}
@media screen and (max-width: 600px) {
  #login {
    width: 85%;
    border: 4px solid #acd998;
    background-color: #e6e6fa;
    border-radius: 30px;
    margin: auto;
    padding: 20px;
    text-align: left;
    display: grid;
  }
}

.error {
  color: red;
  font-weight: bold;
}

.signIn-title {
  color: #d95c26;
  font-size: 2em;
  margin-top: 0;
  font-family: Pacifico;
}

.signIn-btn {
  text-decoration: none;
  font-size: 20px;
  background-color: #d95c26;
  color: white;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  width: 75%;
}

.create-account-btn {
  text-decoration: none;
  font-size: 18px;
  background-color: #d95c26;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  width: 75%;
}

.create-account-link {
  text-decoration: none;
  color: white;
}

.email-login {
  font-size: 18px;
}

.email-input {
  box-shadow: 4px 5px 5px grey;
  margin-bottom: 30px;
}

.password-login {
  font-size: 18px;
}

.password-input {
  box-shadow: 4px 5px 5px grey;
}

.login-form {
  text-align: center;
  margin: 0;
}
</style>
