<template>
  <div>
    <Header />
    <nav id="navbar">
      <BackButton class="navbutt" />
      <HowToPlayButton class="navbutt" />
      <LogOut class="navbutt" />
    </nav>
    <div id="instruction-list">
      <h1 class="welcome-msg">Instructions</h1>
      <p>Welcome to the Butterfly Hunt!</p>

      <p>
        We created this app in the hope of bringing some fun, color, and wonder
        into people's homes, while the whole world is socially distancing!
      </p>

      <ul class="instructions">
        <li>
          <h3 class="listItem">Step 1 - Create Your Account</h3>
          <div class="imgbar">
            <img src="../assets/Images/loginsquare.jpg" />
            <img src="../assets/Images/newplayersquare.jpg" class="desktop-only" />
            <img src="../assets/Images/Harrietsquare.jpg" class="desktop-only" />
          </div>
          <p>
            If you haven't already, just head to the home page to create your
            account, and add a user profile for the person who's going to be
            playing! This will give you access to the Butterfly Hunt, and allow
            you to add butterflies to your collection, so you can look at them
            whenever you like!
          </p>
        </li>
        <li>
          <h3 class="listItem">Step 2 - Make Your Mark!</h3>
          <div class="imgbar">
            <img src="../assets/Images/pattern-pixil-frame-0 (8).png" />
            <img src="../assets/Images/hdrawnsquare.jpg" class="desktop-only" />

            <img src="../assets/Images/finalMarkerssquare.jpg" class="desktop-only" />
          </div>
          <p>
            Butterfly Hunt has five unique markers, which your phone or tablet
            will scan in order to bring the butterflies to life in your home!
          </p>

          <a
            href="https://github.com/conwayhub/markertests/raw/master/Markersheet.pdf"
            target="_blank"
          >
            <button class="downloadbutton">Download Markers!</button>
          </a>
          <p>
            You can download a pdf of our markers from here! If you have a
            printer, the next bit is easy! Print out the markers, and cut them
            out (they work best if you leave a little bit of white around the
            black borders!)
          </p>
          <p>
            If you don't have a printer, we've tried to keep our designs simple
            enough that you can trace over them straight from your laptop
            screen! Be as precise as you can!
          </p>
        </li>
        <li>
          <h3 class="listItem">Step 3 - Place Your Markers!</h3>
          <div class="imgbar">
            <img src="../assets/Images/fridgesquare.jpg" />
            <img src="../assets/Images/plantssquare.jpg" class="desktop-only" />

            <img src="../assets/Images/shelfsquare.jpg" class="desktop-only" />
          </div>
          <p>
            Once you've got your markers, all that remains is to place them! You
            can plant your markers anywhere that gets a bit of light, and that
            makes sure they're shown!
          </p>

          <p>
            You can place these markers yourself, and check them every day to
            see what butterflies have wandered into your home, but if you have a
            friend or parent that can hide the markers for you, then you can be
            a true hunter! Searching the undergrowth for these rare breeds!
          </p>
        </li>
        <li>
          <h3 class="listItem">Step 4 - Time to Go Huntin'!</h3>
          <div class="imgbar">
            <img src="../assets/Images/letterboxsquare.jpg" />
            <img src="../assets/Images/fishiesquare.jpg" class="desktop-only" />

            <img src="../assets/Images/fridgebutterflysquare.jpg" class="desktop-only" />
          </div>

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
import BackButton from "./BackButton";
import LogOut from "./Logout";
import HowToPlayButton from "./HowToPlayButton";

export default {
  name: "Instructions",
  components: {
    Header,
    BackButton,
    LogOut,
    HowToPlayButton
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
  text-align: center;
}

.downloadbutton:hover {
  background: linear-gradient(to bottom, #acd998 5%, #e6af2e 100%);
  background-color: #acd998;
}

@media screen and (min-width: 600px) {
  #navbar {
    margin: auto;
    display: grid;
    width: 500pt;
    grid-template-columns: 1fr 1fr 1fr;
    list-style: none;
    column-count: 3;
    column-gap: 1em;
    row-gap: 1em;
    padding: 1em;
    justify-items: center;
  }
  .navbutt {
    width: 100%;
    height: auto;
  }
  li {
    list-style: none;
    margin: 0;
  }
  #instruction-list {
    width: 500pt;
    border: 4px solid #acd998;
    background-color: #e6e6fa;
    border-radius: 30px;
    margin: auto;
    padding: 20px;
    text-align: center;
    display: grid;
    margin-bottom: 2%;
    box-shadow: 0 8px 6px -6px black;
  }

  .imgbar {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    list-style: none;
    column-count: 3;
    column-gap: 1em;
    row-gap: 1em;
    padding: 1em;
  }
  .downloadbutton {
    text-decoration: none;
    font-weight: bold;
    font-size: 18px;
    background-color: #d95c26;
    color: white;
    padding: 14px 20px;
    display: flex;
    justify-content: center;
    margin: auto;
    border: none;
    border-radius: 40px;
    cursor: pointer;
    width: 50%;
  }
  .instructions {
    list-style: none;
    margin-left: -40px;
  }
}
@media screen and (max-width: 600px) {
  #navbar {
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    list-style: none;
    column-count: 3;
    column-gap: 1em;
    row-gap: 1em;
    padding: 1em;
  }
  .navbutt {
    width: 100%;
    height: auto;
  }
  ul {
    list-style: none;
    margin: 0;

    margin-left: -40px;
  }

  #instruction-list {
    width: 85%;
    border: 4px solid #acd998;
    background-color: #e6e6fa;
    border-radius: 30px;
    margin: auto;
    padding: 20px;
    text-align: ce;
    display: grid;
    margin-bottom: 2%;
    box-shadow: 0 8px 6px -6px black;
  }
  .desktop-only {
    display: none;
  }
  .imgbar {
    display: grid;
    grid-template-columns: 1fr;
    column-count: 1;
    column-gap: 1em;
    row-gap: 1em;
    padding: 1em;
  }
  .downloadbutton {
    text-decoration: none;
    font-weight: bold;
    font-size: 18px;
    background-color: #d95c26;
    color: white;
    padding: 14px 20px;
    display: flex;
    justify-content: center;
    margin: auto;
    border: none;
    border-radius: 40px;
    cursor: pointer;
    width: 75%;
  }
}
a {
  text-decoration: none;
}
img {
  width: 100%;
  height: auto;
  max-width: 625px;
  margin-left: 0;
  margin-right: auto;
  border-radius: 50%;
  display: block;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
