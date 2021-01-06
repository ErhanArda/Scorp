<template>
    <div>
        <v-app-bar app flat>
        <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer" />
        <v-container class="mx-auto py-0">
            <v-row align="center">
            <v-img
                :src="require('@/assets/logo.png')"
                class="mr-5"
                contain
                height="48"
                width="48"
                max-width="48"
            />

            <div id="nav">
                <router-link  v-for="(link, i) in links"
                    :key="i" :to="`${link.route}`"
                    class="text-decoration-none"
                ><v-btn
                    v-bind="link"
                    class="hidden-sm-and-down "
                    text
                >
                    {{ link.text }}
                </v-btn></router-link
                >
            </div>
            <v-spacer />

            <v-text-field
                append-icon="mdi-magnify"
                flat
                hide-details
                solo-inverted
                style="max-width: 300px;"
            />
            </v-row>
        </v-container>
        </v-app-bar>

        <NavigationDrawer :links="links" :drawer="drawer"/>
    </div>
</template>

<script>
import NavigationDrawer from "./NavigationDrawer"
export default {
    components:{
        NavigationDrawer
    },
    data() {
        return {
        drawer: false,
        links: [
            { text: "Home", route: "/" },
            { text: "About", route: "/about" },
        ],
        };
    }
};
</script>

<style></style>
