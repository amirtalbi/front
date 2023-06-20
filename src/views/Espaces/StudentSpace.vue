<template>
  <div class="flex flex-row justify-around w-10/12 mx-auto my-12">
    <div class="grid grid-cols-2 w-9/12 mx-auto">
      <div
        class="card w-3/5 mx-auto rounded-lg drop-shadow-lg border border-black"
      >
        <h3 class="text-3xl mb-4 text-center bg-teal-600 rounded-t-lg">
          Notes
        </h3>
        <ul v-for="(note, index) in notes" v-bind:key="note.id" class="px-2">
          <li
            :class="[
              'list-none',
              'flex',
              'flex-row',
              'justify-between',
              'text-lg',
              { 'border-b': index < notes.length - 1 },
              { 'border-gray-400': index < notes.length - 1 },
              'py-2',
            ]"
          >
            <div>{{ note.matiere }}</div>
            <div>{{ note.note }}</div>
          </li>
        </ul>
      </div>
      <div
        class="card w-3/5 mx-auto rounded-lg drop-shadow-lg border border-black"
      >
        <h3 class="text-3xl mb-4 text-center bg-teal-600 rounded-t-lg">
          Projet tutoré
        </h3>
        <ul v-for="(projet, index) in projets" v-bind:key="projet.id" class="px-2">
          <li
            :class="[
              'list-none',
              'flex',
              'flex-row',
              'justify-between',
              'text-lg',
              { 'border-b': index < notes.length - 1 },
              { 'border-gray-400': index < notes.length - 1 },
              'py-2',
            ]"
          >
            <div>{{ projet.titre }}</div>
          </li>
        </ul>
      </div>
      <div
        class="card w-3/5 mx-auto rounded-lg drop-shadow-lg border border-black mt-8"
      >
        <h3 class="text-3xl mb-4 text-center bg-teal-600 rounded-t-lg">
          Cours
        </h3>
        <ul
          v-for="(cours, index) in courses"
          v-bind:key="cours.id"
          class="px-2"
        >
          <li
            :class="[
              'list-none',
              'flex',
              'flex-row',
              'justify-between',
              'text-lg',
              { 'border-b': index < courss.length - 1 },
              { 'border-gray-400': index < courss.length - 1 },
              'py-2',
            ]"
          >
            <div>{{ cours.matiere }}</div>
            <div>{{ cours.note }}</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="w-5/12">
      <div
        class="card w-3/5 mx-auto rounded-lg drop-shadow-lg border border-black"
      >
        <h3 class="text-3xl mb-4 text-center bg-teal-600 rounded-t-lg">
          Emploie du temps
        </h3>
        <ul v-for="(note, index) in notes" v-bind:key="note.id" class="px-2">
          <li
            :class="[
              'list-none',
              'flex',
              'flex-row',
              'justify-between',
              'text-lg',
              { 'border-b': index < notes.length - 1 },
              { 'border-gray-400': index < notes.length - 1 },
              'py-2',
            ]"
          >
            <div>{{ note.matiere }}</div>
            <div>{{ note.note }}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  computed: {
    notes() {
      return this.$store.state.users.notes;
    },
    projets() {
      return this.$store.state.offers.projects;
    },
    cours() {
      return this.$store.state.users.cours;
    },
    offres() {
      return this.$store.state.users.offres;
    },
  },
  async mounted() {
    const id = this.$route.params.id;

    await this.$store.dispatch('users/loadNotes', { id: id });
    await this.$store.dispatch("offers/loadProjects");
  }
};
</script>