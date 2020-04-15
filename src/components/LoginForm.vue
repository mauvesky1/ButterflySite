<template>
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
      <button class="signIn-btn" type="button" v-on:click="login()">Sign In</button>
      <br />
      <button class="create-account-btn">
        <router-link :to="{ name: 'createAccount' }" class="create-account-link">Create An Account</router-link>
      </button>
    </form>
  </div>
</template>

<script>
import * as firebase from "firebase";
import "@firebase/auth";
export default {
  name: "Login",
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
@media (min-width: 500px) {
  #login {
    width: 400px;
    border: 1px solid #cccccc;
    background-color: #ffffff;
    border-radius: 30px;
    margin: auto;
    padding: 20px;
    text-align: left;
    display: grid;
  }
}

.signIn-title {
  color: grey;
  font-size: 35px;
  margin-top: 0;
}

.signIn-btn {
  text-decoration: none;
  font-size: 20px;
  background-color: black;
  color: white;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  width: 60%;
}

.create-account-btn {
  text-decoration: none;
  font-size: 18px;
  background-color: black;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  width: 60%;
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
  margin-top: 80px;
  margin: 0;
}
</style>
