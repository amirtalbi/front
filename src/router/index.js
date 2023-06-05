import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: { template: "<router-view></router-view>" },
    children: [
      {
        name: "index",
        path: "",
        component: () => import("@/views/IndexView.vue"),
      },
    ],
  },
  {
    path: "/presentation",
    component: { template: "<router-view></router-view>" },
    children: [
      {
        name: "presentation",
        path: "",
        component: () => import("@/views/PresentationView.vue"),
      },
    ],
  },
  {
    path: "/offres",
    component: { template: "<router-view></router-view>" },
    children: [
      {
        name: "offres",
        path: "",
        component: () => import("@/views/OffresView.vue"),
      },
    ],
  },
  {
    path: "/espaces",
    component: { template: "<router-view></router-view>" },
    children: [
      {
        name: "espaces",
        path: "",
        component: () => import("@/views/EspacesView.vue"),
      },
      {
        name: "entreprise",
        path: "entreprise",
        component: () => import("@/views/Espaces/EntrepriseView.vue"),
      },
      {
        name: "enseignants",
        path: "enseignants",
        component: () => import("@/views/Espaces/EnseignantsView.vue"),
      },
      {
        name: "etudiant",
        path: "etudiant",
        component: () => import("@/views/Espaces/EtudiantView.vue"),
      },
    ],
  },
];

const router = new VueRouter({ routes, mode: "history" });

export default router;
