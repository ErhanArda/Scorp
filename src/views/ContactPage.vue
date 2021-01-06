<template>
    <v-main>
        <v-container>
        <v-layout align-center justify-center>
            <v-flex xs12 md10>
                <ContactUs/>
            </v-flex>
        </v-layout>
        </v-container>
    </v-main>
</template>

<script>
import ContactUs from "../components/ContactUs"
export default {
    name: "Contactd",
    components:{
        ContactUs
    },
};
</script>

