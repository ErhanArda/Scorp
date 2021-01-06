<template>
  <v-app>
    <Navbar />
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Home from "./views/Home";
import About from "./views/About";
import Navbar from "./components/Navbar";
import Footer from './components/Footer'

export default {
  name: "App",

  components: {
    Home,
    About,
    Navbar,
    Footer
  },
};
</script>
