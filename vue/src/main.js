import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./routes/index";

const pinia = createPinia();

createApp(App).use(pinia).use(router).mount("#app");