<template>
  <v-col cols="2" class="ml-1">
    <v-select
      @change="switchLocale"
      v-model="lang"
      :items="languages"
      item-text="name"
      item-value="id"
      dense
      hide-details
      left
      single-line
      class="shrink"
    >
    </v-select>
  </v-col>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      languages: [
        { id: "tr", name: "TR" },
        { id: "en", name: "EN" },
      ],
      lang: "en",
    };
  },
  methods: {
    switchLocale() {
      if (this.$i18n.locale !== this.lang) {
        this.$i18n.locale = this.lang;
      } else {
        this.$i18n.locale = "tr";
      }
    },
  },
  // computed: {
  //   change: {
  //     get() {
  //       return this.$store.getters.getLang;
  //     },
  //     set(value) {
  //       return this.$store.commit("setLang", value);
  //     },
  //   },
  // },
};
</script>
