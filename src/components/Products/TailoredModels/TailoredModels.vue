<template>
    <v-container dark>
        <v-row>
            <v-col cols="3">
                <v-combobox
                v-model="select"
                :items="SearchComboItems"
                label="Sory By:"
                outlined
                dense
              ></v-combobox>
            </v-col>
            <v-col cols="3">
                <v-combobox
                v-model="select"
                :items="OrgComboItems"
                label="Organization:"
                outlined
                dense
              ></v-combobox>
            </v-col>
            <v-col cols="6">
                <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                  </v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-card v-for="(item, modelId) in cards"
            v-bind:key="modelId"
            class="mx-auto ma-2"
            max-width="374"
            height="300"
            dark
            >
            <v-img
              :src="item.image"
              height="125px"
            ></v-img>
        <v-card-title>{{item.title}}</v-card-title>
        <v-card-subtitle>{{item.subTitle}}</v-card-subtitle>
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
          >
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
          </v-btn>
          <v-checkbox label="Compare" v-model="compareArray">
          </v-checkbox>
        </v-card-actions>
            </v-card>
    </v-row>
    </v-container>
</template>
<script>
import imgVoice from '../../../assets/voice.jpg';
import imgText from '../../../assets/text-generation.jpg';
import imgGeo from '../../../assets/geo-location.jpg';
import imgWeather from '../../../assets/weather-forecast.jpg';
import imgMachineTranslation from '../../../assets/machine-translation.jpg';
import imgImageEnhancements from '../../../assets/image-enhancements.jpg';

  export default {
    data: () => ({

        compareArray: [],
        cards : [
        {
            modelId: 1,
          title : "Real time voice cloning",
          subTitle : "Service to clone voices...",
          image : imgVoice
        },
        {
            modelId : 2,
          title : "Geo location serivce",
          subTitle : "Service to find shortest distance between points...",
          image : imgGeo
        },
        {
            modelId : 3,
          title : "Text Generation",
          subTitle : "Service to generate texts...",
          image : imgText
        },
        {
            modelId : 4,
          title : "Weather Forecast",
          subTitle : "Service to predict weather forecast...",
          image : imgWeather
        },
        {
            modelId : 5,
          title : "Machine Translation",
          subTitle : "Translate to and from any language...",
          image : imgMachineTranslation
        },
        {
            modelId : 6,
          title : "Image Enhancements",
          subTitle : "Service to enhance images for e.g. sharpness, contrast, etc.",
          image : imgImageEnhancements
        },
        
      ],
        SearchComboItems: [
          'Name',
        ],
        OrgComboItems: [
          'All',
          'Snet'
        ],
    }),
  }
</script>