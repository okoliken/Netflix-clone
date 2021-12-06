import { createStore } from "vuex";

export default createStore({
  state: {
    popularMovies: [],
    movieDetails: [],
  },
  getters: {
    movieData: (state) => state.popularMovies,
    details: (state) => state.movieDetails,
  },
  mutations: {
    updateMovieState: (state, payload) => (state.popularMovies = payload),
    updateMovieDetails: (state, payload) => (state.movieDetails = payload),
  },
  actions: {
    getMovieData: async ({ commit }, state) => {
      // const apiKey = "k_hqs25514";
      const apiKey = "k_1fnld2bu"
      const res = await fetch(
        `https://imdb-api.com/en/API/MostPopularMovies/${apiKey}`
      );
      // https://imdb-api.com/en/API/Title/k_hqs25514/tt1375666/FullActor,FullCast,Posters,Images,Trailer,Ratings,Wikipedia,
      const data = await res.json();

      console.log(data);

      commit("updateMovieState", data);
    },
    getMovieDetails: async ({ commit }, id) => {
      const apiKey = "k_1fnld2bu";

      const res = await fetch(
        `https://imdb-api.com/en/API/Title/${apiKey}/${id}/FullActor,FullCast,Posters,Images,Trailer,Ratings,Wikipedia`
      );
      // https://imdb-api.com/en/API/Title/${apiKey}/${id}/FullActor,FullCast,Posters,Images,Trailer,Ratings,Wikipedia,
      const data = await res.json();

      console.log(data);

      commit("updateMovieDetails", data);
    },
  },
  modules: {},
});
