<template>
  <div>
    <Header />
    <div id="instruction-list">
      <h1 class="welcome-msg">Instructions</h1>
      <p>Welcome to the Butterfly Hunt!</p>

      <p>We created this app in the hope of bringing some fun, color, and wonder into people's homes, while the whole world is socially distancing!</p>

      <p></p>

      <ul class="instructions">
        <li>
          <h3 class="listItem">Step 1 - Create Your Account</h3>

          <img src="../Images/login.png" />
          <img src="../Images/newplayer.png" />
          <p>If you haven't already, just head to the home page to create your account, and add a user profile for the person who's going to be playing! This will give you access to the Butterfly Hunt, and allow you to add butterflies to your collection, so you can look at them whenever you like!</p>
        </li>
        <li>
          <h3 class="listItem">Step 2 - Make Your Mark!</h3>
          <img src="../Images/pattern-pixil-frame-0 (8).png" />
          <img src="../Images/hand drawn marker.jpg" />
          <p>Butterfly Hunt has five unique markers, which your phone or tablet will scan in order to bring the butterflies to life in your home!</p>

          <button class="downloadbutton">Download Markers!</button>
          <p>
            You can download a pdf of our markers from here!
            If you have a printer, the next bit is easy! Print out the markers, and cut them out (they work best if you leave a little bit of white around the black borders!)
          </p>
          <p>If you don't have a printer, we've tried to keep our designs simple enough that you can trace over them straight from your laptop screen! Be as precise as you can!</p>
        </li>
        <li>
          <h3 class="listItem">Step 3 - Place Your Markers!</h3>
          <img src="../Images/fridge (1).jpg" />
          <img src="../Images/plantmarker.jpg" />
          <p>Once you've got your markers, all that remains is to place them! You can plant your markers anywhere that gets a bit of light, and that makes sure they're shown!</p>

          <p>You can place these markers yourself, and check them every day to see what butterflies have wandered into your home, but if you have a friend or parent that can hide the markers for you, then you can be a true hunter! Searching the undergrowth for these rare breeds!</p>
        </li>
        <li>
          <h3 class="listItem">Step 4 - Time to Go Huntin'!</h3>
          <img src="../Images/postboxsquare.jpg" />
          <img src="../Images/fishsquare.jpg" />
          <p>
            Once you're all set up, you can enter your profile, and hit the
            <i>Go Huntin'</i> button to open the app, and let the game begin!
          </p>
        </li>
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

.listItem {
  font-family: Pacifico;
  font-size: 1.5em;

  color: #d95c26;
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
img {
  height: 150pt;
  width: 150pt;
  padding: 2em;
  border-radius: 50%;
  list-style: none;
}

.downloadbutton {
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  background-color: #d95c26;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  width: 50%;
}

li {
  list-style: none;
}
</style>