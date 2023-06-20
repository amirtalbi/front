<template>
  <div class="max-w-md mx-auto bg-white p-8 rounded shadow-md mt-12">
    <h2 class="text-2xl font-bold mb-4">Formulaire</h2>
    <div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="selectField"
          >Sélectionner :</label
        >
        <select
          id="selectField"
          name="selectField"
          class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
          v-model="type"
        >
          <option value="projet-tutore">Projet tutoré</option>
          <option value="offre-alternance">Offre d'alternance</option>
        </select>
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="titleField"
          >Titre :</label
        >
        <input
          id="titleField"
          name="titleField"
          type="text"
          v-model="titre"
          class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="descriptionField"
          >Description :</label
        >
        <textarea
          id="descriptionField"
          name="descriptionField"
          v-model="description"
          class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
        ></textarea>
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="numberOfStudentsField"
          >Nombre d'élèves :</label
        >
        <input
          id="numberOfStudentsField"
          name="numberOfStudentsField"
          type="number"
          v-model="nbEleve"
          class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="salaire"
          >Salaire :</label
        >
        <input
          id="salaire"
          name="salaire"
          type="number"
          v-model="salaire"
          class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
        />
      </div>
      <button
        @click="save"
        class="w-full bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600"
      >
        Envoyer
      </button>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            type: "",
            titre: "",
            description: "",
            salaire: null,
            entrepriseId: this.$store.state.users.user.id,
            nbEleve : 1,
        }
    },
    methods: {
        async save() {
            let model = {
                type: this.type,
                titre: this.titre,
                description: this.description,
                nbEleve: this.nbEleve,
                entrepriseId: this.entrepriseId,
            }
            const response = await this.$store.dispatch('offers/creerOffre', model);

            console.log(response);
        }
    }
}
</script>