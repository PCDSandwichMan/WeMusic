<template>
  <div class="albumCard">
    <h2>{{ album.title }}</h2>
    <h3 @click="handleViewSongsClick">View Album ></h3>
    <div>
      <img src="@/assets/images/demoAlbumCardBg.jpg" alt="demo album cover" />
    </div>
  </div>
</template>

<script>
export default {
  name: "AlbumCard",
  props: ["album"],
  methods: {
    handleViewSongsClick() {
      this.$router.push(`/songs/${this.album.id}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.albumCard {
  width: 18rem;
  margin: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-evenly;
  div {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-evenly;
  }
}

h2 {
  color: #dcdcdc;
  font-size: 1rem;
  text-transform: uppercase;
}

h3 {
  font-size: 0.9rem;
  color: firebrick;
  margin: 5px 0 10px;
  padding: 5px 0 5px;
  transition: all ease-in-out 100ms;
  &:hover {
    cursor: pointer;
    color: #e04646;
  }
}
</style>
