<template>
  <div>
    <button class="back-btn">
      <router-link
        v-if="$routerHistory.hasPrevious()"
        :to="{ path: $routerHistory.previous().path }"
        class="back-link"
      >Back to Collection</router-link>
    </button>

    <h1>Name: Flitzy</h1>
    <img
      class="butterflyImg"
      src="https://img.favpng.com/16/17/4/butterfly-animation-clip-art-png-favpng-Bn0m1FQMXHRKhzu11VD98rL1c.jpg"
    />
  </div>
</template>

<style scoped>
.butterflyImg {
  width: 200px;
}
</style>
