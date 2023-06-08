<template>
  <div class="container mx-auto mt-16 drop-shadow-lg">
    <h1 class="text-2xl font-bold mb-4 text-center">Créer une offre de projet tutoré</h1>
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
        <label for="nbEleve" class="block font-semibold">Nombre d'élèves</label>
        <input
          type="number"
          id="nbEleve"
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
      <button
        type="submit"
        class="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
      >
        Créer
      </button>
    </form>
  </div>
</template>