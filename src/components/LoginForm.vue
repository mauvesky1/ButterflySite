<template>
  <div id="login">
    <h1>Sign In</h1>
    <p class="username-login">Username</p>
    <input
      type="text"
      name="username"
      v-model="input.username"
      placeholder="Enter username"
      required
    />
    <p class="password-login">Password</p>
    <input
      type="password"
      name="password"
      v-model="input.password"
      placeholder="Enter password"
      required
    />
    <br />
    <button class="loginBtn" type="button" v-on:click="login()">Login</button>
    <br />
    <button>
      <router-link :to="{ name: 'createAccount' }" class="createAccountBtn"
        >Create An Account</router-link
      >
    </button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      input: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      for (let i = 0; i < this.$parent.mockAccount.length; i++) {
        if (this.input.username !== '' && this.input.password !== '') {
          if (
            this.input.username == this.$parent.mockAccount[i].username &&
            this.input.password == this.$parent.mockAccount[i].password
          ) {
            this.$emit('authenticated', true)
            this.$router.replace({ name: 'parentProfile' })
          } else {
            console.log('The username and / or password is incorrect')
          }
        } else {
          console.log('A username and password must be present')
        }
      }
    }
  }
}
</script>

<style scoped>
#login {
  width: 400px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  margin-top: 10px;
  padding: 20px;
  text-align: center;
}

.loginBtn {
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
  font-weight: bold;
  color: black;
  font-size: 15px;
}

.createAccountBtn {
  font-weight: bold;
  text-decoration: none;
  color: black;
  font-size: 15px;
}

.username-login {
  font-weight: bold;
}

.password-login {
  font-weight: bold;
}
</style>
