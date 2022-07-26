import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import scrollreveal from "scrollreveal";

import YouTube from "vue3-youtube";

import "./index.css";
import "./assets/tailwind.css";

import VueLazyload from "vue-lazyload";
scrollreveal().reveal(".movies");
// // createApp(App).use(store).use(router).mount('#app')

const app = createApp(App);
const loadImage = require("../src/assets/728.gif");
app.use(
  VueLazyload,
  {
    preLoad: 1.3,
    loading: loadImage,
    attempt: 1,
    throttleWait:300
  },

);

app.use(store);
app.component("YouTube", YouTube);
app.use(router);
app.use(scrollreveal);
app.mount("#app");
