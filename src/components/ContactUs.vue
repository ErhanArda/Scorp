<template>
    <div class="text-center">
            <v-form ref="form" v-model="isValid" lazy-validation>
                <v-alert color="error" :value="err" dark>Try Again</v-alert>
                <v-row align-center justify-center>
                    <v-col cols="12" md="6">
                    <v-text-field
                        name="name"
                        :label="$t('main.contactName')"
                        v-model="user.name"
                        :rules="nameRules"
                        outlined
                        dense
                        required
                    ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                    <v-text-field
                        name="surname"
                        :label="$t('main.contactSurname')"
                        v-model="user.surname"
                        :rules="SurNameRules"
                        outlined
                        dense
                        required
                    ></v-text-field>
                    </v-col>
                </v-row>
                <v-row align-center justify-center>
                    <v-col cols="12" md="6">
                    <v-text-field
                        name="email"
                        :label="$t('main.contactEmail')"
                        v-model="user.email"
                        :rules="emailRules"
                        outlined
                        dense
                        required
                    ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                    <v-text-field
                        v-model="user.mobilePhone"
                        :rules="mobilePhoneRules"
                        name="cellPhone"
                        :label="$t('main.cellPhone')"
                        v-mask="'###########'"
                        outlined
                        dense
                    ></v-text-field>
                    </v-col>
                </v-row>
                <v-autocomplete
                    v-model="user.country_code"
                    :items="$t('main.countriesSelect')"
                    item-text="name"
                    item-value="id"
                    flat
                    :label="$t('main.countries')"
                    solo-inverted
                ></v-autocomplete>
                <v-textarea
                    color="cyan"
                    :label="$t('main.cUs')"
                    :rules="messageRules"
                    v-model="user.message"
                    dense
                    outlined
                    required
                ></v-textarea>
                <v-btn
                    @click="sendData"
                    :disabled="enableSignUp()"
                    color="primary"
                    block
                    >{{$t('main.send')}}</v-btn
                >
            </v-form>
            <v-dialog
            v-model="listingDialog"
            persistent
            overlay-opacity="0.75"
            max-width="360px">
            <Warning :userName="userName"/>
        </v-dialog>
        </div>
</template>

<script>
import { mapGetters } from 'vuex';
import axios from 'axios'
import Warning from './Warning'

export default {
    components:{ 
        Warning
        },
        data() {
        return {
        err: false,
        isValid: false,
        listingDialog: false,
        userName:"",
        user:{
            name: "",
            surname: "",
            email:  "",
            mobilePhone: "",
            country_code: "",
            message: "",
        },
        countries:[
            { id: "TR", name: "Turkey" },
            { id: "US", name: "United States of America" },
            { id: "GB", name: "United Kingdom" },
            { id: "DE", name: "Germany" },
            { id: "SE", name: "Sweden" },
            { id: "KE", name: "Kenya" },
            { id: "BR", name: "Brazil" },
            { id: "ZW", name: "Zimbabwe" }

        ],
        validate: true,
        show: false,

        nameRules: [
            (v) => !!v || "Please enter your name ",
            (v) => (v && v.length <= 10) || " Name must be less than 10 characters",
        ],
        SurNameRules: [
            (v) => !!v || "Please enter your surname",
            (v) => (v && v.length <= 10) || "Surname must be less than 10 characters",
        ],
        emailRules: [
            (v) => !!v || "Please enter your e-mail",
            (v) => /.+@.+\..+/.test(v) || "Enter a valid email",
        ],
        mobilePhoneRules: [
            (v) => !!v || "Please enter your cell phone number",
            (v) => (v && v.length <= 11) ,
        ],
        messageRules: [
            (v) => !!v || "Please enter your message",
            (v) => (v && v.length > 10) || "Message must be more than 10 characters",
        ],
        };
    },
    methods: {
        enableSignUp() {
        let testEmail = /.+@.+\..+/.test(this.user.email);
        if (
            this.user.name !== "" &&
            this.user.surname !== "" > 0 &&
            this.user.mobilePhone !== null &&
            this.user.country_code !== null &&
            this.user.message.length > 10 &&
            testEmail
        ) {
            return false;
        }
        return true;
        },
        sendData(){
            axios.post('contactMessages',this.user).then(contact_message => {
                console.log("contact_message",contact_message)
                if(contact_message.status === 201){
                    console.log(contact_message)
                                this.succes;

                }
                this.user = {
                    name: "",
                    surname: "",
                    email:  "",
                    mobilePhone: "",
                    country_code: "",
                    message: "",
                }
            })
        }
    },
    computed:{
        ...mapGetters(["loggedIn", "getEmail","setName","setSurname"]),

        async succes() {
        this.listingDialog = true;
        this.userName = this.user.name
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve((this.listingDialog = true)), 2000);
        });
        await promise;
        this.$router.push("/");
        },
    },
    mounted(){
        if(this.loggedIn){
            this.user.name = this.setName
            this.user.surname = this.setSurname
            this.user.email = this.getEmail
        }
    }
};
</script>

<style>
.hidden {
    display: none;
}
</style>
