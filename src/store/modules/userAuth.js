import axios from "axios";
import router from "../../router"

// const getDefaultState = () => {
//     return {
//         token: localStorage.getItem("token") || null,
//         isLoginLoading: false,
//         email: "",
//         userName:'Eve',
//         userSurname:"Holt"
//     };
// };


export default {
    state: {
        token: localStorage.getItem("token") || null,
        isLoginLoading: false,
        email: "",
        userName:'Eve',
        userSurname:"Holt"
    },
    // state : getDefaultState(),    

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
        setEmail: (state, email) => {
            state.email = email
        },
        // resetState(state) {
        //     Object.assign(state, getDefaultState());
        // },
    },
    getters: {
        loggedIn(state) {
            if (state.token && state.token !== null) {
                return true;
            } else {
                return false;
            }
        },
        getEmail(state) {
            return state.email
        },
        getLoader(state) {
            return state.isLoginLoading
        },
        fullName(state){
            return `${state.userName} ${state.userSurname} `
        },
        setName(state){
            return state.userName 
        },
        setSurname(state){
            return state.userSurname 
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
            router.push("/");
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
                        context.commit("setEmail", credentials.email)
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
