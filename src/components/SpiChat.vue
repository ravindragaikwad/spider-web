<template>
    <v-container>
        <v-row no-gutters>
      <v-toolbar
          dark
          prominent
          src="../assets/AIMarketplace.jpg"
          height="200"
        >
      <v-toolbar-title>
        <v-img
        src="../assets/spider-web-logo.svg"
        dark
        height="80"
        width="80"
        >
        </v-img>
      <h3>Spi Chat</h3>
      <p>An AI Powered Chat Bot to identify the best Artificial Initelligence services or Models for your usecase.</p>
      </v-toolbar-title>
    </v-toolbar>
          <!-- <v-tabs v-model="tab" dark show-arrows>
            <v-tab>
AI/ML Services
            </v-tab>
            <v-tab>
AI/ML Tools            </v-tab>
          </v-tabs> -->
          <!-- <v-container fluid> 
          <v-tabs-items v-model="tab" dark>
                <v-tab-item>
                    <PreTrainedModels></PreTrainedModels>
                </v-tab-item>
                <v-tab-item>
                    <TailoredModels></TailoredModels>
                </v-tab-item>
          </v-tabs-items>
        </v-container> -->
        <v-text-field
        label="Search"
        outlined
      ></v-text-field>
        </v-row>
      </v-container>
</template>
<script>
    export default{
        name : 'AIMarketplace',
        components : {
        },
        data() {
        return {
            tab: null,
        }
      }
    }
</script>