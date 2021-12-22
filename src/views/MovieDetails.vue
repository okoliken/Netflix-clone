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
    v-if="loading === true"
    class="w-full h-screen fixed bg-black bg-opacity-80 flex items-center justify-center"
  >
    <LoadingGif />
  </div>

  <div v-else>
    <div
      :style="`background-image:linear-gradient( rgba(0,0,0,.5),rgba(0,0,0,.5)), url(${details.image});`"
      class="bg-img"
    >
      <h1
        class="text-5xl lg:text-6xl font-semibold pt-48 ml-8 md:pt-32 text-white md:ml-10"
      >
        Movie Title:
      </h1>
      <p class="text-3xl lg:text-4xl font-semibold ml-8 text-white md:ml-10">
        {{ details.title }}
      </p>
    </div>
    <div
      class="container mx-auto bg-black bg-opacity-90 p-3 rounded-md transform -translate-y-10 z-0"
    >
      <h2 class="text-2xl md:text-2xl text-white capitalize">Plot</h2>
      <p class="py-5 font-medium text-gray-50">{{ details.plot }}</p>
    </div>
    <main>
      <div class="container mx-auto px-5 my-6">
        <div class="grid md:grid-cols-3 gap-3">
          <div>
            <h2 class="text-3xl md:text-4xl text-white capitalize">
              companies
            </h2>
            <p class="py-5 font-medium text-gray-50">{{ details.companies }}</p>
          </div>

          <div>
            <h2 class="text-3xl md:text-4xl text-white capitalize">
              ReleaseDate
            </h2>
            <p v-if="details.releaseDate" class="py-5 font-medium text-gray-50">
              {{ details.releaseDate }}
            </p>
            <p v-else class="text-gray-50">No releaseDate Avalible</p>
          </div>

          <div>
            <h2 class="text-3xl md:text-4xl text-white capitalize">
              Movie Duration
            </h2>
            <p v-if="details.runtimeStr" class="py-5 font-medium text-gray-50">
              {{ details.runtimeStr }}
            </p>
            <p v-else class="text-gray-50">No Movie Duration</p>
          </div>

          <div>
            <h2 class="text-3xl md:text-4xl text-white capitalize">
              Movie Writers
            </h2>
            <p v-if="details.writers" class="py-5 font-medium text-gray-50">
              {{ details.writers }}
            </p>
            <p v-else class="text-gray-50">Writers not Avaliable</p>
          </div>

          <div>
            <h2 class="text-3xl md:text-4xl text-white capitalize">Awards</h2>
            <p v-if="details.awards" class="py-5 font-medium text-gray-50">
              {{ details.awards }}
            </p>
            <p v-else class="text-gray-50">No Awards</p>
          </div>

          <div>
            <h2 class="text-3xl md:text-4xl text-white capitalize">
              Box Office
            </h2>
            <p
              v-if="details.boxOffice.budget"
              class="py-5 font-medium text-gray-50"
            >
              Budget: {{ details.boxOffice.budget }}
            </p>
            <p v-else class="text-gray-50">No Box Office Details</p>
          </div>
        </div>

        <a
          v-if="details.trailer.link"
          :href="details.trailer.link"
          class="w-full px-16 sm:px-20 md:px-36 py-3 bg-red-600 text-white font-semibold uppercase leading-6 hover:bg-red-700 cursor-pointer my-10"
          >Watch Trailer</a
        >
        <a
          v-else
          class="w-full px-16 sm:px-20 md:px-36 py-3 bg-red-600 text-white font-semibold uppercase leading-6 hover:bg-red-700 cursor-pointer my-10"
          >No Trailer</a
        >
      </div>
    </main>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import VLazyImage from "v-lazy-image";
import Navbar from "../components/Navbar.vue";
import LoadingGif from "../components/LoadingGif.vue";
export default {
  props: {
    id: String,
  },
  methods: mapActions(["getMovieDetails"]),
  components: { VLazyImage, Navbar, LoadingGif },
  computed: mapGetters(["details", "loading"]),
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
  background-position: center center;
  background-size: cover;
  object-fit: contain;
}
</style>
