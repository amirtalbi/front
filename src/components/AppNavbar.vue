<template>
  <nav class="bg-white shadow navigation">
    <div class="max-w-screen-xl mx-auto px-4">
      <div class="flex items-center justify-between h-32">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <img src="../assets/logo-dawii.png" alt="Logo" class="w-24" />
        </div>

        <!-- Menu de navigation -->
        <div class="hidden md:block">
          <ul class="flex items-center space-x-6">
            <!-- Éléments de menu -->
            <li>
              <a href="#" class="text-black hover:text-gray text-lg">Accueil</a>
            </li>
            <li>
              <a href="#" class="text-black hover:text-gray text-lg"
                >La formation</a
              >
            </li>
            <!-- Élément de menu dropdown -->
            <li class="relative" @click="toggleDropdown">
              <button class="text-black hover:text-gray text-lg">
                Offres
                <span class="fa fa-caret-down"></span>
              </button>
              <ul
                v-show="open"
                class="absolute right-0 mt-2 py-2 w-40 bg-white border border-gray-200 rounded shadow"
              >
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >Projets tutorés</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >Alternances</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >Stages</a
                  >
                </li>
              </ul>
            </li>
            <li>
              <a href="#" class="text-black hover:text-gray text-lg"
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
