<template>
  <div class="container mx-auto mt-16 drop-shadow-lg">
    <h1 class="text-2xl font-bold mb-4 text-center">Créer une offre d'alternance</h1>
    <form class="max-w-md mx-auto">
      <div class="mb-4">
        <label for="titre" class="block font-semibold">Titre</label>
        <input
          type="text"
          id="titre"
          class="w-full border border-gray-300 px-3 py-2 rounded"
        />
      </div>
      <div class="mb-4">
        <label for="description" class="block font-semibold">Description</label>
        <textarea
          id="description"
          class="w-full border border-gray-300 px-3 py-2 rounded"
        ></textarea>
      </div>
      <div class="mb-4">
        <label for="salaire" class="block font-semibold">Salaire</label>
        <input
          type="text"
          id="salaire"
          class="w-full border border-gray-300 px-3 py-2 rounded"
        />
      </div>
      <button
        type="submit"
        class="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
      >
        Créer
      </button>
    </form>
  </div>
</template>

<!-- faire la creation d'une offre -->
<script>
import axios from 'axios';

export default {
  data() {
    return {
      offreAlternance: {
        titre: '',
        description: '',
        salaire: ''
      }
    };
  },
  methods: {
    newOffreAlternance() {
      axios.post('/offreAlternance', this.offreAlternance)
        .then(response => {
          // Gérer la réponse du serveur (offre d'alternance créée)
          console.log(response.data);
        })
        .catch(error => {
          // Gérer les erreurs
          console.error(error);
        });
    }
  }
};
</script>
