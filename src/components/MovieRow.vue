<template>
  <p
    class="text-white font-semibold px-4 md:px-2 leading-5 text-2xl md:text-2xl pt-5"
  >
    {{ title }}
  </p>
  <div
    v-if="tmdbMovie.data"
    class="flex overflow-x-scroll py-5 px-4 md:px-2 overflow-y-hidden scroll-hidden"
  >
    <v-lazy-image
      v-for="movie in tmdbMovie.data.results"
      :key="movie.id"
      class="w-full object-contain poster"
      :src="`${base_url}${movie.poster_path}`"
      :alt="movie.name"
    />
  </div>
  <loading-gif v-if="isloading" />
  <span class="text-white" v-else>{{ errMessage }}</span>
</template>

<script>
import axios from "axios";
import LoadingGif from "./LoadingGif.vue";
import VLazyImage from "v-lazy-image";
export default {
  name: "MovieRow",
  props: {
    title: String,
    requests: String,
  },
  data() {
    return {
      tmdbMovie: [],
      base_url: "https://image.tmdb.org/t/p/original/",
      isloading: false,
      errMessage: "",
    };
  },
  components: {
    "loading-gif": LoadingGif,
    VLazyImage,
  },
  methods: {
    async fetchTmdbMovies() {
      try {
        this.isloading = true;
        const res = await axios.get(this.requests);

        this.tmdbMovie = res;
        this.isloading = false;
        return res;
      } catch (error) {
        this.isloading = false;

        this.errMessage = `No ${this.title} available... check your Internet Connection.`;
      }
    },
  },
  mounted() {
    this.fetchTmdbMovies();
  },
};
</script>

<style scoped>
.poster {
  max-height: 300px;
  margin-right: 10px;
  transition: transform 450ms;
}
.poster:hover {
  transform: scale(1.08);
  cursor: pointer;
}
.scroll-hidden::-webkit-scrollbar {
  display: none;
}
</style>
