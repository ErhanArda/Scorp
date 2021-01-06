<template>
  <v-app>
    <v-main>
      <div class="home">
        <h1>Home</h1>
        <v-btn @click="about">about</v-btn>
      </div>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: "Home",

  methods: {
    about() {
      this.$router.push("/about");
    },
  },
};
</script>
