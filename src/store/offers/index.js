import axios from "axios";
import Vuex from 'vuex'
import Vue from "vue"

Vue.use(Vuex);

const endpoint = "http://localhost:3000";

export default {
    namespaced: true,
    state() {
        return {
            alternances: [],
            projects: [],
        };
    },
    mutations: {
        setProjects(state, payload) {
            state.projects = payload.data;
        },
        setAlternances(state, payload) {
            state.alternances = payload;
        },
    },
    actions: {
        async loadProjects({ commit }) {
            const response = await axios.get(endpoint + '/projetTutores');
            commit('setProjects', response.data);
        },
        async loadAlternances({ commit }) {
            const response = await axios.get(endpoint + '/offreAlternances');
            commit('setAlternances', response.data.data);
        },
        async creerOffre(__, payload) {
            let response = null;
            if(payload.type == 'projet-tutore') {
                response = await axios.post(endpoint + '/projetTutore', payload);
            } else {
                response = await axios.post(endpoint + '/offreAlternance', payload);
            }

            return response.data.data
        }
    },
};
