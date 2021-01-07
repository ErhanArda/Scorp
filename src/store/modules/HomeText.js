// import axios from "axios";

// export default {
//     state: {
//         message:"",
//         lang: "en"
//     },

//     mutations: {
//         setMessage(state,message){
//             state.message = message
//         },
//         setLang(state,lang){
//             state.lang = lang
//         }
//     },
//     getters: {
//         getMessage(state){
//             return state.message
//         },
//         getLang(state){
//             return state.lang
//         }
//     },

//     actions: {
//         bodyPost({commit}){
//             axios.get('Posts').then(response => {
//                 console.log(response.data)
//                 let message = response.data
//                 commit("setMessage",message)
//             })
//         }
//     }
// }
