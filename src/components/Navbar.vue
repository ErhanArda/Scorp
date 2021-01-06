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
            <v-toolbar-title>Scorp</v-toolbar-title>

            <v-spacer />
            <!-- 
                        <v-text-field
                            append-icon="mdi-magnify"
                            flat
                            hide-details
                            solo-inverted
                            style="max-width: 300px;"
                        /> -->
            <div id="nav">
                <router-link
                v-for="(link, i) in links"
                :key="i"
                :to="`${link.route}`"
                class="text-decoration-none"
                ><v-btn v-bind="link" class="hidden-sm-and-down " text>
                    {{ link.text }}
                </v-btn></router-link
                >
            </div>
            <v-col sm="2" md="2" lg="2" xl="2">
                <v-select
                v-model="select"
                :items="items"
                item-text="language"
                label="Select"
                persistent-hint
                return-object
                single-line
                >
                </v-select>
            </v-col>
            <v-col cols="1" class="ml-1">
                <!-- loggedIn ? "Login" : none -->
                <LoginModal/>
            </v-col>
            </v-row>
        </v-container>
    </v-app-bar>

    <NavigationDrawer :links="links" :drawer="drawer" />
</div>
</template>

<script>
import {mapGetters} from 'vuex'
import NavigationDrawer from "./NavigationDrawer";
import LoginModal from "./LoginModal"
export default {
    components: {
        NavigationDrawer,
        LoginModal
    },
    data() {
        return {
        drawer: false,
        select: { language: "Eng" },


        // links: [
        //     { text: "Home", route: "/" },
        //     { text: "About", route: "/about" },
        // ],
        items: [{ language: "Eng" }, { language: "Tur" }],
        };
    },
    computed:{
        ...mapGetters(["links"])
    }
};
</script>

<style></style>
