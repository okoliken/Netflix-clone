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
        class="text-5xl lg:text-4xl font-semibold pt-48 ml-8 md:pt-64 text-white md:ml-10"
      >
        Movie Title:
      </h1>
      <p class="text-3xl lg:text-7xl font-semibold ml-8 text-white md:ml-10">
        {{ details.title }}
      </p>
    </div>
    <div
      class="container mx-auto bg-black bg-opacity-90 p-8 rounded-md transform -translate-y-10 z-0"
    >
      <h2 class="text-2xl md:text-3xl text-white capitalize">Plot</h2>
      <p class="py-5 font-medium text-gray-50 md:text-2xl">
        {{ details.plot }}
      </p>
    </div>
    <main>
      <!-- <div class="container mx-auto px-5 my-6">
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
      </div> -->
      <div class="flex justify-end container mx-auto my-7 p-8">
        <button
          class="text-white uppercase hover:bg-red-600 rounded-sm text-xs lg:text-lg px-2 md:px-3 py-2 bg-red-700"
        >
          view more details
        </button>
      </div>

      <div class="container mx-auto p-8">
        <h3 class="text-3xl md:text-5xl text-white mb-6">Actors List</h3>
        <p class="md:text-2xl text-white mb-14">
          Total Number of Actors: <span>{{details.actorList.length}}</span>
        </p>
        <carousel  :breakpoints="breakpoints">
          <slide v-for="(actor, index) in details.actorList" :key="index">
            <div>
              <img class="img--fluid" v-lazy="actor.image" alt="" />

              <h3 class="text-white text-2xl">Actors Name</h3>
              <p class="text-gray-400">{{ actor.name }}</p>
              <h3 class="text-white text-2xl">Character Name</h3>
              <p class="text-gray-400">{{ actor.asCharacter }}</p>
            </div>
          </slide>

          <template #addons>
            <navigation />
          </template>
        </carousel>
      </div>
    </main>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Navbar from "../components/Navbar.vue";
import LoadingGif from "../components/LoadingGif.vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
export default {
  props: {
    id: String,
  },
  methods: mapActions(["getMovieDetails"]),
  components: {
    Navbar,
    LoadingGif,
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: 'start',
      },
    },
    }
  },
  computed: mapGetters(["details", "loading"]),
  created() {
    this.getMovieDetails(this.id);
  },
};
</script>

<style >
.bg-img {
  width: 100%;
  height: 600px;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  object-fit: contain;
  background-position: center;
  min-height: 600px;
}
.img--fluid {
  max-width: 200px;
  width: 200px;
  border-radius: 50%;
  min-height: 50px;
  height: 200px;
  object-fit: cover;
}
.carousel__prev, .carousel__next{
  background-color: #b91c1c !important;
}
</style>
