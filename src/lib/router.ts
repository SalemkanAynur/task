import { createRouter, createWebHistory, Router, RouteRecordRaw } from "vue-router";

import MainPage from "@/pages/MainPage/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    component: MainPage,
    path: "/",
    name: "index"
  },
];

const router: Router = createRouter({
  history: createWebHistory(),
  routes
});

router.afterEach((to) => {
  const baseTitle = "Task";

  if (to.name === "index") {
    document.title = baseTitle;
  } else {
    document.title = `${to.meta.title} | ${baseTitle}`;
  }
});

export default router;
