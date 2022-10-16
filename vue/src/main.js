import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes/routes";
import { pinia } from "./store/store";

createApp(App).use(pinia).use(router).mount("#app");
