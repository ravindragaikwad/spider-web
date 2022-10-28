<template>
    <v-container fluid>
        <v-row>
        <v-card v-for="(item, index) in cards"
        v-bind:key="index"
        class="mx-auto ma-2"
        max-width="374"
        height="300"
        dark
        >
        <v-img
          :src="item.image"
          height="150px"
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
    data: () =>({
      cards : [
        {
          title : "Real time voice cloning",
          subTitle : "Service to clone voices...",
          image : imgVoice
        },
        {
          title : "Geo location serivce",
          subTitle : "Service to find shortest distance between points...",
          image : imgGeo
        },
        {
          title : "Text Generation",
          subTitle : "Service to generate texts...",
          image : imgText
        },
        {
          title : "Weather Forecast",
          subTitle : "Service to predict weather forecast...",
          image : imgWeather
        },
        {
          title : "Machine Translation",
          subTitle : "Translate to and from any language...",
          image : imgMachineTranslation
        },
        {
          title : "Image Enhancements",
          subTitle : "Service to enhance images for e.g. sharpness, contrast, etc.",
          image : imgImageEnhancements
        },
        
      ]
    })
  }
</script>