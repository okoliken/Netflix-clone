<template>
  <MovieBanner />
  <div class="container mx-auto">
    <!--  -->
    <MovieRow
      title="NETFLIX ORIGINALS"
      :requests="requests.fetchNetflixOriginals"
    />
    <MovieRow title="Trending Now" :requests="requests.fetchingTrending" />
    <MovieRow title="Top Rated" :requests="requests.fetchTopRated" />
    <MovieRow title="Action Movies" :requests="requests.fetchActionMovies" />
    <MovieRow title="Comedy Movies" :requests="requests.fetchComedyMovies" />
    <MovieRow title="Horror Movies" :requests="requests.fetchHorrorMovies" />
    <MovieRow title="Romantic Movies" :requests="requests.fetchRomanceMovies" />
    <MovieRow title="Documentaries" :requests="requests.fetchDocumentaries" />
  </div>
</template>

<script>
import MovieRow from "../components/MovieRow.vue";
import MovieBanner from "../components/MovieBanner.vue";
import requests from "./requests";
export default {
  name: "Home",
  data() {
    return {
      requests,
    };
  },
  components: { MovieRow, MovieBanner },
  methods: {},
};
</script>

<style></style>
