<script>
import axios from "axios";
import { store } from "./data/store";

import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  data() {
    return {
      store,
      movies: [],
    };
  },
  components: { AppHeader, AppMain },
};
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss" scoped></style>
