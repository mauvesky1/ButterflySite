<template>
  <div>
    <Header />
    <button class="back-btn">
      <router-link
        v-if="$routerHistory.hasPrevious()"
        :to="{ path: $routerHistory.previous().path }"
        class="back-link"
        >Back to Profile</router-link
      >
    </button>
    <button class="top-btn">
      <router-link :to="{ name: 'instructions' }" class="top-link"
        >How to Play</router-link
      >
    </button>
    <LogOut />
    <div id="toptext">
      <h1 class="butterfly-collection-title">Butterfly Collection:</h1>
      <p>Welcome to your collection!</p>
      <p>
        Here you can scroll down to admire the butterflies you've caught, and
        see how many are still out there!
      </p>
      <p>
        Remember, when you catch a butterfly, you learn it's type, and unlock
        details of it's habitat and personality!
      </p>
    </div>
    <ul class="gridlist">
      <li v-for="butterfly in collection" :key="butterfly.number">
        <h1 class="butterfly-name">{{ butterfly.name }}</h1>
        <img
          v-bind:src="butterfly.url"
          class="bfly"
          v-bind:class="{ uncaught: butterfly.unCaught }"
        />
        <h2 class="butterfly-type">
          Type:
          <p v-bind:class="{ hidden: butterfly.unCaught }">
            {{ butterfly.type }}
          </p>
        </h2>
        <p
          v-bind:class="{ hidden: butterfly.unCaught }"
          class="butterfly-details"
        >
          {{ butterfly.details }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import Header from "./Header.vue";
import { firestore } from "firebase";
import LogOut from "./Logout";

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
            "The Midas butterfly is drawn to all that glitters, and most often lives in heavily loaded bank vaults.   They often need to be shooed away from the crown jewels, in Buckingham palace.",
        },
        {
          name: "Mother Of Pearl",
          type: "Swallowtail",
          number: 2,
          url:
            "https://raw.githubusercontent.com/conwayhub/markertests/master/butterflies/butterfly-1_2.png",
          unCaught: true,
          details:
            "The beautiful Mother Of Pearl butterfly has a ponderous, flapping flight, and comes from the lush forests of Africa!",
        },
        {
          name: "Mexican Bluewing",
          type: "Swallowtail",
          number: 3,
          url:
            "https://raw.githubusercontent.com/conwayhub/markertests/master/butterflies/butterfly-1_3.png",
          unCaught: true,
          details:
            "Always identifiable by it's vivid blue and black stripes, The Mexican Bluewing was first spotted in the 1840's, and loves to dine on rotten fruit!",
        },
        {
          name: "Peacock",
          number: 4,
          type: "Swallowtail",
          url:
            "https://raw.githubusercontent.com/conwayhub/markertests/master/butterflies/butterfly-1_4.png",
          unCaught: true,
          details:
            "The Peacock Butterfly - also known as Aglais Io - is named after a mythological Greek princess, who fell in love with the god Zeus, and was turned into a cow for her troubles!  ",
        },
        {
          name: "Frosted Tip",
          number: 5,
          type: "Swallowtail",
          url:
            "https://raw.githubusercontent.com/conwayhub/markertests/master/butterflies/butterfly-1_5.png",
          unCaught: true,
          details:
            "The Frosted Tip is a highly discerning butterfly, with a penchant for fashion and pop music.  They enjoyed prominance during the late nineties and early 2000's, but have become rare in more recent years.",
        },
        {
          name: "Apetura Iris",
          number: 6,
          type: "Owl",
          url:
            "https://raw.githubusercontent.com/conwayhub/markertests/master/butterflies/butterfly-2_1.png",
          unCaught: true,
          details:
            "Female Apeture Iris butterflies are simple brown butterflies, which dine on honeydew and tree sap.  The males, on the other hand, are gloriously purple, but they eat animal poo and roadkill!  Which would you rather be?",
        },
        {
          name: "Starlet",
          number: 7,
          type: "Metalmark",
          url:
            "https://raw.githubusercontent.com/conwayhub/markertests/master/butterflies/butterfly-2_2.png",
          unCaught: true,
          details:
            "Young Starlet butterflies are drawn to bright light, and can often get burned or bumped by flying too close to flashing cameras.  Those that survive long enough to grow old prefer the night, and fill dark skies with their bright wings. ",
        },
        {
          name: "Stargazer",
          number: 8,
          type: "Owl",
          url:
            "https://raw.githubusercontent.com/conwayhub/markertests/master/butterflies/butterfly-2_3.png",
          unCaught: true,
          details:
            "In folklore, The Stargazer Butterfly is believed to slip most easily in and out of the spirit world.  Any secrets you whisper to them will be kept, and any wishes you tell them will be granted.",
        },
        {
          name: "Swirley-Harley",
          number: 9,
          type: "Metalmark",
          url:
            "https://raw.githubusercontent.com/conwayhub/markertests/master/butterflies/butterfly-2_4.png",
          unCaught: true,
          details:
            "Swirley-Harley butterflies are actually born white, but are infamous for breaking into art supply stores to decorate themselves!",
        },
        {
          name: "Haywain",
          type: "Silkspinner",
          number: 10,
          url:
            "https://raw.githubusercontent.com/conwayhub/markertests/master/butterflies/butterfly-2_5.png",
          unCaught: true,
          details:
            "Well shucks!  Haywain butterflies may not have all the frills of your fancy city butterflies, but they can lassoo a buckin' bronco at 200 yards, yes siree!  Don't believe me?  Give 'em a rope and a bronco and you'll see! ",
        },
        {
          name: "Shoreline",
          type: "Silkspinner",
          number: 11,
          url:
            "https://raw.githubusercontent.com/conwayhub/markertests/master/butterflies/butterfly-3_1.png",
          unCaught: true,
          details:
            "The Shoreline is often considered the daredevil of the butterfly family!  Known for flying out into choppy tidal waters, and fluttering back in, on the cresting foam of waves.",
        },
        {
          name: "Purple Emperor",
          number: 12,
          type: "Owl",
          url:
            "https://raw.githubusercontent.com/conwayhub/markertests/master/butterflies/butterfly-3_2.png",
          unCaught: true,
          details:
            "It is a little known fact that The Purple Emperor - known as His Imperial Majesty, by his many fans - is actually the legal monarch of the United Kingdom.  He is extremely suspicious of Vive La France.",
        },
        {
          name: "Vive La France",
          number: 13,
          type: "Metalmark",
          url:
            "https://raw.githubusercontent.com/conwayhub/markertests/master/butterflies/butterfly-3_3.png",
          unCaught: true,
          details:
            "Most butterflies are content with their lot in life.  They conquer, they dominate, they are gilded through glory, and have conquered the world twice, by conquest and by dazzling, what finer thing could there possibly be?   Vive La France answers:  To be free.",
        },
        {
          name: "Scrying Glass",
          type: "Metalmark",
          number: 14,
          url:
            "https://raw.githubusercontent.com/conwayhub/markertests/master/butterflies/butterfly-3_4.png",
          unCaught: true,
          details:
            "The Scrying Glass is one of the darkest of the Metalmark butterflies.  It is said that at night they mingle with moths, and fly through the dreams of powerful people, stealing secrets.  If you look closely, you can see the secrets of kings and presidents reflected in their wings.",
        },
        {
          name: "Seafoam",
          type: "Silkspinner",
          number: 15,
          url:
            "https://raw.githubusercontent.com/conwayhub/markertests/master/butterflies/butterfly-3_5.png",
          unCaught: true,
          details:
            "It is lies and misinformation that the Seafoam butterfly tastes anything at all like delicious fizzy parma violets.  Please do not taste the Seafoam butterfly.",
        },
      ],
    };
  },
  components: { Header, LogOut },
  created() {
    firestore()
      .collection(`parents/${window.localStorage.uid}/userProfiles`)
      .get()
      .then((children) => {
        console.log(children.docs);
        children.docs.forEach((child) => {
          const childRef = child.lm.Ee.proto.mapValue.fields;

          if (childRef.username.stringValue === this.$route.params.username) {
            Object.keys(childRef).forEach((key) => {
              this.collection.forEach((butterfly) => {
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
  methods: {},
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
@media screen and (min-width: 769px) {
  #toptext {
    width: 500pt;
    border: 4px solid #acd998;
    background-color: #e6e6fa;
    border-radius: 30px;
    margin: auto;
    padding: 20px;
    text-align: center;
    display: grid;
    box-shadow: 0 8px 6px -6px black;
  }
  .gridlist {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    list-style: none;
    column-count: 3;
    column-gap: 1em;
    row-gap: 1em;
    padding: 1em;
  }
}

@media screen and (max-width: 768px) {
  #toptext {
    width: 85%;
    border: 4px solid #acd998;
    background-color: #e6e6fa;
    border-radius: 30px;
    margin: auto;
    padding: 20px;
    text-align: center;
    display: grid;
    box-shadow: 0 8px 6px -6px black;
  }
  .gridlist {
    width: 85%;
    padding: 1em;
    list-style: none;
  }
  .butterfly-details {
    width: 85%;
  }
}
</style>
