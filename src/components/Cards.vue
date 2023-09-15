<script>
import { createHydrationRenderer } from "vue";

export default {
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
    <h3>{{ movie.title }}</h3>
    <h4>{{ movie.original_title }}</h4>
    <div>
      <img
        class="flags"
        :src="imageGenerate(movie.language)"
        alt="{{ movie.language }}"
      />

      <!-- <p>{{ movie.language }}</p> -->
    </div>
    <p>{{ movie.vote }}</p>
  </div>
</template>

<style lang="scss" scoped>
.card-container {
  width: 300px;
  .flags {
    width: 40px;
  }
}
</style>
