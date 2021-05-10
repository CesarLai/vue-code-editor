import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import WorkBench from "@/views/WorkBench.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/workbench",
    name: "WorkBench",
    component: WorkBench,
  },
  {
    path: "/",
    redirect: "/workbench",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
