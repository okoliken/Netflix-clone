<template>
  <Navbar />
  <div
    v-if="loading"
    class="w-full h-screen fixed bg-black bg-opacity-80 flex items-center justify-center"
  >
    <LoadingGif />
  </div>
  <div
    v-else
    class="w-full h-screen capitalize fixed bg-black bg-opacity-80 flex items-center justify-center text-white"
  >
    Oopps...Something Went Wrong Check Your internet connection
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
import { mapActions, mapGetters } from "vuex";

export default {
  name: "popularMovies",
  components: { Movies, Navbar, LoadingGif },
  methods: mapActions(["getMovieData"]),
  created() {
    this.getMovieData();
  },
  computed: mapGetters(["loading"]),
};
</script>
