import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import ProductItem from "./components/ProductItem.vue";

const app = createApp(App);
app.use(router);
app.component("product-item", ProductItem);
app.mount("#app");
