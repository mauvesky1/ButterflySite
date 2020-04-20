<template>
  <div>
    <Header />
    <div id="instruction-list">
      <h1 class="welcome-msg">Instructions</h1>
      <p>Welcome to the Butterfly Hunt!</p>

      <p>We created this app in the hope of bringing some fun, color, and wonder into people's homes, while the whole world is socially distancing!</p>

      <p></p>

      <ul class="instructions">
        <li>Make Account / Sign In</li>
        <li>Print Or Copy Down Markers onto Paper or Card</li>
        <li>Hide Markers Around the House</li>
        <li>Click On "Go Huntin" AND LET THE GAMES BEGIN!</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";

export default {
  name: "Instructions",
  components: {
    Header
  }
};
</script>

<style scoped>
.welcome-msg {
  font-family: Pacifico;
  color: #d95c26;
  text-align: center;
  font-size: 1.9em;
  width: 100%;
}

@media screen and (min-width: 600px) {
  #instruction-list {
    width: 500pt;
    border: 4px solid #acd998;
    background-color: #e6e6fa;
    border-radius: 30px;
    margin: auto;
    padding: 20px;
    text-align: left;
    display: grid;
  }
}
@media screen and (max-width: 600px) {
  #instruction-list {
    width: 85%;
    border: 4px solid #acd998;
    background-color: #e6e6fa;
    border-radius: 30px;
    margin: auto;
    padding: 20px;
    text-align: left;
    display: grid;
  }
}
.instructions {
}
</style>