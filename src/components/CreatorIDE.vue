<template>
    <v-container>
        <v-row no-gutters>
      <v-toolbar
          dark
          prominent
          src="../assets/creatoride-background.jpg"
          height="200"
        >
      <v-toolbar-title>
        <!-- <v-img
        src="../assets/spider-web-logo.svg"
        dark
        height="40"
        width="40"
        >
        </v-img> -->
      <h2>Creator Zone</h2>
      <p>Start in seconds! Connect your crypto wallet to start monetizing your model.</p>
      <p>No registration needed.</p>
      </v-toolbar-title>
    </v-toolbar>
          <v-tabs v-model="tab" dark show-arrows>
            <v-tab>
              Upload your model
            </v-tab>
          </v-tabs>
          <v-container fluid> 
          <v-tabs-items v-model="tab" dark>
                <v-tab-item>
                    <UploadModel></UploadModel>
                </v-tab-item>
          </v-tabs-items>
        </v-container>
        </v-row>
      </v-container>
</template>
<script>
import UploadModel from "./UploadModel.vue"

    export default{
        name : 'CreatorIDE',
        components : {
            UploadModel,
        },
        data() {
        return {
            tab: null,
        }
      }
    }
</script>