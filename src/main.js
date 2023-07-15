import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

const globals = {
  inConstruction: true,
}

app.use(createPinia());
app.use(router);
app.provide("globals", globals);

app.mount("#app");
