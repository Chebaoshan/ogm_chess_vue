import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "login",
    component: () => import("../components/Login.vue"),
  },
  {
    path: "/game",
    name: "game",
    component: () => import("../components/Game.vue"),
  },
  {
    path: "/reset",
    name: "reset",
    redirect: { name: "game" },
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
