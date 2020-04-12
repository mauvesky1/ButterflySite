<template>
  <div>
    <h1 class="welcome-msg">Welcome</h1>
    <p v-for="child in childrenUsers" :key="child.id" class="child-username">
      <img :src="child.avatar_url" class="avatar-url" />
      <br />
      <router-link
        :to="{ name: 'ChildProfile', params: { username: child.username } }"
        class="child-link"
      >{{ child.username }}</router-link>
    </p>

    <div class="new-child-btn">
      <router-link :to="{ name: 'CreateChildProfile' }" class="new-child-link">Create Child Account</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ParentProfile",
  data() {
    return {
      childrenUsers: [
        {
          id: 1,
          username: "jessjelly",
          avatar_url:
            "https://st.depositphotos.com/1218762/1320/v/600/depositphotos_13209440-stock-video-looping-jaguar-panther-leopard-puma.jpg"
        },
        {
          id: 2,
          username: "butter_bridge",
          avatar_url:
            "https://i.pinimg.com/originals/e4/91/bb/e491bb4eb94f5665d3979aef7b328276.jpg"
        }
      ]
    };
  },
  methods: {
    addNewChild(newChildUser) {
      this.childrenUsers = [...this.childrenUsers, newChildUser];
    }
  }
};
</script>

<style scoped>
.welcome-msg {
  color: black;
  text-align: center;
}

.child-username {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 20px;
  text-decoration: none;
  margin-bottom: 20px;
}

.child-link {
  text-decoration: none;
  color: black;
}

.child-link:hover {
  font-weight: bold;
}

.new-child-btn {
  margin-top: 50px;
}

.new-child-link {
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  background-color: black;
  color: white;
  padding: 14px 20px;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  width: 100%;
}

.avatar-url {
  width: 100px;
}
</style>
