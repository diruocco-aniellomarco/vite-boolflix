<script>
import axios from "axios";
import { store } from "./data/store";

import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

const searchMovies =
  "https://api.themoviedb.org/3/search/movie?api_key=34d7067604f99be5f00a7835b0bf3018&query=";

const searchTv =
  "https://api.themoviedb.org/3/search/tv?api_key=34d7067604f99be5f00a7835b0bf3018&query=";
export default {
  data() {
    return {
      // metto qui lo store per poterlo stampare
      store,
    };
  },
  components: { AppHeader, AppMain },

  methods: {
    // movieSearchKey appunto per come lo chiamerò
    fetchSearchMovie(movieSearchKey) {
      axios.get(searchMovies + movieSearchKey).then((response) => {
        // con map prendo solo le chiavi che mi servono
        store.movies = response.data.results.map((movie) => {
          const {
            id,
            title,
            original_title,
            original_language,
            vote_average,
            poster_path,
          } = movie;
          // console.log(movie);
          return {
            id,
            title,
            original_title,
            language: original_language,
            vote: vote_average,
            poster: "https://image.tmdb.org/t/p/w300" + poster_path,
          };
        });
      });
    },

    fetchSearchTv(tvSearchKey) {
      axios.get(searchTv + tvSearchKey).then((response) => {
        // con map prendo solo le chiavi che mi servono
        store.tvShows = response.data.results.map((tvShow) => {
          const {
            id,
            name,
            original_name,
            origin_country,
            vote_average,
            poster_path,
          } = tvShow;

          return {
            id,
            title: name,
            original_title: original_name,
            // N.B. qui ho usato il paese di origine
            // (che è n array che che può contenere più stati) e non la lingua
            // in modo tale da poter usare il database di bandiere che ho
            // trovato su internet. Ho deciso di prendere solo la prima
            language: origin_country[0],
            vote: vote_average,
            poster: "https://image.tmdb.org/t/p/w300" + poster_path,
          };
        });
        // console.log(store.tvShows);
      });
    },
  },

  created() {
    // this.fetchSearchTv();
  },
};
</script>

<template>
  <AppHeader
    @start-search="fetchSearchMovie"
    @start-search-tv="fetchSearchTv"
  />

  <AppMain />
</template>

<style lang="scss" scoped></style>
