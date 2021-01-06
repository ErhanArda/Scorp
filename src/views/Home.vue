<template>
  <v-app>
    <Navbar />
    <v-main>
      <div class="home">
        <h1>Home</h1>
        <v-btn @click="about">about</v-btn>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "../components/Navbar";

export default {
  name: "Home",
  components:{
    Navbar
  },
  methods: {
    about() {
      this.$router.push("/about");
    },
  },
};
</script>
