<template>
  <div class="albumsView">
    <header>
      <h1 data-test="albumsView">Albums</h1>
      <div />
    </header>
    <div
      v-if="artistAlbums(this.$route.params.artistId).length === 0"
      class="spinner-wrapper"
    >
      <ScaleLoader color="red" size="350" sizeUnit="px" />
    </div>
    <div class="albumsPage__albums">
      <div class="artistCards">
        <AlbumCard
          v-for="album in artistAlbums(this.$route.params.artistId)"
          :key="album.id"
          v-bind:album="album"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AlbumCard from "@/components/AlbumCard";

export default {
  name: "artistsView",
  components: { AlbumCard },
  computed: mapGetters(["artistAlbums"]),
  methods: {
    ...mapActions(["getUserAlbums"])
  },
  created() {
    this.getUserAlbums(this.$route.params.artistId);
    this.$store.watch(
      (state, getters) => getters.artistAlbums(this.$route.params.artistId),
      (newValue, oldValue) => {}
    );
  }
};
</script>

<style lang="scss" scoped>
header {
  margin: 60px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  text-align: center;
  div {
    transform: translateY(-100%);
    background: firebrick;
    width: 100%;
    height: 17px;
  }
}
h1 {
  z-index: 1;
  font-size: 2.8rem;
  font-weight: 400;
  text-transform: uppercase;
  color: #dcdcdc;
}

.artistCards {
  margin: 20px auto;
  max-width: 70%;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-evenly;
}
</style>
