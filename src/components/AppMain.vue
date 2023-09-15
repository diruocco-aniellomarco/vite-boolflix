<script>
import MovieList from "./MovieList.vue";

export default {
  components: { MovieList },
};
</script>

<template>
  <div class="main-container">
    <MovieList />
  </div>
</template>

<style lang="scss" scoped>
.main-container {
  background-color: #434343;
  height: calc(100vh - 100px);
  overflow: scroll;
}
</style>
