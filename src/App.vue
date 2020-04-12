<template>
  <div id="app">
    <h1 class="game-title">Scavenger Hunt</h1>
    <div id="nav">
      <router-link
        v-if="authenticated"
        to="/login"
        v-on:click.native="logout()"
        replace
        >Logout</router-link
      >
    </div>
    <router-view
      @authenticated="setAuthenticated"
      v-on:add-new-parent="addNewParent"
    />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      authenticated: false,
      mockAccount: [
        {
          username: 'parent1',
          password: 'password'
        },
        {
          username: 'parent2',
          password: 'northcoders'
        }
      ]
    }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status
    },
    logout() {
      this.authenticated = false
    },
    addNewParent(newParentUser) {
      this.mockAccount = [...this.mockAccount, newParentUser]
    }
  }
}
</script>

<style>
body {
  background-color: whitesmoke;
}
h1 {
  padding: 0;
  margin-top: 0;
}
#app {
  margin: auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.game-title {
  text-align: center;
  line-height: 4;
}
</style>
