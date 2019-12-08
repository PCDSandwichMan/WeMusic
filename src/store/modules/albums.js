import axios from "axios";

const state = {
  albums: []
};

const getters = {
  allAlbums: state => state.albums,
  artistAlbums: state => userId => {
    return state.albums.filter(i => i.userId === +userId);
  }
};

const mutations = {
  setMissingAlbums(state, payload) {
    payload.forEach(({ data }) => {
      state.albums.push(...data);
    });
  },
  setOneAlbum(state, payload) {
    state.albums.push(...payload);
  }
};

const actions = {
  getAllAlbums({ commit }, userId) {
    // Designed for memoization
    let concurrentReqArr = [];
    if (state.albums.length <= 10) {
      for (let i = 1; i <= 10; ++i) {
        if (!state.albums.some(obj => obj.userId == i)) {
          concurrentReqArr.push(
            axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${i}`)
          );
        }
      }
      axios
        .all(concurrentReqArr)
        .then(res => {
          commit("setMissingAlbums", res);
        })
        .catch(err => console.log(err));
    }
  },
  getUserAlbums({ commit }, userId) {
    if (state.albums.find(album => album.userId == userId)) return;
    axios
      .get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then(res => {
        commit("setOneAlbum", res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
