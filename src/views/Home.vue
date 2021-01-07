<template>
  <v-app>
    <v-main>
      <div class="Scorp">
        <v-container>
          <h1>Scorp</h1>
          <h2 v-if="loggedIn">
            {{ $t("main.welcome", { visitor: `${fullName}` }) }}
          </h2>
          <p>{{ $t("main.mainText") }}</p>
        </v-container>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import LanguageSelect from "../components/Navbar/LanguageSelect";

export default {
  name: "Scorp",
  components: {
    LanguageSelect
  },
  computed: {
    ...mapGetters(["loggedIn", "email", "fullName"]),
  },
};
</script>
