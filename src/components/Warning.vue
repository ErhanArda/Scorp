<template>
  <v-card class="d-flex align-center ">
    <v-container>
      <v-row>
        <v-card-title class="subtitle">
          <div>
            <v-alert dense text type="success">
           {{ $t("main.contactAlert", { visitor: `${userName}` })}}
            </v-alert>
          </div>
        </v-card-title>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
    props:["userName"]
};
</script>

