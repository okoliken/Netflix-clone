<template>
  <header class="bg-black w-full fixed bg-opacity-90" style="z-index: 100">
    <Navbar>
      <template #popularMovies>
        <div>
          <router-link to="/">
            <img
              src="../assets/netflix-logo-png-2584.png"
              alt=""
              class="w-32 hidden md:block"
            />
          </router-link>
          <router-link to="/">
            <img
              src="../assets/netflix-logo-png-2616.png"
              alt=""
              class="w-16 block md:hidden"
            />
          </router-link>
        </div>

        <ul class="flex items-center space-x-4 md:space-x-10">
          <li>
            <router-link
              to="/"
              class="text-white uppercase hover:bg-red-600 rounded-sm text-xs lg:text-md px-2 md:px-3 py-2 bg-red-700"
              >Back to Home</router-link
            >
            >
          </li>
        </ul>
      </template>
    </Navbar>
  </header>
  <div
    v-if="loading"
    class="w-full h-screen fixed bg-black bg-opacity-80 flex items-center justify-center"
  >
    <LoadingGif />
  </div>
  <div class="container sm:mx-auto py-14 md:py-20 px-4">
    <div class="mt-5 md:mt-0">
      <h1 class="text-white text-3xl md:text-5xl font-bold capitalize">
        movies
      </h1>
    </div>
    <p class="text-white text-lg font-semibold my-8 md:w-2/4">
      Movies move us like nothing else can, whether they're scary, funny,
      dramatic, romantic or anywhere in between. So many titles, so much to
      experience.
    </p>
  </div>

  <main class="container mx-auto">
    <h3 class="py-6 text-2xl text-white font-semibold ml-3">Exciting Movies</h3>
    <Movies>
      <template v-slot="{ movie }">
        <router-link :to="{ name: 'MovieDetails', params: { id: movie.id } }">
          <v-lazy-image :src="movie.image" alt="" class="w-full rounded-sm" />
          <p class="text-white text-center font-medium my-1">
            {{ movie.title }}
          </p>
        </router-link>
      </template>
    </Movies>
  </main>
</template>

<script>
import Movies from "../components/Movies.vue";
import Navbar from "../components/Navbar.vue";
import LoadingGif from "../components/LoadingGif.vue";

import VLazyImage from "v-lazy-image";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "popularMovies",
  components: { Movies, Navbar, LoadingGif, VLazyImage },
  methods: mapActions(["getMovieData"]),
  created() {
    this.getMovieData();
  },
  computed: mapGetters(["loading"]),
};
</script>
