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
    <div class="info-card text-start p-2">
      <div class="mt-4">
        <h4><span>Titolo: </span>"{{ movie.title }}"</h4>
        <h5 v-if="movie.title != movie.original_title">
          <span>Titolo originale: </span>"{{ movie.original_title }}"
        </h5>
        <div>
          <img class="flags" :src="imageGenerate(movie.language)" alt="" />
        </div>

        <div>
          <span class="star" v-for="i in movie.vote"
            ><font-awesome-icon icon="fa-solid fa-star"
          /></span>
          <span v-for="a in 5 - movie.vote">
            <font-awesome-icon icon="fa-regular fa-star"
          /></span>
        </div>
        <div>
          <p><span>Trama: </span>"{{ movie.trama }}"</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-container {
  width: 300px;
  height: 400px;
  position: relative;
  margin-bottom: 20px;
  .info-card {
    display: none;
    position: absolute;
    top: 0;

    width: 300px;
    height: 400px;
    color: white;
    background-color: black;
    overflow: auto;
    .flags {
      width: 40px;
    }
    .star {
      color: yellow;
    }
    &:hover {
      display: block;
    }
  }

  .poster {
    width: 100%;
    height: 400px;
  }

  & > img:hover + .info-card {
    display: block;
  }
}
</style>
