import { createWebHistory, createRouter } from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Promo from "../pages/Promo.vue";
import Menu from "../pages/Menu.vue";
import CoffeeTea from "../pages/CoffeeTea.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Menu",
    name: "Menu",
    component: Menu,
  },
  {
    path: "/promotions",
    name: "Promotions",
    component: Promo,
  },

  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/CoffeeTea",
    name: "CoffeeTea",
    component: CoffeeTea,
  },
  {
    path: "/:pathMatch(.*)*",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
