<template>
  <div>
    <button class="back-btn">
      <router-link
        v-if="$routerHistory.hasPrevious()"
        :to="{ path: $routerHistory.previous().path }"
        class="back-link"
      >Back to Child Profile</router-link>
    </button>
    <br />
    <iframe :src="url" allow="camera *;" class="frame" width="700" height="800"></iframe>
  </div>
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
        "https://butterflyhunt.netlify.app/ar.html?CID=" +
        this.$route.params.username +
        "&UID=" +
        window.localStorage.uid +
        "&PID=" +
        window.localStorage.uid;
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
  font-size: 18px;
  border-radius: 30px;

  border: 2px solid #cccccc;
  background: rgba(204, 204, 204, 0.2);
  padding: 14px 20px;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  margin-top: 30px;
  margin-bottom: 10px;
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  iframe {
    width: 650;
    height: 800;
  }
}

@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
  iframe {
    width: 310px;
    height: 440px;
  }
}

@media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) {
  iframe {
    width: 310px;
    height: 500px;
  }
}

@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
  iframe {
    width: 350px;
    height: 600px;
  }
}
@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) {
  iframe {
    width: 390px;
    height: 600px;
  }
}
@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
  iframe {
    width: 350px;
    height: 750px;
  }
}
@media screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 2) {
  iframe {
    width: 330px;
    height: 580px;
  }
}

@media screen and (device-width: 320px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 3) {
  iframe {
    width: 310px;
    height: 550px;
  }
}
@media screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 4) {
  iframe {
    width: 350px;
    height: 540px;
  }
}

@media screen and (device-width: 480px) and (device-height: 800px) {
  iframe {
    width: 470px;
    height: 760px;
  }
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
  iframe {
    width: 750px;
    height: 900px;
  }
}
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) {
  iframe {
    width: 750px;
    height: 970px;
  }
}

@media only screen and (min-device-width: 834px) and (max-device-width: 1112px) and (-webkit-min-device-pixel-ratio: 2) {
  iframe {
    width: 800px;
    height: 1050px;
  }
}

@media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
  iframe {
    width: 1000px;
    height: 1300px;
  }
}

@media (min-device-width: 800px) and (max-device-width: 1280px) {
  iframe {
    width: 890px;
    height: 1240px;
  }
}
@media (min-device-width: 800px) and (max-device-width: 1280px) and (-webkit-min-device-pixel-ratio: 2) {
  iframe {
    width: 890px;
    height: 1240px;
  }
}

@media screen and (device-width: 601px) and (device-height: 906px) and (-webkit-min-device-pixel-ratio: 1.331) and (-webkit-max-device-pixel-ratio: 1.332) {
  iframe {
    width: 590px;
    height: 850px;
  }
}

@media screen and (device-width: 1536px) and (device-height: 2048px) and (-webkit-min-device-pixel-ratio: 1.331) and (-webkit-max-device-pixel-ratio: 1.332) {
  iframe {
    width: 1510px;
    height: 2000px;
  }
}
@media only screen and (min-device-width: 800px) and (max-device-width: 1280px) and (-webkit-min-device-pixel-ratio: 1.5) {
  iframe {
    width: 780px;
    height: 1230px;
  }
}
@media only screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1.5) {
  iframe {
    width: 1150px;
    height: 1550px;
  }
}
</style>
