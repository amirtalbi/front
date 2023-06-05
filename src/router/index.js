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
];

const router = new VueRouter({ routes, mode: "history" });

export default router;
