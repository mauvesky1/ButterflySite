<template>
<html>
  <button class="back-btn">
    <router-link
      v-if="$routerHistory.hasPrevious()"
      :to="{ path: $routerHistory.previous().path }"
      class="back-link"
    >Back to Child Profile</router-link>
  </button>

  <head>
    <script type="application/javascript" src="https://aframe.io/releases/0.8.0/aframe.min.js"></script>
    <script
      type="application/javascript"
      src="https://cdn.rawgit.com/jeromeetienne/AR.js/1.6.0/aframe/build/aframe-ar.js"
    ></script>
  </head>
  <iframe :src="url" width="500" height="500" allow="camera * ;"></iframe>
</html>
</template>

<script>
export default {
  name: "Butterflyhunt",
  data() {
    return {
      url: this.URLMaker()
    };
  },
  methods: {
    URLMaker() {
      const newUrl =
        "https://norbsardemo.netlify.com/ar.html?CID=" +
        this.$route.params.username +
        "&UID=" +
        window.localStorage.uid +
        "&PID=" +
        window.localStorage.parentDoc;
      return newUrl;
    }
  }
};
</script>

<style>
.back-link {
  text-decoration: none;
  color: white;
}

.back-btn {
  font-weight: bold;
  font-size: 18px;
  background-color: black;
  padding: 14px 20px;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  margin-bottom: 40px;
}
</style>