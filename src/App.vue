<script>
import axios from "axios";
import { store } from "./data/store";

import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

const searchMovies =
  "https://api.themoviedb.org/3/search/movie?api_key=34d7067604f99be5f00a7835b0bf3018&query=";
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
          const { id, title, original_title, original_language, vote_average } =
            movie;

          return {
            id,
            title,
            original_title,
            language: original_language,
            vote: vote_average,
          };
        });
        console.log(store.movies);
      });
    },
  },
  created() {
    // this.fetchSearchMovie();
  },
};
</script>

<template>
  <AppHeader @start-search="fetchSearchMovie" />

  <AppMain />
</template>

<style lang="scss" scoped></style>
