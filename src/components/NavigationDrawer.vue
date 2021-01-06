<template>
    <v-navigation-drawer app dark v-model="drawer">
        <v-list>
        <v-list-item v-for="link in links" :key="link.text">
            <router-link :to="`${link.route}`" class="text-decoration-none"
            ><v-list-item-title class="white--text">{{
                link.text
            }}</v-list-item-title></router-link
            >
        </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    props: ["drawer", "links"],
};
</script>

<style lang="scss" scoped></style>
