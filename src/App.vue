<template>
  <v-app>
    <Navbar />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Home from "./views/Home";
import About from "./views/About";
import Navbar from "./components/Navbar";

export default {
  name: "App",

  components: {
    Home,
    About,
    Navbar
  },
};
</script>
