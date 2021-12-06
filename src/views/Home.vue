<template>
  <div class="container sm:mx-auto py-14 md:py-20 px-4">
    <div class="mt-5 md:mt-0">
      <h1 class="text-white text-3xl md:text-5xl font-bold capitalize">movies</h1>
    </div>
    <p class="text-white text-lg font-semibold my-8 md:w-2/4">
      Movies move us like nothing else can, whether they're scary, funny,
      dramatic, romantic or anywhere in between. So many titles, so much to
      experience.
    </p>
  </div>

  <main class="container mx-auto">
    <h3 class="py-6 text-2xl text-white font-semibold ml-3">Exciting Movies</h3>
    <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 container mx-auto px-3 md:px-0">
      <Movies />
    </div>
  </main>
</template>

<script>

import Movies from "../components/Movies.vue";
import {mapActions} from "vuex"

export default {
  name: "Home",
  components: { Movies },
  methods: mapActions(["getMovieData"]),
  created() {
    this.getMovieData()
  }
};
</script>
