<template>
    <div class="flex justify-center items-center">
      <div
        class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 bg-white p-8 shadow-md rounded mt-2"
      >
        <h2 class="text-2xl font-bold text-center">Inscription</h2>
        <div class="mb-4">
          <label for="siret" class="block mb-2">SIRET</label>
          <input
            type="text"
            id="siret"
            v-model="siret"
            class="w-full border border-gray-300 px-3 py-2 rounded"
          />
        </div>
        <div class="mb-4">
          <label for="nom" class="block mb-2">Nom</label>
          <input
            type="text"
            id="nom"
            v-model="nom"
            class="w-full border border-gray-300 px-3 py-2 rounded"
          />
        </div>
        <div class="mb-4">
          <label for="email" class="block mb-2">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            class="w-full border border-gray-300 px-3 py-2 rounded"
          />
        </div>
        <div class="mb-4">
          <label for="adresse" class="block mb-2">Adresse</label>
          <input
            type="text"
            id="adresse"
            v-model="adresse"
            class="w-full border border-gray-300 px-3 py-2 rounded"
          />
        </div>
        <div class="mb-4">
          <label for="ville" class="block mb-2">Ville</label>
          <input
            type="text"
            id="ville"
            v-model="ville"
            class="w-full border border-gray-300 px-3 py-2 rounded"
          />
        </div>
        <div class="flex justify-center">
          <button
            v-on:click="register"
            type="submit"
            class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            S'inscrire
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Cookies from 'js-cookie';
  
  export default {
    beforeEnter: (to, from, next) => {
      const user = Cookies.get('user');
      if (user.isAuthenticated) {
        next("/"); // L'utilisateur est authentifié, continuer la navigation
      } else {
        next(); // Laisser l'utilisateur accéder à la page d'inscription
      }
    },
    data() {
      return {
        nom: "",
        adresse: "",
        ville: "",
        pays: "France",
        siret: "",
        email: ""
      };
    },
    methods: {
      async register() {
        // Mettez ici votre logique pour l'inscription de l'entreprise
      },
    },
  };
  </script>
  