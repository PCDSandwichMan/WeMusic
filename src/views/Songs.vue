<template>
  <div class="songsView">
    <header>
      <h1 data-test="songsView">Songs</h1>
      <div />
    </header>
    <main>
      <div class="songCover" />
      <div class="songs-container-wrapper">
        <div class="songs-container">
          <div v-if="getAlbumsSongs.length === 0" class="spinner-wrapper">
            <ScaleLoader color="red" size="350" sizeUnit="px" />
          </div>
          <div class="song" v-for="song in getAlbumsSongs" :key="song.id">
            <div class="song__controlls">
              <i @click="handleSongToggle" class="fas fa-play song__control" />
              <i @click="handleSongToggle" class="fas fa-pause song__control hide" />
              <p>{{ song.title }}</p>
            </div>
            <div class="img-wrapper">
              <img :src="song.thumbnailUrl" alt="song cover" />
            </div>
          </div>
        </div>
      </div>
    </main>
    <audio crossorigin>
      <source
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/Swing_Jazz_Drum.mp3"
        type="audio/mpeg"
      />
    </audio>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AlbumCard from "@/components/AlbumCard";
import { ScaleLoader } from "@saeris/vue-spinners";

export default {
  name: "songsView",
  components: { AlbumCard, ScaleLoader },
  computed: mapGetters(["getAlbumsSongs"]),
  methods: {
    ...mapActions(["fetchAlbumsSongs"]),

    handleSongToggle(e) {
      if (!e.target.parentNode.parentNode.classList.contains("active")) {
        // Reset Card On New
        document
          .querySelectorAll(".song")
          .forEach(e => e.classList.remove("active"));
        // Reset Play On New
        document
          .querySelectorAll(".fa-play")
          .forEach(e => e.classList.remove("hide"));
        // Reset Pause On New
        document
          .querySelectorAll(".fa-pause")
          .forEach(e => e.classList.add("hide"));
      }
      e.target.parentNode.parentNode.classList.add("active");

      // Button and sound toggle
      const audio = document.getElementsByTagName("audio")[0];
      if (e.target.classList.contains("fa-play")) {
        audio.volume = 0.4;
        audio.currentTime = 0;
        audio.play();
        e.target.classList.add("hide");
        e.target.nextElementSibling.classList.remove("hide");
      } else {
        audio.pause();
        e.target.classList.add("hide");
        e.target.previousElementSibling.classList.remove("hide");
      }
    }
  },

  created() {
    this.fetchAlbumsSongs(this.$route.params.albumId);
    this.$store.watch(
      (state, getters) => getters.allAlbumsSongs,
      (newValue, oldValue) => {}
    );
  }
};
</script>

<style lang="scss" scoped>
#songsView {
  color: #dedede;
}

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

main {
  border: 1px solid #444;
  margin: 20px auto;
  max-width: 55%;
}

.songs-container {
  height: 60vh;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 0 2px 0 0;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px firebrick;
  }
}

.songCover {
  width: 100%;
  height: 13rem;
  background: url("../assets/images/songsHeaderBg.jpeg") no-repeat center;
  background-size: cover;
}

.song {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: #dcdcdc;
  transition: background ease-in 250ms;
  &:not(:last-child) {
    border-bottom: 1px solid #444;
  }
  &:hover {
    cursor: pointer;
    background: #090d11;
  }
}

.song__controlls {
  width: 40%;
  display: flex;
  i {
    font-size: 0.8rem;
    padding: 5px;
    margin: 10px 20px;
    transition: color ease-in 200ms;
  }
}

.img-wrapper {
  width: 100px;
  height: 100px;
  img {
    width: 100%;
    height: 100%;
  }
}

.active {
  background: #090d11;
  i {
    color: firebrick;
  }
}

.hide {
  display: none;
}

@media (max-device-width: 850px) {
  main {
    max-width: 75%;
  }
}

@media (max-device-width: 662px) {
  main {
    max-width: 90%;
  }
  #songCover {
    height: 8rem;
  }
}

@media (max-device-width: 562px) {
  #song__controlls {
    width: 80%;
  }
}
</style>
