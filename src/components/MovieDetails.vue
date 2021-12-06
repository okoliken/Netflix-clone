<template>
  <div
    :style="`background-image:linear-gradient( rgba(0,0,0,.5),rgba(0,0,0,.5)), url(${details.image});`"
    class="bg-img"
  >
    <h1
      class="text-5xl lg:text-7xl font-semibold pt-48 ml-8 md:pt-32 text-white md:ml-10"
    >
      Movie Title:
    </h1>
    <p class="text-4xl lg:text-4xl font-semibold ml-8 text-white md:ml-10">
      {{ details.title }}
    </p>

    
  </div>
  <div class="container mx-auto bg-black">
        <h2 class="text-3xl md:text-4xl text-white capitalize">Plot</h2>
        <p class="py-5 font-medium text-gray-50">{{ details.plot }}</p>
  </div>
  <main>
    <div class="container mx-auto px-5 my-6">
     <div class="grid md:grid-cols-3 gap-3">
        <div>
        <h2 class="text-3xl md:text-4xl  text-white capitalize">companies</h2>
        <p class="py-5 font-medium text-gray-50">{{ details.companies }}</p>
      </div>

      <div>
        <h2 class="text-3xl md:text-4xl  text-white capitalize">ReleaseDate</h2>
        <p class="py-5 font-medium text-gray-50">{{ details.releaseDate }}</p>
      </div>


     <div>
        <h2 class="text-3xl md:text-4xl  text-white capitalize">Movie Duration</h2>
        <p class="py-5 font-medium text-gray-50">{{ details.runtimeStr }}</p>
      </div>

      <div>
        <h2 class="text-3xl md:text-4xl  text-white capitalize">Movie Writers</h2>
        <p class="py-5 font-medium text-gray-50">{{ details.writers }}</p>
      </div>
     </div>
      <!-- runtimeStr -->

      <a href="/" class="w-full px-16 sm:px-20 md:px-36 py-3 bg-red-600 text-white  font-semibold uppercase leading-6 hover:bg-red-700 cursor-pointer my-10">Watch Trailer</a>
    </div>
  </main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import VLazyImage from "v-lazy-image";

export default {
  props: {
    id: String,
  },
  methods: mapActions(["getMovieDetails"]),
  components: { VLazyImage },
  computed: mapGetters(["details"]),
  created() {
    this.getMovieDetails(this.id);
  },
};
</script>

<style scoped>
.bg-img {
  width: 100%;
  height: 500px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  object-fit: contain;
}
</style>
