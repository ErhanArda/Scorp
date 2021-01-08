<template>
    <v-navigation-drawer v-model="drawer" absolute dark temporary>
        <v-list nav dense>
        <v-list-item-group v-model="group">
            <v-list-item v-for="(link, index) in $t('main.links')" :key="index">
            <router-link :to="`${link.route}`" class="text-decoration-none"
                ><v-list-item-title class="white--text">{{
                link.text
                }}</v-list-item-title></router-link
            >
            </v-list-item>
        </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    props: ["drawer"],
    watch: {
        group() {
        this.drawer = false;
        },
    },
};
</script>

<style lang="scss" scoped></style>
