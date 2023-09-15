<script>
import { store } from "../data/store";
import Cards from "./Cards.vue";

export default {
  data() {
    return {
      store,
    };
  },
  components: { Cards },
};
</script>

<template>
  <div class="container">
    <h1>Film</h1>
    <div class="movie-list-container">
      <Cards v-for="movie in store.movies" :key="movie.id" :movie="movie" />
    </div>
    <h1>Tv</h1>
    <div class="movie-list-container">
      <Cards v-for="tvShow in store.tvShows" :key="tvShow.id" :movie="tvShow" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.movie-list-container {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
