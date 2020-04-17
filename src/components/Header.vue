<template>
  <h1 class="header">Butterfly Hunt</h1>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style>
/* pacifico-regular - latin */
@font-face {
  font-family: "Pacifico";
  font-style: normal;
  font-weight: 400;
  src: url("../fonts/pacifico-v16-latin-regular.eot"); /* IE9 Compat Modes */
  src: local("Pacifico Regular"), local("Pacifico-Regular"),
    url("../fonts/pacifico-v16-latin-regular.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */ url("../fonts/pacifico-v16-latin-regular.woff2")
      format("woff2"),
    /* Super Modern Browsers */ url("../fonts/pacifico-v16-latin-regular.woff")
      format("woff"),
    /* Modern Browsers */ url("../fonts/pacifico-v16-latin-regular.ttf")
      format("truetype"),
    /* Safari, Android, iOS */
      url("../fonts/pacifico-v16-latin-regular.svg#Pacifico") format("svg"); /* Legacy iOS */
}

.header {
  color: #2a938f;
  font-family: Pacifico;
  font-size: 5em;
  font-weight: bolder;
  padding: 0em;
  margin-top: 0;
  margin-bottom: 0;
}
</style>
