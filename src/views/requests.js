const API_KEY = "1282393e3b1d1174618a5f9824d4ec9c";

const request = {
  fetchingTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&languages=en-US`,
  fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&languages=en-US`,
  fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default request;
