<template>
  <div class="albumsView">
    <header>
      <h1 data-test="albumsView" >All Albums</h1>
      <div />
    </header>
    <div v-if="allAlbums.length === 0" class="spinner-wrapper">
      <ScaleLoader color="red" size="350" sizeUnit="px" />
    </div>

    <div v-else class="search-container">
      <input 
        v-model="query"
        @input="handleSearch"
        type="text"
        placeholder="Album name..."
      />
      <i class="fas fa-search"></i>
    </div>

    <div class="albumsPage__albums">
      <AlbumCard
        v-for="album in displayResults"
        :key="album.id"
        v-bind:album="album"
      />
    </div>
    <div
      v-if="allAlbums.length < 100 && allAlbums.length > 1"
      class="spinner-wrapper"
    >
      <ScaleLoader color="red" size="350" sizeUnit="px" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AlbumCard from "@/components/AlbumCard";

export default {
  name: "albumsView",
  data() {
    return {
      query: "",
      displayResults: []
    };
  },
  components: { AlbumCard },
  computed: mapGetters(["allAlbums"]),
  methods: {
    ...mapActions(["getAllAlbums"]),

    handleSearch() {
      this.displayResults = this.allAlbums.filter(e =>
        e.title.includes(this.query)
      );
    }
  },
  created() {
    this.displayResults = this.allAlbums;
    this.getAllAlbums();
    this.$store.watch(
      (state, getters) => getters.allAlbums,
      () => {
        return (this.displayResults = this.allAlbums);
      }
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
  width: 30%;
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

.search-container {
  margin: 10vh auto 5vh;
  width: 20rem;
  position: relative;
  input {
    outline: none;
    color: #dcdcdc;
    font-size: 1.5rem;
    padding: 0 5px;
    width: 100%;
    background: none;
    border: none;
    border-bottom: 1px solid firebrick;
    &::placeholder {
      color: #b222226c;
    }
  }
  i {
    position: absolute;
    right: 5px;
    font-size: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: #dcdcdc;
  }
}

.albumsPage__albums {
  margin: 20px auto;
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-evenly;
}

// Meida Queries
@media (max-device-width: 450px) {
  #search-container {
    width: 15rem;
  }
}
</style>
