<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="black"
      height="70"
      dark
    >
    <v-app-bar-nav-icon @click="drawer = true" class="d-flex d-sm-none"></v-app-bar-nav-icon>
      <v-avatar
        class="mr-3"
        color="grey lighten-5"
        size="50"
      >
        <v-img
          contain
          max-height="70%"
          src="../src/assets/logo.svg"
        ></v-img>
      </v-avatar>

      <v-toolbar-title class="font-weight-bold headline">
        SpiderWeb
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div v-for="routerlink in routerlinks" v-bind:key="routerlink.routerlink.value" class="d-none d-sm-flex">
          <v-btn small v-bind:key="routerlink.routerlink.value" :to="routerlink.routerlink.value" color="gray" text>
            {{ routerlink.routerlink.text }}
          </v-btn>
        </div>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item v-for="(routerlink, index) in routerlinks" v-bind:key="index">
            <!-- <v-list-item-title @click="tab = index"> {{ routerlink.routerlink.text }}
            </v-list-item-title> -->
            <v-btn small v-bind:key="routerlink.routerlink.value" :to="routerlink.routerlink.value" color="gray" text>
              {{ routerlink.routerlink.text }}
            </v-btn>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main class="blue-grey darken-4">
        <router-view />
    </v-main>
    <v-footer
      class="justify-center"
      color="#292929"
      height="100"
    >
      <div class="title font-weight-light grey--text text--lighten-1 text-center">
        &copy; {{ (new Date()).getFullYear() }} — SpiderWeb
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data: () => ({
    drawer: false,
    links: [
      // "Payroll & HR",
      // "Application Development",
      // "Technlogies",
      // "Careers",
      // "Contact Us"
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
<!-- <style>
h4 {
    font-weight: bold;
    color: rgb(0, 110, 255);
}
h2 {
    font-weight: bold;
    color: rgb(0, 110, 255);
}
strong {
    font-weight: bold;
    color: rgb(0, 110, 255);
}
p {
    text-align: justify;
}
</style> -->