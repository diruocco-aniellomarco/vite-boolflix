<script></script>

<template>
  <section>
    <div class="header-container container">
      <h1>Boolflix</h1>
      <div class="d-flex align-items-center">
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            aria-label="Username"
          />
          <button>Cerca</button>
        </div>
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

    .input-group {
      width: 250px;
    }
  }
}
</style>
