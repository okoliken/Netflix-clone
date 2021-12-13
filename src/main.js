import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import scrollreveal from "scrollreveal";

import YouTube from "vue3-youtube";

import "./index.css";

scrollreveal().reveal(".movies");
// createApp(App).use(store).use(router).mount('#app')

const app = createApp(App);

app.use(store);
app.component("YouTube", YouTube);
app.use(router);
app.use(scrollreveal);
app.mount("#app");
