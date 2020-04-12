<template>
  <div>
    <h1 class="welcomeMsg">Welcome!</h1>
    <ul>
      <li v-for="child in childrenUsers" :key="child.id" class="childUsername">
        <router-link
          :to="{ name: 'ChildProfile', params: { username: child.username } }"
          class="child-link"
          >{{ child.username }}</router-link
        >
      </li>
    </ul>

    <router-link to="/newchild">Create New Child's Account</router-link>
  </div>
</template>

<script>
export default {
  name: "ParentProfile",
  data() {
    return {
      username: this.$route.params.username,
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
            "https://p1.hiclipart.com/preview/358/552/18/book-silhouette-lion-cat-drawing-whiskers-animal-animation-cartoon-png-clipart.jpg"
        }
      ]
    };
  }
};
</script>

<style scoped>
.welcomeMsg {
  color: black;
  text-align: center;
}

.childUsername {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 20px;
  text-align: center;
  text-decoration: none;
  list-style: none;
  margin-bottom: 20px;
}

.child-link {
  text-decoration: none;
  color: black;
}

.child-link:hover {
  font-weight: bold;
}
</style>
