<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
          {{ $t("main.login") }}
        </v-btn>
        <v-spacer></v-spacer>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          <!-- <v-row>
                <v-col></v-col>
                <v-col> <LanguageSelect /></v-col>
                </v-row> -->
          <v-col md="4">
            <h4>{{ $t("main.login") }}</h4>
          </v-col>
          <v-col sm="2" class="ml-auto"> </v-col>
          <LanguageSelect />
        </v-card-title>

        <v-card-text>
          <v-form v-model="isValid">
            <v-text-field
              prepend-icon="mdi-account"
              name="email"
              label="E-Posta"
              type="text"
              v-model="email"
              :rules="emailRules"
              outlined
              dense
              required
              block
            >
            </v-text-field>
            <v-text-field
              prepend-icon="mdi-lock"
              name="password"
              label="Şifre"
              :type="value ? 'password' : 'text'"
              v-model="password"
              :rules="passwordRules"
              outlined
              dense
              required
              block
              @click:append="() => (value = !value)"
              :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
            >
            </v-text-field>
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
      </v-card>
      <v-card-actions>
        <v-btn
          color="primary"
          @click.prevent="login()"
          :disabled="!isValid"
          block
        >
          {{ $t("main.login") }}
          <v-progress-circular
            v-if="getLoader"
            indeterminate
            color="amber"
          ></v-progress-circular>
        </v-btn>
      </v-card-actions>
    </v-dialog>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import LanguageSelect from "./LanguageSelect";
export default {
  components: {
    LanguageSelect,
  },
  data() {
    return {
      dialog: false,
      email: "",
      password: "",
      error: false,
      value: true,
      isValid: true,
      checkbox: false,
      required: (value) => !!value || "Required.",

      emailRules: [
        (v) => !!v || "E-mail adresinizi giriniz.",
        (v) => /.+@.+/.test(v) || "Geçerli bir E-Posta adresi giriniz",
      ],
      passwordRules: [
        (v) => !!v || "Şifrenizi giriniz",
        (v) => (v && v.length >= 5) || "Şifreniz 5 karakterden fazla olmalıdır",
      ],
    };
  },

  methods: {
    login() {
      this.$store.dispatch("retrieveToken", {
        email: this.email,
        password: this.password,
      });

      console.log({
        email: this.email,
        password: this.password,
      });
    },
  },
  computed: {
    ...mapGetters(["getLoader"]),
  },
};
</script>
