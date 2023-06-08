import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store"

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
            {
                name: "login",
                path: "login",
                component: () => import("@/views/LoginView.vue"),
            },
            {
                name: "presentation",
                path: "la-formation",
                component: () => import("@/views/PresentationView.vue"),
            },
            {
                path: "/offres",
                component: { template: "<router-view></router-view>" },
                children: [
                    {
                        name: "offrespt", 
                        path: "/offrespt",
                        component: () => import("@/views/Offres/OffresPtView.vue"),
                    },
                    {
                        name: "offresalternance",
                        path: "/offresalternance",
                        component: () => import("@/views/Offres/OffresAltView.vue"),
                    },
                    {
                        name: "offresstage",
                        path: "/offresstage",
                        component: () => import("@/views/Offres/OffresStagesView.vue"),
                    }
                ],
            },      
            {
                path: "espaces",
                component: { template: "<router-view></router-view>" },
                children: [
                    {
                        name: "espaces",
                        path: "/espaces",
                        component: () => import("@/views/EspacesView.vue"),
                    },
                ],
            },
            {
                path: "espaces/:id",
                component: { template: "<router-view></router-view>" },
                meta: { requiresAuth: true },
                children: [
                    {
                        name: "entreprise",
                        path: "entreprise",
                        meta: { requiresAuth: true },
                        component: () => import("@/views/Espaces/EntrepriseView.vue"),
                    },
                    {
                        name: "enseignants",
                        path: "enseignants",
                        meta: { requiresAuth: true },
                        component: () => import("@/views/Espaces/EnseignantsView.vue"),
                    },
                    {
                        name: "étudiant",
                        path: "etudiant",
                        meta: { requiresAuth: true },
                        component: () => import("@/views/Espaces/StudentSpace.vue"),
                    },
                ],
            },
        ],
    },
];

const router = new VueRouter({ routes, mode: "history" });

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        if (store.getters['users/isAuthenticated']) {
            next();
        } else {
            next("/login");
        }
    } else {
        next();
    }
});

export default router;
