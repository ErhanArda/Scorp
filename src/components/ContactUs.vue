<template>
    <div class="text-center">
            <v-form ref="form" v-model="user.isValid" lazy-validation>
                <v-alert color="error" :value="err" dark>Try Again</v-alert>
                <v-row align-center justify-center>
                    <v-col cols="12" md="6">
                    <v-text-field
                        name="name"
                        label="Name"
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
                        label="Surname"
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
                        label="Email"
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
                        name="cellPhone"
                        label="Cell Phone"
                        outlined
                        dense
                    ></v-text-field>
                    </v-col>
                </v-row>
                <v-select
                    v-model="user.selectedCountries"
                    :items="countries"
                    item-text="name"
                    item-value="id"
                    name="Countries"
                    label="Countries"
                    outlined
                    dense
                >
                </v-select>
                <!-- <v-textarea color="cyan" outlined label="Adres Detayı"></v-textarea> -->
                <v-textarea
                    color="cyan"
                    label="Adres Detayı"
                    name="address"
                    v-model="user.address"
                    dense
                    outlined
                    required
                ></v-textarea>
                <v-btn
                    @click="register"
                    :disabled="enableSignUp()"
                    color="primary"
                    block
                    >Save</v-btn
                >
            </v-form>
        </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    data() {
        return {
        err: false,
        user:{
            name: "",
            surname: "",
            email:  "",
            countries:null,
            address: null,
            selectedCountries: null,
            isValid: false,
            terms: false,
            mobilePhone: null,
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
        };
    },
    methods: {
        enableSignUp() {
        let testEmail = /.+@.+\..+/.test(this.user.email);
        if (
            this.user.name.length > 0 &&
            this.user.surname.length > 0 &&
            this.user.mobilePhone !== null &&
            testEmail
        ) {
            return false;
        }
        return true;
        },
        register() {
        if (this.valid()) {
        alert("Hello")
        }}
    },
    computed:{
        ...mapGetters(["loggedIn", "getEmail","setName","setSurname"]),
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
