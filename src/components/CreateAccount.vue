<template>
  <div id="new-account-login">
    <h1 class="createAccount-title">Create An Account</h1>

    <form @submit="addNewParentUser">
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
      <button
        class="signUpBtn"
        type="submit"
        v-on:click="
          input.username.length !== 0 && input.password.length !== 0 && input.confirmPassword.length !== 0
            ? (input.signedUp = !input.signedUp)
            : (input.signedUp = false)
        "
      >Sign Up</button>
    </form>

    <button class="backToLogIn">
      <router-link :to="{ name: 'login' }" class="backToLogIn">Back to log in</router-link>
    </button>
  </div>
</template>

<script>
export default {
  name: "CreateAccount",
  data() {
    return {
      input: {
        username: "",
        password: "",
        confirmPassword: "",
        signedUp: false
      }
    };
  },
  methods: {
    addNewParentUser(event) {
      event.preventDefault();
      const newParentUser = {
        username: this.input.username,
        password: this.input.password
      };

      if (this.input.password === this.input.confirmPassword) {
        this.$emit("add-new-parent", newParentUser);
      }
      (this.input.username = ""),
        (this.input.password = ""),
        (this.input.confirmPassword = "");
    }
  }
};
</script>

<style>
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
.valid-password {
  color: black;
}
.invalid-password {
  color: black;
}
.createAccount-title {
  text-align: center;
  color: black;
}
.signUpBtn {
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
.signUpBtn:hover {
  background-color: rgb(16, 71, 173);
  color: white;
}
.backToLogIn {
  text-decoration: none;
  color: black;
  font-weight: bold;
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
.backToLogIn:hover {
  background-color: rgb(16, 71, 173);
  color: white;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 40px;
}

.username-signup {
  font-weight: bold;
  color: black;
}

.password-signup {
  font-weight: bold;
  color: black;
}
.confirm-password {
  color: black;
  font-weight: bold;
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
