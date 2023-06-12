import Vue from "vue";
import Vuex from "vuex";
import users from "./users";
import offers from "./offers";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        users,
        offers,
    },
});

export default store;