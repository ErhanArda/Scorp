export default {
    state:{
        links: [
            { text: "Home", route: "/" },
            { text: "About", route: "/about" },
        ],

    },
    getters: {
        links(state){
            return state.links
        },
    },
    actions: {}

}