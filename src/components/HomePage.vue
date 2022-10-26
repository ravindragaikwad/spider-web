<template>
   <v-container>
      <section id="hero">
        <v-row no-gutters>
          <div id="particles-js">
          <v-img
            :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
            src="../assets/background-01.png"
            >
            <v-theme-provider dark>
              <v-container fill-height>
                <v-row
                  align="center"
                  class="white--text mx-auto"
                  justify="center"
                >
                  <v-col
                    class="white--text text-center"
                    cols="12"
                    tag="h1"
                  >
                    <span
                    :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                      class="font-weight-light"
                    >
                    A next-generation decentralized Marketplace of Artificial Intelligence and Machine Learning models.
                    </span>

                    <br>

                    <span
                      :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
                      class="font-weight-black"
                    >
                      SpiderWeb
                    </span>

                  </v-col>

                  <v-btn
                    class="align-self-end"
                    fab
                    outlined
                    @click="$vuetify.goTo('#about-me')"
                  >
                    <v-icon>mdi-chevron-double-down</v-icon>
                  </v-btn>
                </v-row>
              </v-container>
            </v-theme-provider>
          </v-img>
          </div>
        </v-row>
      </section>

      <section id="about-me">
        <div class="py-12"></div>

        <v-container class="text-center">
          <h2 class="display-2 font-weight-bold white--text mb-3">ABOUT SpiderWeb</h2>

          <v-responsive
            class="mx-auto mb-8"
            width="56"
          >
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-responsive
            class="mx-auto title font-weight-light mb-8 text-justify white--text"
            max-width="720"
          >
          AI creators benefit from Build-to-Earn token incentives. In addition, a dedicated developer's Integrated Development Environment will facilitate creating and submitting models on the SpiderWeb blockchain, rewarding AI developers whose models are leveraged by a dApp or enterprise looking for state-of-the-art AI capabilities. Enterprises can securely upload their data and get tailored AI predictions by seamlessly interacting with smart contracts; the entry points to ML models on the SpiderWeb blockchain. Our proprietary Perfect-Fit-Model algorithm will automatically identify the best model for any use case. And our proof of training and proof-of-inference proprietary consensus mechanisms validates the model and run it on-chain network. The Core Mission of SpiderWeb is to enable a new era of AI-driven business applications by building a community that empowers AI developers as creators, simplifies AI development and deployment, and makes AI/ML models readily available for businesses at a lower cost.          </v-responsive>
        </v-container>
      </section>
      <section>
       <v-container fluid>
      <v-row dense class="pa-1">
      <v-col cols="4">
        <v-card
    class="mx-auto my-12"
    max-width="374"
        height="150"
    dark
  >
    <v-card-title>
      <v-icon
        large
        left
      >
        mdi-currency-usd
      </v-icon>
    Build to Earn</v-card-title>
    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
      </v-row>
      <div>First marketplace to enable
peer-to-peer relation
between AI creators and
enterprises, through
decentralized nodes</div>
    </v-card-text>
  </v-card>
   
   <v-card
    class="mx-auto my-12"
    max-width="374"
            height="150"

    dark
  >
    <v-card-title>
     <v-icon
        large
        left
      >
        mdi-note-edit-outline
      </v-icon>
    Proprietary Consensus</v-card-title>
    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
      </v-row>
      <div>Scalable consensus for
validation and verification
of AI Models,
customizable & secure
environment.
</div>
    </v-card-text>
  </v-card>
  <v-card
    class="mx-auto my-12"
    max-width="374"
    height="150"
    dark
  >
    <v-card-title>
     <v-icon
        large
        left
      >
        mdi-code-json
      </v-icon>
      Developer Experience</v-card-title>
    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
      </v-row>
      <div>Interactive user interface
for AI creators and DAPP
developers, in-build tools,
tech stacks, standards.
</div>
    </v-card-text>
  </v-card>
</v-col>
<v-col cols="4">
  <v-card
    class="mx-auto my-12"
    max-width="374"
            height="150"
    dark
  >
    <v-card-title>
     <v-icon
        large
        left
      >
        mdi-cash-multiple
      </v-icon>
      Bounties & Rewards</v-card-title>
    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
      </v-row>
      <div>Business users can
announce bounties and
rewards for AI creators &
access the best data
scientist community.
</div>
    </v-card-text>
  </v-card>

 <v-card
    class="mx-auto my-12"
    max-width="374"
  height="150"
    dark
  >
    <v-card-title>
     <v-icon
        large
        left
      >
        mdi-puzzle-edit
      </v-icon>
      Perfect-Model-Fit</v-card-title>
    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
      </v-row>
      <div>A proprietary algorithm to
identify the best model
automatically with a smart
contract.
</div>
    </v-card-text>
  </v-card>

  <v-card
    class="mx-auto my-12"
    max-width="374"
                height="150"
    dark
  >
    <v-card-title>
     <v-icon
        large
        left
      >
        mdi-connection
      </v-icon>
      Data Connectors</v-card-title>
    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
      </v-row>
      <div>In-build IPFS and web2
connectors, ingest and
integrate dataset
seamlessly in models,
encryption, privacy.
</div>
    </v-card-text>
  </v-card>
</v-col>

<v-col cols="4">
   <v-card
    class="mx-auto my-12"
    max-width="374"
    height="150"
    dark
  >
    <v-card-title>
     <v-icon
        large
        left
      >
        mdi-lan-connect
      </v-icon>
      Flexible Computing</v-card-title>
    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
      </v-row>
      <div>Automatically computing
resource allocation for the
model training and
predictions empowered with
dedicated throughput.
</div>
    </v-card-text>
  </v-card>

  <v-card
    class="mx-auto my-12"
    max-width="374"
                height="150"
    dark
  >
    <v-card-title>
     <v-icon
        large
        left
      >
        mdi-view-module-outline
      </v-icon>
      Modularity</v-card-title>
    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
      </v-row>
      <div>High stability, short lead
time to value, scalability,
elasticity, upgradability,
reliability, community
collaboration.
</div>
    </v-card-text>
  </v-card>

  <v-card
    class="mx-auto my-12"
    max-width="374"
                height="150"
    dark
  >
    <v-card-title>
     <v-icon
        large
        left
      >
        mdi-web-box
      </v-icon>
      Interoperability</v-card-title>
    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
      </v-row>
      <div>Layer 0 bridge to external
chains, chain agnostic AI,
Native support for smart
contracts, tokens etc.
</div>
    </v-card-text>
  </v-card>
</v-col>
      </v-row>
       </v-container>
  </section>

   </v-container>
</template>


<script>
import 'particles.js';

export default {
    data: () => ({
    }),
    mounted() {
    this.initParticles()
  },
   methods: {
    initParticles() {
      window.particlesJS("particles-js", {
                "particles": {
                    "number": {
                        "value": 100,
                        "density": {
                            "enable": true,
                            "value_area": 500
                        }
                    },
                    "color": {
                        "value": "#ffffff"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        },
                        "polygon": {
                            "nb_sides": 5
                        },
                    },
                    "opacity": {
                        "value": 0.5,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 7,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#ffffff",
                        "opacity": 0.4,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 6,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                                "enable": true,
                                "mode": "grab"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 140,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200,
                            "duration": 0.4
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true
            })
    }
  }
}
</script>
<style scoped>

#particles-js {
  width: 100%;
  height: 100vh;
}
</style>
