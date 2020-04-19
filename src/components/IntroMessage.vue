<template>
  <div class="outer">
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap"
      rel="stylesheet"
    />

    <div class="intro-msg-bckgrnd">
      <!-- <p>
      With a streak of color, and the flap of a wing, release the wildlife back
      into your home with Butterfly Hunt!
      </p>-->

      <p>
        This Augmented Reality game will bring you up close and personal with a
        beautiful array of butterflies for you to catch and collect.
      </p>

      <p>
        By using markers and any mobile device or tablet, you can turn your
        house into a safari full of hidden gems!
      </p>

      <p>
        Best of all, with so many butterflies out there to be caught, every game
        is different!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "IntroMessage"
};
</script>

<style>
.outer {
  margin: 10pt;
}
@media screen and (max-width: 600px) {
  .intro-msg-bckgrnd {
    background: rgba(226, 209, 255, 0.2);
    width: 85%;
    color: white;
    border: 1px solid #cccccc;
    border-radius: 30px;
    padding: 10px;
    display: inline-block;
    text-align: inline-block;
    font-weight: bold;
  }
}
@media screen and (min-width: 601px) {
  .intro-msg-bckgrnd {
    background: rgba(226, 209, 255, 0.2);
    width: 400pt;
    color: white;
    border: 1px solid #cccccc;
    border-radius: 30px;
    padding: 10px;
    display: inline-block;
    text-align: inline-block;
    font-weight: bold;
  }
}
</style>
