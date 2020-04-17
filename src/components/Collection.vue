<template>
  <div>
    <Header />
    <button class="back-btn">
      <router-link
        v-if="$routerHistory.hasPrevious()"
        :to="{ path: $routerHistory.previous().path }"
        class="back-link"
      >Back to Parent Profile</router-link>
    </button>
    <h1>Butterfly Collection:</h1>
    <ul>
      <li v-for="butterfly in collection" :key="butterfly.number" class="butterfly-name">
        <h1>{{ butterfly.name }}</h1>
        <img
          v-bind:src="butterfly.url"
          class="bfly"
          v-bind:class="{ uncaught: butterfly.unCaught }"
        />
        <h2>Type: {{ butterfly.type }}</h2>
        <p v-bind:class="{ hidden: butterfly.unCaught }">{{ butterfly.details }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import Header from "./Header.vue";
import { firestore } from "firebase";

export default {
  name: "Collection",
  data() {
    return {
      collection: [
        {
          name: "Midas",
          number: 1,
          type: "Swallowtail",
          url:
            "https://raw.githubusercontent.com/conwayhub/markertests/master/butterflies/butterfly-1_1.png",
          unCaught: true,

          details:
            "The Midas butterfly is drawn to all that glitters, and most often lives in heavily loaded bank vaults.   They often need to be shooed away from the crown jewels, in Buckingham palace."
        },
        {
          name: "Mother Of Pearl",
          type: "Swallowtail",
          number: 2,
          url:
            "https://raw.githubusercontent.com/conwayhub/markertests/master/butterflies/butterfly-1_2.png",
          unCaught: true,
          details:
            "The beautiful Mother Of Pearl butterfly has a ponderous, flapping flight, and comes from the lush forests of Africa!"
        },
        {
          name: "Mexican Bluewing",
          type: "Swallowtail",
          number: 3,
          url:
            "https://raw.githubusercontent.com/conwayhub/markertests/master/butterflies/butterfly-1_3.png",
          unCaught: true
        },
        {
          name: "Peacock",
          number: 4,
          type: "Swallowtail",
          url:
            "https://raw.githubusercontent.com/conwayhub/markertests/master/butterflies/butterfly-1_4.png",
          unCaught: true
        },
        {
          name: "Frosted Tip",
          number: 5,
          type: "Swallowtail",
          url:
            "https://raw.githubusercontent.com/conwayhub/markertests/master/butterflies/butterfly-1_5.png",
          unCaught: true
        },
        {
          name: "Apetura Iris",
          number: 6,
          type: "Owl",
          url:
            "https://raw.githubusercontent.com/conwayhub/markertests/master/butterflies/butterfly-2_1.png",
          unCaught: true
        },
        {
          name: "Starlet",
          number: 7,
          type: "Metalmark",
          url:
            "https://raw.githubusercontent.com/conwayhub/markertests/master/butterflies/butterfly-2_2.png",
          unCaught: true
        },
        {
          name: "Stargazer",
          number: 8,
          type: "Owl",
          url:
            "https://raw.githubusercontent.com/conwayhub/markertests/master/butterflies/butterfly-2_3.png",
          unCaught: true
        },
        {
          name: "Swirley-Harley",
          number: 9,
          type: "Metalmark",
          url:
            "https://raw.githubusercontent.com/conwayhub/markertests/master/butterflies/butterfly-2_4.png",
          unCaught: true
        },
        {
          name: "Haywain",
          type: "Silkspinner",
          number: 10,
          url:
            "https://raw.githubusercontent.com/conwayhub/markertests/master/butterflies/butterfly-2_5.png",
          unCaught: true
        },
        {
          name: "Shoreline",
          type: "Silkspinner",
          number: 11,
          url:
            "https://raw.githubusercontent.com/conwayhub/markertests/master/butterflies/butterfly-3_1.png",
          unCaught: true
        },
        {
          name: "Purple Emperor",
          number: 12,
          type: "Owl",
          url:
            "https://raw.githubusercontent.com/conwayhub/markertests/master/butterflies/butterfly-3_2.png",
          unCaught: true
        },
        {
          name: "Vive La France",
          number: 13,
          type: "Metalmark",
          url:
            "https://raw.githubusercontent.com/conwayhub/markertests/master/butterflies/butterfly-3_3.png",
          unCaught: true
        },
        {
          name: "Scrying Glass",
          type: "Metalmark",
          number: 14,
          url:
            "https://raw.githubusercontent.com/conwayhub/markertests/master/butterflies/butterfly-3_4.png",
          unCaught: true
        },
        {
          name: "Seafoam",
          type: "Silkspinner",
          number: 15,
          url:
            "https://raw.githubusercontent.com/conwayhub/markertests/master/butterflies/butterfly-3_5.png",
          unCaught: true
        }
      ]
    };
  },
  components: { Header },
  created() {
    firestore()
      .collection(`parents/${window.localStorage.parentDoc}/userProfiles`)
      .get()
      .then(children => {
        children.docs.forEach(child => {
          const childRef = child.lm.Ee.proto.mapValue.fields;

          if (childRef.username.stringValue === this.$route.params.username) {
            Object.keys(childRef).forEach(key => {
              this.collection.forEach(butterfly => {
                if (butterfly.name === key) {
                  butterfly.unCaught = false;
                }
              });
            });
          }
        });
      });
  },
  methods: {}
};
</script>

<style>
.bfly {
  width: 100%;
}
.uncaught {
  filter: brightness(0.1);
}

.hidden {
  display: none;
}
ul {
  list-style: none;
}
</style>
