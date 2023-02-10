<template>
  <v-app id="inspire">
  <v-app-bar app fixed dark elevation="1" extension-height="40">
      <v-container class="fill-height">
      <v-row class="align-center">
       <v-avatar
        class="mr-3"
        color="grey lighten-5"
        size="40"
      >
        <v-img
          contain
          max-height="70%"
          src="../src/assets/spider-web-logo.svg"
        ></v-img>
      </v-avatar>
      <v-toolbar-title>
          <v-btn text to="/" class="font-weight-bold headline notcaps">SpiderWeb</v-btn>
      </v-toolbar-title>
        <v-spacer/>
        <v-spacer/>
        <v-spacer/>
        <v-toolbar dark
      flat
      height="30px"
      >
        <v-toolbar-items>
         <v-btn href="../src/assets/files/Spiderweb_lightpaper.pdf" 
   target="_blank" download>Lightpaper</v-btn>
         <v-btn>Whitepaper</v-btn>
         <v-btn>Wiki</v-btn>
         <v-btn>  <v-icon
      medium
      color="orange darken-2"
    >
      mdi-git
    </v-icon></v-btn>
    <v-btn>
     <v-icon
      medium
      color="blue darken-2"
    >
      mdi-twitter
    </v-icon>
    </v-btn>
        <v-btn href="https://discord.com/channels/1043941145908101150/1043943171392024676"
        target="_blank"><v-icon
      medium
      color="blue darken-2"
    >
      mdi-discord
    </v-icon>
        </v-btn>
        <v-btn>
          Support
        </v-btn>
        </v-toolbar-items>
        </v-toolbar>
     </v-row>
      </v-container>
      <template #extension>
        <v-toolbar color="secondary" dark height="40px">
         <!-- <div v-for="routerlink in routerlinks" v-bind:key="routerlink.routerlink.value" class="d-none d-sm-flex">
          <v-btn small v-bind:key="routerlink.routerlink.value" :to="routerlink.routerlink.value" color="gray" text>
            {{ routerlink.routerlink.text }}
          </v-btn>
        </div> -->
          <v-btn
          dark
          small
          v-bind="attrs"
          v-on="on"
          color="gray" text
          :to="`/`"
        >
          HOME
        </v-btn>
         <v-menu offset-y dark>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          dark
          small
          v-bind="attrs"
          v-on="on"
          color="gray" text
        >
          PRODUCTS
        </v-btn>
      </template>
      <v-list>
        <v-list-item
        >
          <v-btn
          small
          dark
          v-bind:key="1"
          :to="'/products/AIMarketplace'"
          color="gray" 
        >
          AI Marketplace
        </v-btn>
        </v-list-item>
         <v-list-item
        >
          <v-btn
          small
          dark
          v-bind:key="1"
          :to="'\products\\AIMarketplace'"
          color="gray" 
        >
          Best-Model-Fit
        </v-btn>
        </v-list-item>
      </v-list>
      
    </v-menu>
    <v-btn
      dark
      small
      v-bind="attrs"
      v-on="on"
      color="gray" text
      :to="`/CreatorIDE`"
    >
      Creator IDE
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn
    dark
    small
    @click="connectWallet"
    color="gray" text
  >
  <v-icon
  medium
  color="orange darken-2"
>
mdi-wallet
</v-icon>
   {{ ConnectWalletButtonText }}
  </v-btn>
        </v-toolbar>
      </template>
    </v-app-bar>
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      shaped
    >
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-main class="blue-grey darken-4">
        <router-view />
    </v-main>
    <v-footer
      class="justify-center"
      color="#292929"
      height="100"
    >
      <div class="title font-weight-light grey--text text--lighten-1 text-center">
        &copy; {{ (new Date()).getFullYear() }} — SpiderWebAI, Inc. All Rights Reserved
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data: () => ({
    drawer: false,
    IsMetamakSupported: false,
            walletAddress:"",
            chainId:"",
            snackbar: false,
      text: 'Please install Metamask extension.',
      timeout: 4000,
      ConnectWalletButtonText : "Connect Wallet",
    links: [
      "AI Marketplace"
    ],
    icons: [
      "mdi-linkedin",
      "mdi-facebook",
      "mdi-twitter",
      "mdi-instagram",
    ],
    items: [
      "default",
      "absolute",
      "fixed",
    ],
    collapseOnScroll: true,
  }),
  onmounted(){
   
            //this.snackbar = window.ethereum !== "undefined";
        },
  methods:{
    async connectWallet() {

      if (typeof window.ethereum === "undefined" ) {
        this.text = 'Please install Metamask extension.',
          this.snackbar = true;
          return;
        }

      // if (typeof window.ethereum !== 'undefined') {
      //   this.text = 'Please install Metamask extension.',
      //     this.snackbar = true;
      //     return;
      //   }
        const accounts = await window.ethereum.request({method: "eth_requestAccounts"});
        this.walletAddress = accounts[0];
        this.snackbar = true;
        this.ConnectWalletButtonText = "Wallet Connected";

        this.chainId = await window.ethereum
          .request({
              method: "eth_chainId",
          })
          .then((chainData) => {
              return parseInt(chainData, 16);
          })
          .catch((ex) => {
              // 2.1 If the user cancels the login prompt
              throw Error(ex);
          });
        this.text = "Wallet connected successfully : " + this.walletAddress  + " Chain Id :" + this.chainId;
      }
  },
  computed: {
    localAttrs() {
      const attrs = {};
      if (this.variant === "default") {
        attrs.absolute = false;
        attrs.fixed = false;
      }
      else {
        attrs[this.variant] = true;
      }
      return attrs;
    },
    ...mapState({
      routerlinks: state => state.AppStore.routerlinks
    })
  },
}
</script>

<style>
.notcaps {
  text-transform: none !important;
}

</style> 