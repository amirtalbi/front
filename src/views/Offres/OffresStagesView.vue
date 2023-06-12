<template>
  <section class="py-4 bg-gray-100">
    <div class="px-4 underline">
      <h2
        class="text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-2xl"
      >
        Offres de stages :
      </h2>
    </div>
    <div class="mx-auto w-10/12 flex flex-col justify-around">
      <div>
        <div class="grid grid-cols-1 grid-rows-auto">
          <article
            class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300"
            v-for="item in items" v-bind:key="item.id"
          ></article>
        </div>
      </div>
      <div></div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    items() {
      return this.$store.state.offres.items;
    },
  },
  async mounted() {
    await this.$store.dispatch('offres/load');
  }
}
</script>