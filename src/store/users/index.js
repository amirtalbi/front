import axios from "axios";
import Vuex from 'vuex'
import Vue from "vue"

Vue.use(Vuex);

const endpoint = "http://localhost:3000";

export default {
    namespaced: true,
    state() {
        return {
            notes: [],
            cours: [],
            offres: [],
            projets: [],
            user: {},
            error: null,
            isAuthenticated: false,
        };
    },
    mutations: {
        setUser(state, data) {
            state.user = data;
        },
        setNotes(state, payload) {
            state.notes = payload;
        },
        setOffres(state, payload) {
            state.offres = payload;
        },
        setProjets(state, payload) {
            state.projets = payload;
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
                const user = { ...responseData.data, isAuthenticated: true }
                commit("setUser", responseData.data);
                commit("setAuth", true);
                return user;
            } else {
                throw new Error("Une erreur est survenue lors de la requête.");
            }
        },
        async loadNotes({ commit }, payload) {
            const response = await axios.get(endpoint + "/note/" + payload.id)

            if(response.status === 200) {
                const responseData = response.data;
                commit("setNotes", responseData.data);

                return true;
            } else {
                throw new Error("Une erreur est survenue lors de la requête.");
            }
        },
        async loadOffres({ commit }) {
            const response = await axios.get(endpoint + "/offreAlternances/")

            if(response.status === 200) {
                const responseData = response.data;
                commit("setOffres", responseData.data);

                return true;
            } else {
                throw new Error("Une erreur est survenue lors de la requête.");
            }
        },
        async loadProjets({ commit }) {
            const response = await axios.get(endpoint + "/projetTutores/")

            if(response.status === 200) {
                const responseData = response.data;
                commit("setProjets", responseData.data);

                return true;
            } else {
                throw new Error("Une erreur est survenue lors de la requête.");
            }
        },
        async createEntreprise(__, payload) {
            const response = await axios.post(endpoint + '/entreprise', payload);
            
            if(response.status == 200) {
                return response.data.data;
            }
        }
    },
    getters: {
        isAuthenticated: (state) => state.isAuthenticated,
    },
};
