import axios from 'axios';

export default {
  namespaced: true,
  state() {
    return {
      data: null,
      error: null
    };
  },
  mutations: {
    setData(state, data) {
      state.data = data;
    },
    setError(state, error) {
      state.error = error;
    }
  },
  actions: {
    async login({ commit }, payload) {
        if(!payload){
          const response = await axios.post(`http://localhost:3000/login/${payload.numero_etudiant}/${payload.password}`);

        if (response.status === 200) {
          const responseData = response.data;
          console.log(responseData)
          commit('setData', responseData);
          return responseData;
        } else {
          console.log("error")

          throw new Error('Une erreur est survenue lors de la requête POST.');
        }
        }
    }
  }
};
