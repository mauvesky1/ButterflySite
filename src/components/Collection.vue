<template>
  <div>
    <Header />
    <button class="back-btn">
      <router-link
        v-if="$routerHistory.hasPrevious()"
        :to="{ path: $routerHistory.previous().path }"
        class="back-link"
      >Back to Profile</router-link>
    </button>
    <div id="toptext">
      <h1 class="butterfly-collection-title">Butterfly Collection:</h1>
      <p>Welcome to your collection!</p>
      <p>Here you can scroll down to admire the butterflies you've caught, and see how many are still out there!</p>
      <p>Remember, when you catch a butterfly, you learn it's type, and unlock details of it's habitat and personality!</p>
    </div>
    <ul>
      <li v-for="butterfly in collection" :key="butterfly.number">
        <h1 class="butterfly-name">{{ butterfly.name }}</h1>
        <img
          v-bind:src="butterfly.url"
          class="bfly"
          v-bind:class="{ uncaught: butterfly.unCaught }"
        />
        <h2 class="butterfly-type">
          Type:
          <p v-bind:class="{ hidden: butterfly.unCaught }">{{ butterfly.type }}</p>
        </h2>
        <p
          v-bind:class="{ hidden: butterfly.unCaught }"
          class="butterfly-details"
        >{{ butterfly.details }}</p>
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
      .collection(`parents/${window.localStorage.uid}/userProfiles`)
      .get()
      .then(children => {
        console.log(children.docs);
        children.docs.forEach(child => {
          const childRef = child.lm.Ee.proto.mapValue.fields;

          if (childRef.username.stringValue === this.$route.params.username) {
            Object.keys(childRef).forEach(key => {
              this.collection.forEach(butterfly => {
                console.log(key);
                console.log(butterfly.name, "hello", butterfly.unCaught);
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
.butterfly-collection-title {
  font-family: Pacifico;
  color: #d95c26;
  font-size: 2.5em;
}

.back-btn {
  margin-top: 10px;
  margin-bottom: 10px;
}

.butterfly-name {
  font-family: Pacifico;
  color: white;
}

.butterfly-type {
  font-family: Pacifico;
  color: black;
  margin: 0;
}

.bfly {
  width: 100%;
}
.uncaught {
  filter: brightness(0.1);
}

.butterfly-details {
  width: 300px;
  border: 1px solid #cccccc;
  background: rgba(204, 204, 204, 0.2);
  border-radius: 30px;
  margin: auto;
  padding: 20px;
  text-align: center;
}
.hidden {
  display: none;
}
@media screen and (min-width: 601px) {
  #toptext {
    width: 500pt;
    border: 4px solid #acd998;
    background-color: #e6e6fa;
    border-radius: 30px;
    margin: auto;
    padding: 20px;
    text-align: center;
    display: grid;
  }
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    list-style: none;
    column-count: 3;
    column-gap: 1em;
    row-gap: 1em;
    padding: 1em;
  }
}

@media screen and (max-width: 600px) {
  #toptext {
    width: 85%;
    border: 4px solid #acd998;
    background-color: #e6e6fa;
    border-radius: 30px;
    margin: auto;
    padding: 20px;
    text-align: center;
    display: grid;
  }
  ul {
    display: grid;
    grid-template-columns: 1fr;
    list-style: none;
    column-count: 1;
    column-gap: 1em;
    row-gap: 1em;
    padding: 1em;
  }
}
</style>
