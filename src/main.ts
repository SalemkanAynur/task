import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "@/lib/router";
import Auth from "./layout/auth.vue";
import i18n from "@/plugins/i18n";
import "@/style/normalize.css";
import "@/style/global.scss";

const app = createApp(App).use(createPinia()).use(i18n).use(router).component("auth", Auth);
app.mount("#app");
