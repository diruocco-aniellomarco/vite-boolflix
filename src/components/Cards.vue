<script>
export default {
  props: {
    movie: Object,
  },
};
</script>

<template>
  <div class="card text-center card-container">
    <h3>{{ movie.title }}</h3>
    <h4>{{ movie.original_title }}</h4>
    <p>{{ movie.language }}</p>
    <p>{{ movie.vote }}</p>
  </div>
</template>

<style lang="scss" scoped>
.card-container {
  width: 300px;
}
</style>
