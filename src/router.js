import { createRouter, createWebHistory } from "vue-router";
import RestaurantsList from "./page/RestaurantsList.vue";
import PizzaPlus from "./page/PizzaPlus";
import TanukiRestaurant from "./page/TanukiRestaurant.vue";
import FoodBand from "./page/FoodBand.vue";
import PalkiSkalki from "./page/PalkiSkalki.vue";
import GusiLebedi from "./page/GusiLebedi.vue";
import PizzaBurger from "./page/PizzaBurger.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: RestaurantsList },
    { path: "/pizza-plus", component: PizzaPlus },
    { path: "/tanuki", component: TanukiRestaurant },
    { path: "/food-band", component: FoodBand },
    { path: "/palki-skalki", component: PalkiSkalki },
    { path: "/gusi-lebedi", component: GusiLebedi },
    { path: "/pizza-burger", component: PizzaBurger },
  ],
});

export default router;
