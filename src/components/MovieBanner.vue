<template>
  <header class="absolute w-full" style="z-index: 100">
    <nav
      class="flex items-center justify-between container mx-auto px-2 md:px-0"
    >
      <img src="../assets/netflix-logo-png-2584.png" alt="" class="w-32" />

      <ul class="">
        <li>
          <router-link
            :to="{ name: 'popularMovies' }"
            class="text-white uppercase hover:bg-red-600 rounded-sm text-xs lg:text-md px-2 md:px-3 py-2 bg-red-700"
            >Popular Movies</router-link
          >
        </li>
      </ul>
    </nav>
  </header>
  <div
    v-if="randomBannerMovieimg"
    :style="`background-image:linear-gradient( rgba(0,0,0,.3),rgba(0,0,0,.3)),url(${base_url}${randomBannerMovieimg?.backdrop_path})`"
    class="banner-img relative"
  >
    <div
      v-if="
        (randomBannerMovieimg?.name || randomBannerMovieimg?.original_name) &&
        randomBannerMovieimg.overview
      "
      class="container mx-auto px-4 md:px-5 py-20 md:py-16"
    >
      <h1 class="font-bold text-3xl md:text-6xl text-white md:py-6">
        {{ randomBannerMovieimg?.name || randomBannerMovieimg?.original_name }}
      </h1>
      <p class="text-white text-lg md:text-xl font-medium w-full md:w-1/2">
        {{ randomBannerMovieimg.overview }}
      </p>
    </div>
    <div v-else class="flex items-center justify-center py-32">
      <LoadingGif />
    </div>
    <div class="dark-bottom"></div>
  </div>
</template>

<script>
import axios from "axios";
import request from "../views/requests";
import LoadingGif from "./LoadingGif.vue";

export default {
  name: "Banner",
  data() {
    return {
      randomBannerMovieimg: [],
      base_url: "https://image.tmdb.org/t/p/original/",
    };
  },
  components: {
    LoadingGif,
  },
  methods: {
    async getrandomBannerMovieimg() {
      try {
        const res = await axios.get(request.fetchNetflixOriginals);
        this.randomBannerMovieimg =
          res.data.results[
            Math.floor(Math.random() * res.data.results.length - 1)
          ];
        console.log(this.randomBannerMovieimg);
        return res;
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.getrandomBannerMovieimg();
  },
};
</script>

<style scoped>
.banner-img {
  width: 100%;
  height: 400px;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}
.dark-bottom {
  height: 7.4rem;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    #111
  );
}
</style>
