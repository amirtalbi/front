<template>
  <div class="flex flex-row justify-around w-10/12 mx-auto my-12">
    <router-link
      :to="{ name: 'creer-offre' }"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold h-10 py-2 px-4 rounded mt-4"
      >Ajouter une offre</router-link
    >
    <div class="grid grid-cols-2 w-9/12 mx-auto">
      <div
        class="card w-3/5 mx-auto rounded-lg drop-shadow-lg border border-black"
      >
        <h3 class="text-3xl mb-4 text-center bg-teal-600 rounded-t-lg">
          Offres d'alternance
        </h3>
        <ul v-for="(offre, index) in offres" v-bind:key="offre.id" class="px-2">
          <li
            :class="[
              'list-none',
              'flex',
              'flex-row',
              'justify-between',
              'text-lg',
              { 'border-b': index < offres.length - 1 },
              { 'border-gray-400': index < offres.length - 1 },
              'py-2',
            ]"
          >
            <div>{{ offre.matiere }}</div>
            <div>{{ offre.note }}</div>
          </li>
        </ul>
        <button
          @click="deleteOffer(offre.id)"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Supprimer
        </button>
      </div>
      <div
        class="card w-3/5 mx-auto rounded-lg drop-shadow-lg border border-black"
      >
        <h3 class="text-3xl mb-4 text-center bg-teal-600 rounded-t-lg">
          Projet tutoré
        </h3>
        <ul
          v-for="(projet, index) in projets"
          v-bind:key="projet.id"
          class="px-2"
        >
          <li
            :class="[
              'list-none',
              'flex',
              'flex-row',
              'justify-between',
              'text-lg',
              { 'border-b': index < projets.length - 1 },
              { 'border-gray-400': index < projets.length - 1 },
              'py-2',
            ]"
          >
            <div>{{ projet.matiere }}</div>
            <div>{{ projet.note }}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {};
  },
  computed: {
    projets() {
      return this.$store.state.users.projets.map(
        (project) => this.$route.params.id === project.entrepriseId
      );
    },
    offres() {
      return this.$store.state.users.offres.map(
        (offre) => this.$route.params.id === offre.entrepriseId
      );
    },
  },
  methods: {
    save() {
      this.$store.dispatch("offers/update");
    },
  },
  async mounted() {
    const id = this.$route.params.id;

    await this.$store.dispatch("users/loadNotes", { id: id });
  },
};
</script>