<template>
  <v-app>
    <v-main>
      <div class="Scorp">
        <v-container>
          <h1>About Page</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut
            tortor tellus. Donec maximus curs us pulvinar. Proin vehicula eros
            mauris, sit amet rutrum libero vestibulum ac. Morbi ullamcorper eu
            lacus vulputate consect. Etur vivamus sagittis accumsan quam eu
            malesuada. Proin et ante vel libero ultrices cursus. Donec felis
            leo, cu rsus eget hendrerit at, congue nec enim.
          </p>
        </v-container>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Scorp",
  computed: {
    ...mapGetters(["loggedIn", "email"]),
    info() {
      if (this.email) {
        let userName = "Eve Holt";
        return userName;
      }
    },
  },
};
</script>
