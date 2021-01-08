<template>
    <div>
        <v-app-bar app flat>
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

            <div id="nav">
                <router-link
                v-for="(link, i) in $t('main.links')"
                :key="i"
                :to="`${link.route}`"
                class="text-decoration-none"
                ><v-btn v-bind="link" class="hidden-sm-and-down " text>
                    {{ link.text }}
                </v-btn></router-link
                >
            </div>            
                <LanguageSelect/>
            <v-col cols="1"  v-if="!loggedIn">
                <LoginModal/>
            </v-col>
            <v-col cols="2" class="ml-1" v-else>
                <DropDown/>
            </v-col>
            </v-row>
        </v-container>
        <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer" />
    </v-app-bar>
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
    </v-navigation-drawer></div>

</template>

<script>
import {mapGetters} from 'vuex'
import LoginModal from "./LoginModal"
import LanguageSelect from "./LanguageSelect"
import DropDown from "./DropDown"
export default {
    components: {
        LoginModal,
        LanguageSelect,
        DropDown
    },
    data() {
        return {
        drawer: false,
        };
    },
    
    computed:{
        ...mapGetters(["loggedIn"]),
    },
    watch: {
        group() {
        this.drawer = false;
        },
    },
};
</script>

<style></style>
