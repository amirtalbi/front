<template>
<div>
  <section class="py-4 bg-gray-100">
    <div class="px-4 flex justify-between">
      <h2
        class="text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-2xl underline"
      >
        Offres Projet tutorés :
      </h2>
      <router-link :to="{ name: 'ajouter-offrept' }" class="px-3 py-2 text-white font-semibold bg-gray-900 rounded">Ajouter une offre de projet tutoré</router-link>
    </div>
    <div
      class="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5"
    >
      <article
        class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300"
      >
        <a href="#">
          <div
            class="relative flex items-end overflow-hidden border-b border-gray-700 rounded-xl navigation p-2"
          >
            <h5 class="text-2xl font-semibold mx-auto text-white">
              Projet Sairo
            </h5>
          </div>
          <div class="mt-1 p-2">
            <p class="text-slate-700 text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloribus in, sequi exercitationem dignissimos qui alias similique
              asperiores atque totam. Inventore facilis aut totam ex ut est
              praesentium minus quod quam?
            </p>
            <p class="mt-2 text-sm text-slate-400">RTE France</p>
            <p class="text-sm text-slate-400">25 janvier 2023</p>

            <div class="mt-3 flex justify-center">
              <div
                class="flex items-center space-x-1.5 rounded-lg navigation px-3 py-1.5 text-white duration-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  class="hover:translate-x-1"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 12h14m-7-7l7 7l-7 7"
                  />
                </svg>

                <button class="text-sm">Lire la suite</button>
              </div>
            </div>
          </div>
        </a>
      </article>
      <article
        class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300"
      >
        <a href="#">
          <div
            class="relative flex items-end overflow-hidden border-b border-gray-700 rounded-xl navigation p-2"
          >
            <h5 class="text-2xl font-semibold mx-auto text-white">
              Projet Devis-Auto
            </h5>
          </div>
          <div class="mt-1 p-2">
            <p class="text-slate-700 text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloribus in, sequi exercitationem dignissimos qui alias similique
              asperiores atque totam. Inventore facilis aut totam ex ut est
              praesentium minus quod quam?
            </p>
            <p class="mt-2 text-sm text-slate-400">Sairo</p>
            <p class="text-sm text-slate-400">25 janvier 2023</p>

            <div class="mt-3 flex justify-center">
              <div
                class="flex items-center space-x-1.5 rounded-lg navigation px-3 py-1.5 text-white duration-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  class="hover:translate-x-1"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 12h14m-7-7l7 7l-7 7"
                  />
                </svg>

                <button class="text-sm">Lire la suite</button>
              </div>
            </div>
          </div>
        </a>
      </article>
    </div>
  </section>
</div>
</template>