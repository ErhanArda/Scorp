export default {
    state:{
        links: [
            { text: "Home", route: "/" },
            { text: "About", route: "/about" },
            { text: "Contact Us", route: "/contact" },
        ],

    },
    getters: {
        links(state){
            return state.links
        },
    },
    actions: {}

}