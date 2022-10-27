<template>
    <v-container>
        <section id="hero">
        <v-row no-gutters>
      <v-toolbar
          dark
          prominent
          src="../../assets/AIMarketplace.jpg"
          height="200"
        >
      <v-toolbar-title>
      <h3>AI Marketplace</h3>
      <p>A decentralized AI marketplace, uniting communities</p>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
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
      <v-col cols="4">
          <v-card
      class="mx-auto my-4"
    max-width="374"
        height="350"
    dark
  >
    <v-img
      src="../../assets/voice.jpg"
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
  </v-card>
    <v-card
      class="mx-auto my-12"
    max-width="374"
        height="350"
    dark
  >
    <v-img
      src="../../assets/machine-translation.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      Machine Translation
    </v-card-title>

    <v-card-subtitle>
Translate to and from any language..</v-card-subtitle>

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
  </v-card>
</v-col>
        <!-- </div> -->

        <v-col cols="4">
          <v-card
      class="mx-auto my-4"
    max-width="374"
        height="350"
    dark
  >
    <v-img
      src="../../assets/text-generation.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
Text Generation</v-card-title>

    <v-card-subtitle>
      Service to generate texts...
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
  </v-card>
    <v-card
      class="mx-auto my-12"
    max-width="374"
        height="350"
    dark
  >
    <v-img
      src="../../assets/geo-location.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      Geo location serivce
    </v-card-title>

    <v-card-subtitle>
Service to find shortest distance between points...</v-card-subtitle>

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
  </v-card>
</v-col>
<!-- third row -->
<v-col cols="4">
          <v-card
      class="mx-auto my-4"
    max-width="374"
        height="350"
    dark
  >
    <v-img
      src="../../assets/weather-forecast.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      Weather Forecast
    </v-card-title>

    <v-card-subtitle>
Service to predict weather forecast...</v-card-subtitle>

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
  </v-card>
    <v-card
      class="mx-auto my-12"
    max-width="374"
        height="350"
    dark
  >
    <v-img
      src="../../assets/image-enhancements.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      Image Enhancements
    </v-card-title>

    <v-card-subtitle>
Service to enhance images for e.g. sharpness, contrast, etc.</v-card-subtitle>
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
  </v-card>
</v-col>
</v-row>
    </v-container>

    </v-container>
</template>
<script>
    export default{
        name : 'AIMarketplace'
    }
</script>