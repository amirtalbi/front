<template>
  <section class="py-4 bg-gray-100 h-full">
    <div class="px-4 underline">
      <h2
        class="text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-2xl"
      >
        Offres de projets tutorés :
      </h2>
    </div>
    <div class="mx-auto w-10/12 flex flex-row justify-around">
      <div>
        <div class="grid grid-cols-1 grid-rows-auto">
          <article
            class="mt-8 rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 w-2/5"
            v-for="item in items"
            v-bind:key="item.id"
          >
            <div class="card w-11/12">
              <h2 class="text-xl font-bold mb-2">{{ item.titre }}</h2>
              <p class="text-gray-700 mb-4">
                {{ getDescriptionExcerpt(item.description, 250) }}
              </p>
              <p class="font-bold">Rémunération : {{ item.salaire }}</p>
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                @click="select(item.id)"
              >
                En savoir plus
              </button>
            </div>
          </article>
        </div>
      </div>
      <div>
        <div v-if="selected !== null" class="card w-6/12 rounded-xl bg-white p-3 shadow-lg absolute top-52 right-16">
          <h2 class="text-xl font-bold mb-2">{{ selected.titre }}</h2>
          <p class="text-gray-700 mb-4 text-justify">
            {{ selected.description }}
          </p>
          <p class="font-bold">Rémunération : {{ selected.salaire }}</p>
          <!-- <p class="text-xl text-gray-700">Contact : {{ selected.mail }}</p> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
    };
  },
  computed: {
    items() {
      return this.$store.state.offers.alternances;
    },
  },
  methods: {
    async select(id) {
      this.selected = this.items.find((item) => item.id === id);
      // const enterprise = await this.$store.dispatch('users/loadEnterprise', { id: this.selected.entrepriseId });
      // this.selected['mail'] = enterprise.mail;
    },
    getDescriptionExcerpt(description, maxLength) {
      if (description.length <= maxLength) {
        return description;
      } else {
        return description.substring(0, maxLength) + "...";
      }
    },
  },
  async mounted() {
    await this.$store.dispatch("offers/loadAlternances");
  },
};
</script>