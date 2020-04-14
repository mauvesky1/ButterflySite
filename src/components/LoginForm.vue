<template>
  <div id="login">
    <h1 class="sign-in-title">Sign In</h1>
    <label class="email-login">Email</label>
    <input type="text" name="username" v-model="input.email" placeholder="Enter Email" required />
    <br />

    <label class="password-login">Password</label>
    <input
      type="password"
      name="password"
      v-model="input.password"
      placeholder="Enter Password"
      required
    />
    <br />
    <button class="login-btn" type="button" v-on:click="login()">Login</button>
    <br />
    <button class="create-account-btn">
      <router-link :to="{ name: 'createAccount' }" class="create-account-link">Create An Account</router-link>
    </button>
  </div>
</template>

<script>
import * as firebase from "firebase";
import "@firebase/auth";
export default {
  name: "Login",
  props: ["mockAccount"],

  data() {
    return {
      input: {
        email: "",
        password: ""
      }
    };
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
              params: { username: this.input.email }
            });
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        console.log("A username and password must be present");
      }
    }
  }
};
</script>

<style scoped>
#login {
  width: 400px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  border-radius: 30px;
  margin: auto;
  margin-top: 10px;
  padding: 20px;
  text-align: left;
}
.sign-in-title {
  text-align: center;
}

.login-btn {
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

.login-btn:hover {
  background-color: rgb(16, 71, 173);
  color: white;
}

.create-account-btn {
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  background-color: black;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  width: 100%;
}

.create-account-btn:hover {
  background-color: rgb(16, 71, 173);
  color: white;
}

.create-account-link {
  text-decoration: none;
  color: white;
}

.username-login {
  font-weight: bold;
  text-align: left;
}

.password-login {
  font-weight: bold;
}
</style>
