<template>
  <v-app>
    <v-main>
      <div class="Scorp">
        <v-container>
          <h1>Scorp</h1>
          <h2 v-if="loggedIn">Welcome {{ fullName }}</h2>

          <p>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>

          <!-- Lorem Ipsum nedir? Lorem Ipsum, baskı ve dizgi endüstrisinin basit bir
          metnidir. Lorem Ipsum, bilinmeyen bir matbaacının bir dizi çeşidini
          alıp bir tür numune kitabı yapmak için karıştırdığı 1500'lerden beri
          endüstrinin standart kukla metni olmuştur. Sadece beş yüzyıl boyunca
          hayatta kalmadı, aynı zamanda elektronik dizgiye sıçradı ve esasen
          değişmeden kaldı. 1960'larda Lorem Ipsum pasajlarını içeren Letraset
          sayfalarının yayınlanmasıyla ve yakın zamanda Aldus PageMaker gibi
          Lorem Ipsum sürümleri de dahil olmak üzere masaüstü yayıncılık
          yazılımlarıyla popüler hale geldi. -->
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
    ...mapGetters(["loggedIn", "email","fullName"]),
  },
};
</script>
