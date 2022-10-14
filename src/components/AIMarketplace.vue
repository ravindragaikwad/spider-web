<template>
    <v-container>
        <section id="hero">
        <v-row no-gutters>
          <v-img
            :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
            src="../assets/AIMarketplace.jpg"
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
                      :class="[$vuetify.breakpoint.smAndDown ? 'display-2': 'display-3']"
                      class="font-weight-light"
                    >
                      AI Marketplace
                    </span>
                  </v-col>
                  <!-- <v-row align="center"  justify="center">
                    <v-col cols="3">
                      <v-btn
      class="ma-2"
      outlined
      color="white"
    >
      
    </v-btn>
                    </v-col>
                    <v-col cols="3">
                      <v-btn
      class="ma-2"
      outlined
      color="white"
    >
      Tailored Models
    </v-btn>
                    </v-col>
                  </v-row> -->
                </v-row>
              </v-container>
            </v-theme-provider>
          </v-img>
          <v-tabs>
            <v-tab>
              Pretrained Models
            </v-tab>
            <v-tab>
              Tailored Models
            </v-tab>
          </v-tabs>
        </v-row>
      </section>
    <v-container fluid>
      <v-row dense class="pa-2">
        <div v-for='index in 9' :key='index'>
        <v-col>
          <v-card
    class="mx-auto pa-2"
    max-width="344"
  >
    <v-img
      src="../assets/voice.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      Real time voice cloning
    </v-card-title>

    <v-card-subtitle>
      Service to clone voices...
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</v-col>
        </div>
</v-row>
    </v-container>

    </v-container>
</template>
<script>
    export default{
        name : 'AIMarketplace'
    }
</script>