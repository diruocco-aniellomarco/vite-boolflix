<script>
export default {
  data() {
    return {
      term: "",
    };
  },

  emits: ["start-search", "start-search-tv"],
};
</script>

<template>
  <section>
    <div class="header-container container">
      <h1>Boolflix</h1>
      <div class="d-flex align-items-center">
        <form
          @submit.prevent="
            $emit('start-search', term), $emit('start-search-tv', term)
          "
          class="d-flex"
          role="search"
        >
          <input
            v-model="term"
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Cerca</button>
        </form>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  background-color: grey;
  .header-container {
    height: 100px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
