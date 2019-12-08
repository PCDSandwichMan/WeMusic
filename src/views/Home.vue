<template>
  <div class="homeView">
    <header>
      <h1 data-test="homeView">WeMusic</h1>
      <h3>Our music your choice</h3>
      <a @click="handleSearchClick">Search Now</a>
    </header>
  </div>
</template>

<script>
export default {
  name: "homeView",
  methods: {
    handleSearchClick() {
      this.$router.push("albums");
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  background: linear-gradient(#1111113a, #111111de),
    url("../assets/images/homeBg.jpg") no-repeat center;
  background-size: cover;
  min-height: 92vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 7rem;
    color: firebrick;
  }
  h3 {
    font-size: 2rem;
    color: #dcdcdc;
  }
  a {
    color: #fff;
    border: 1px solid #fff;
    margin: 20px 0;
    padding: 10px 20px;
    font-size: 1.2rem;
    transition: 100ms ease-in-out all;
    &:hover {
      cursor: pointer;
      background: firebrick;
      border-color: firebrick;
    }
  }
}

// Meida queries

@media (max-device-width: 929px) {
  header {
    h1 {
      font-size: 5rem;
    }
    h3 {
      font-size: 1.5rem;
    }
  }
}

@media (max-device-width: 929px) {
  header {
    h1 {
      font-size: 4rem;
    }
    h3 {
      font-size: 1.2rem;
    }
    a {
      margin: 20px 0;
      padding: 10px 20px;
      font-size: 1rem;
    }
  }
}
</style>
