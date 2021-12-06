<template>
    <div v-for="movie in movieData.items" :key="movie.id">
      <router-link :to="{name:'MovieDetails',params:{id:movie.id}}">
       <v-lazy-image :src="movie.image" alt="" class="w-full rounded-sm" />
        <p class="text-white text-center font-medium my-1">{{ movie.title }}</p>
      </router-link>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import VLazyImage from "v-lazy-image"
export default {
  computed: mapGetters(["movieData"]),
  components:{VLazyImage}
};
</script>

<style></style>


