<template>
  <div id="new-account-login">
    <h1>Create An Account</h1>
    <p>Username</p>
    <form @submit="addNewParentUser">
      <input
        type="text"
        name="username"
        v-model="input.username"
        placeholder="Enter username"
        required
      />
      <p>Password</p>
      <input
        type="password"
        name="password"
        v-model="input.password"
        placeholder="Enter password"
        required
      />
      <br />
      <button class="signUpBtn" type="submit" value="submit">
        Sign Up
      </button>

      <br />
    </form>
    <button class="backToLogIn">
      <router-link :to="{ name: 'login' }" class="backToLogIn"
        >Back to log in</router-link
      >
    </button>
  </div>
</template>

<script>
export default {
  name: 'CreateAccount',
  data() {
    return {
      input: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    addNewParentUser(event) {
      event.preventDefault()
      const newParentUser = {
        username: this.input.username,
        password: this.input.password
      }
      this.$emit('add-new-parent', newParentUser)
      ;(this.input.username = ''), (this.input.password = '')
    }
  }
}
</script>

<style>
#new-account-login {
  width: 400px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  margin-top: 10px;
  padding: 20px;
  text-align: center;
}
.signUpBtn {
  margin-top: 10px;
  margin-bottom: 20px;
  text-decoration: none;
  font-weight: bold;
  font-size: 15px;
}
.backToLogIn {
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 15px;
}
</style>
