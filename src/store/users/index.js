import axios from "axios";
import Cookies from 'js-cookie';

const endpoint = "http://localhost:3000";

export default {
    namespaced: true,
    state() {
        return {
            user: {},
            error: null,
            isAuthenticated: false,
        };
    },
    mutations: {
        setUser(state, data) {
            state.user = data;
        },
        setError(state, error) {
            state.error = error;
        },
        setAuth(state, payload) {
            state.isAuthenticated = payload;
        },
    },
    actions: {
        async login({ commit }, payload) {
            const response = await axios.post(endpoint + "/login/", payload);

            if (response.status === 201) {
                const responseData = response.data;
                Cookies.set('user', { ...responseData.data, isAuthenticated: true });
                commit("setUser", responseData.data);
                commit("setAuth", true);
                return true;
            } else {
                throw new Error("Une erreur est survenue lors de la requête.");
            }
        },
    },
    getters: {
        isAuthenticated: (state) => state.isAuthenticated,
    },
};
