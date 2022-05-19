import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: ()=> import("../views/Home.vue")
    },
    {
      path: "/register",
      component: () => import("../views/Register.vue"),
    },
    {
      path: "/sign-in",
      component: () => import("../views/SignIn.vue"),
    },
    {
      path: "/album",
      component: () => import("../components/Album.vue"),
    },
    {
      path: "/tune",
      component: () => import("../components/Tune.vue"),
    }
  ]
});
export default router;