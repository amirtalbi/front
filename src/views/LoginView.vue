<template>
  <div class="flex justify-center items-center">
    <div
      class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 bg-white p-8 shadow-md rounded mt-16"
    >
      <h2 class="text-2xl font-bold text-center">Connexion</h2>
      <div class="mb-4">
        <label for="text" class="block mb-2">Numero étudiant</label>
        <input
          type="numero_etudiant"
          id="numero_etudiant"
          v-model="numero_etudiant"
          class="w-full border border-gray-300 px-3 py-2 rounded"
        />
      </div>
      <div class="mb-6">
        <label for="password" class="block mb-2">Mot de passe</label>
        <input
          type="password"
          id="password"
          v-model="password"
          class="w-full border border-gray-300 px-3 py-2 rounded"
        />
      </div>
      <div class="flex items-center justify-center mb-4">
        <input type="checkbox" id="remember" v-model="remember" class="mr-2" />
        <label for="remember" class="text-sm">Se souvenir de moi</label>
      </div>
      <div class="flex justify-center">
        <button
          v-on:click="login"
          type="submit"
          class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Se connecter
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
      next("/connexion"); // Rediriger vers la page de connexion si l'utilisateur n'est pas authentifié
    }
  },
  data() {
    return {
      numero_etudiant: "",
      password: "",
      remember: false,
    };
  },
  computed: {
    user() {
      return this.$store.state.users.user;
    },
  },
  methods: {
    async login() {
      const res = await this.$store.dispatch("users/login", {
        numero_etudiant: this.numero_etudiant,
        password: this.password,
      });
      if (res) {
        this.$router.push({ name: this.user.role, params: { id: this.user.id } });
      }
    },
  },
  async mounted() {},
};
</script>