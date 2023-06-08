<template>
  <nav class="bg-white shadow navigation">
    <div class="max-w-screen-xl mx-auto px-4">
      <div class="flex items-center justify-between h-16 py-12">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <a href="/">
            <img src="../assets/logo-dawii.png" alt="Logo" class="w-24" />
          </a>
        </div>

        <!-- Menu de navigation -->
        <div class="hidden md:block">
          <ul class="flex items-center space-x-10">
            <!-- Éléments de menu -->
            <li>
              <a href="/" class="text-black hover:text-gray text-xl">Accueil</a>
            </li>
            <li>
              <a href="/la-formation" class="text-black hover:text-gray text-xl"
                >La formation</a
              >
            </li>
            <!-- Élément de menu dropdown -->
            <li class="relative" @click="toggleDropdown">
              <button class="text-black hover:text-gray text-xl">
                Offres
                <span class="fa fa-caret-down"></span>
              </button>
              <ul
                v-show="open"
                class="absolute right-0 mt-2 py-2 w-40 bg-white border border-gray-200 rounded shadow"
              >
                <li>
                  <a
                    href="offrespt"
                    class="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >Projets tutorés</a
                  >
                </li>
                <li>
                  <a
                    href="offresalternance"
                    class="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >Alternances</a
                  >
                </li>
                <li>
                  <a
                    href="offresstage"
                    class="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >Stages</a
                  >
                </li>
              </ul>
            </li>
            <li>
              <a href="espaces" class="text-black hover:text-gray text-xl"
                >Mon espace</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    };
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.handleClickOutside);
  },
  methods: {
    toggleDropdown() {
      this.open = !this.open;
    },
    handleClickOutside(event) {
      const dropdown = this.$el.querySelector(".relative");
      if (dropdown && !dropdown.contains(event.target)) {
        this.open = false;
      }
    },
  },
};
</script>
