import axios from "axios";
import albums from "./albums";

const state = {
  songs: []
};
const getters = {
  getAlbumsSongs: state => {
    return state.songs;
  }
};
const mutations = {
  setAlbumsSongs(state, payload) {
    state.songs.push(...payload);
  }
};
const actions = {
  fetchAlbumsSongs({ commit }, albumId) {
    if (!state.songs.some(obj => obj.albumId == albumId)) {
      axios
        .get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
        .then(res => {
          commit("setAlbumsSongs", res.data);
        })
        .catch(err => console.log(err));
    }
  }
};
export default {
  state,
  getters,
  mutations,
  actions
};
