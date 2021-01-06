import axios from "axios";

export default {
    state: {
        token: localStorage.getItem("token") || null,
        isLoginLoading: false,
        email:"",
    },
    mutations: {
        retrieveToken(state, token) {
            state.token = token;
        },
        destroyToken(state) {
            state.token = null;
        },
        setAuthLoading: (state, status) => {
            state.isLoginLoading = status;
        },
        setEmail: (state,email) => {
            state.email = email
        }
    },
    getters: {
        loggedIn(state) {
            if (state.token && state.token !== null) {
                return true;
            } else {
                return false;
            }
        },
        email(state){
            return state.email
        },
        getLoader(state) {
            return state.isLoginLoading
        }
    },

    // {
    //     "email": "eve.holt@reqres.in",
    //     "password": "cityslicka"
    // }
    actions: {
        destroyToken(context) {
            localStorage.clear();
            context.commit("destroyToken");
            },
        retrieveToken(context, credentials) {
            context.commit('setAuthLoading', true)
            return new Promise((resolve, reject) => {
                axios
                    .post(`https://reqres.in/api/login`, {
                        email: credentials.email,
                        password: credentials.password,
                    })
                    .then((response) => {
                        context.commit('setAuthLoading', false)
                        const token = response.data.token;
                        localStorage.setItem("token", token);
                        context.commit("retrieveToken", token);
                        context.commit("setEmail",credentials.email)
                        console.log("token: ", token);
                        resolve(response);
                        axios.defaults.headers.common["Authorization"] = token;
                    })
                    .catch((error) => {
                        context.commit('setAuthLoading', false)
                        console.log(error);
                        reject(error);
                        this.error = true;
                        alert("User e-mail & password error")
                    });
            });
        },
    }
}
