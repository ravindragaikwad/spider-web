<template>
    <v-container>
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
    </v-toolbar>
          <v-tabs v-model="tab" dark show-arrows>
            <v-tab>
              Pretrained Models
            </v-tab>
            <v-tab>
              Tailored Models
            </v-tab>
          </v-tabs>
          <v-container fluid> 
          <v-tabs-items v-model="tab" dark>
                <v-tab-item>
                    <PreTrainedModels></PreTrainedModels>
                </v-tab-item>
                <v-tab-item>
                    <TailoredModels></TailoredModels>
                </v-tab-item>
          </v-tabs-items>
        </v-container>
        </v-row>
      </v-container>
</template>
<script>
import PreTrainedModels from "./PreTrainedModels/PreTrainedModels.vue"
import TailoredModels from "./TailoredModels/TailoredModels.vue"

    export default{
        name : 'AIMarketplace',
        components : {
          PreTrainedModels,
          TailoredModels
        },
        data() {
        return {
            tab: null,
        }
      }
    }
</script>