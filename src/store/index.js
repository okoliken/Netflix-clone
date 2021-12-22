import { createStore } from "vuex";

export default createStore({
  state: {
    popularMovies: [],
    movieDetails: [],
    isloading: false,
  },
  getters: {
    movieData: (state) => state.popularMovies,
    details: (state) => state.movieDetails,
    loading: (state) => state.isloading,
  },
  mutations: {
    updateMovieState: (state, payload) => (state.popularMovies = payload),
    updateMovieDetails: (state, payload) => (state.movieDetails = payload),
    isLoading: (state, payload) => (state.isloading = payload),
  },
  actions: {
    getMovieData: async ({ commit }, state) => {
      // const apiKey = "k_hqs25514";
      try {
        const apiKey = "k_1fnld2bu";
        commit("isLoading", true);
        const res = await fetch(
          `https://imdb-api.com/en/API/MostPopularMovies/${apiKey}`
        );
        // https://imdb-api.com/en/API/Title/k_hqs25514/tt1375666/FullActor,FullCast,Posters,Images,Trailer,Ratings,Wikipedia,
        const data = await res.json();
        console.log(data);

        commit("updateMovieState", data);
        commit("isLoading", false);
      } catch (error) {
        console.log(error);
        commit("isLoading", false);
      }
    },
    //
    getMovieDetails: async ({ commit }, id) => {
      const apiKey = "k_1fnld2bu";

      try {
        commit("isLoading", true);
        const res = await fetch(
          `https://imdb-api.com/en/API/Title/${apiKey}/${id}/FullActor,FullCast,Posters,Images,Trailer,Ratings,Wikipedia`
        );
        // https://imdb-api.com/en/API/Title/${apiKey}/${id}/FullActor,FullCast,Posters,Images,Trailer,Ratings,Wikipedia,
        const data = await res.json();

        console.log(data);

        commit("updateMovieDetails", data);
        commit("isLoading", false);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
