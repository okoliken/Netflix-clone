import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

import popularMovies from "../views/popularMovies.vue";
import MovieDetails from "../views/MovieDetails.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/MovieDetails/:id",
    name: "MovieDetails",
    props: true,
    component: MovieDetails,
  },
  {
    path: "/popularMovies",
    name: "popularMovies",
    component: popularMovies,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
