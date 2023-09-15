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
  <!-- <li v-for="movie in store.movies" :key="movie.id">
    {{ movie.title }} <br />
    {{ movie.original_title }} <br />
    {{ movie.language }} <br />
    {{ movie.vote }} <br />
  </li> -->
  <div class="container">
    <div class="movie-list-container">
      <Cards v-for="movie in store.movies" :key="movie.id" :movie="movie" />
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
