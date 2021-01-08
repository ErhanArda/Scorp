<template>
    <div class="text-center">
        <v-select
        :label="getEmail"
        :items=" $t('main.dropDown')"
        item-value="id"
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
        if (this.selectedItem === 1 ) {
            this.$store.dispatch("destroyToken");
        }
        },
    },
};
</script>
