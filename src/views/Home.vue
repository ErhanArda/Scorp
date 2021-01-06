<template>
  <v-app>
    <v-main>
      <div class="home">
        <h1>Scorp</h1>
        <h2 v-if="loggedIn">Welcome {{info}}</h2>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Home",

  methods: {
    about() {
      this.$router.push("/about");
    },
  },
  computed: {
    ...mapGetters(["loggedIn", "email"]),
    info() {
      if(this.email){
        let userName = "Eve Holt" 
        return userName
      }
    },
  }
};
</script>
