<template>
    <div class="text-center">
        <v-select
        :label="getEmail"
        :items="items"
        dense
        hide-details
        left
        single-line
        class="shrink"
        v-model="selectedItem"
        ></v-select>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
    data() {
        return {
        selectedItem: "",
        items: [
            { text: "Scorp", router: "/" },
            { text: "Çıkış Yap", router: "/logout" },
        ],
        };
    },
    methods: {
        logOut() {
        this.$store.commit("destroyToken");
        // this.$store.dispatch("resetState");
        },
    },
    computed:{
        ...mapGetters(["loggedIn", "getEmail"]),
    },
    watch: {
        selectedItem() {
        if (this.selectedItem === "Çıkış Yap") {
            this.$store.dispatch("destroyToken");
        }
        },
    },
};
</script>
