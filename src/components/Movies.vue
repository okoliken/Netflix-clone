<template>

  <div
    v-if="movieData.items"
    class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 container mx-auto px-3 md:px-0 movies"
  >
    <div v-for="movie in movieData.items" :key="movie.id">
      <slot :movie="movie"></slot>
    </div>
  </div>

 
</template>

<script>
import { mapGetters } from "vuex";
import VLazyImage from "v-lazy-image";

export default {
  computed:{
    ...mapGetters(["movieData"]),
  },
  components: { VLazyImage },
};
</script>

<style></style>
