<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Home from "./views/Home";
import About from "./views/About";


export default {
  name: "App",

  components: {
    Home,
    About,
  }
};
</script>
