import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import scrollreveal from "scrollreveal";

import YouTube from "vue3-youtube";

import "./index.css";
import './assets/tailwind.css'

scrollreveal().reveal(".movies");
// // createApp(App).use(store).use(router).mount('#app')

import VueImgLazyload from 'vue-lazyload-images'


const app = createApp(App);


app.directive('imglazyload', VueImgLazyload)


app.use(store);
app.component("YouTube", YouTube);
app.use(router);
app.use(scrollreveal);
app.mount("#app");
