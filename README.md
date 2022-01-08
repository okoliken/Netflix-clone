# Netflix-clone
Simple netflix clone with vuejs, vuex, tailwind css and imdb api

I built this project with Vue3, vue-router and a little bit of Vuex for statemanagement, the application is made up of different components. I styled it using Tailwind css, the movie information comes from the TMDB API AND IMDB API. The landing page or home page accesses information from the TMDB API as soon as the application mounts the DOM.
When you route to the popularmovie component, it access information from the IMDB API as soon as it mounts the DOM also. When you click on any movie in the popularmovie component it routes to a single movie detail component, that gets more information about the movie you click EG. plot, writers, duration , trialer etc

