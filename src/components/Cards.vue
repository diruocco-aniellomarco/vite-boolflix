<script>
import { createHydrationRenderer } from "vue";

export default {
  data() {
    return {
      posterLink: "",
    };
  },
  props: {
    movie: Object,
  },

  methods: {
    imageGenerate(imageName) {
      const imageUrl = new URL(
        "../assets/img/" + imageName + ".png",
        import.meta.url
      );

      return imageUrl.href;
    },
  },
};
</script>

<template>
  <div class="card text-center card-container">
    <img class="poster" :src="movie.poster" />
    <h3>{{ movie.title }}</h3>
    <h4 v-if="movie.title != movie.original_title">
      {{ movie.original_title }}
    </h4>
    <div>
      <img class="flags" :src="imageGenerate(movie.language)" alt="" />
    </div>
    <p>{{ movie.vote }}</p>
  </div>
</template>

<style lang="scss" scoped>
.card-container {
  width: 300px;
  .poster {
    width: 100%;
    height: 400px;
  }
  .flags {
    width: 40px;
  }
}
</style>
