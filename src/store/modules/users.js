import axios from "axios";

const state = {
  users: []
};
const getters = {
  allUsers: state => {
    return state.users;
  }
};
const mutations = {
  setUsers(state, payload) {
    state.users = payload;
  }
};
const actions = {
  getUsers({ commit }) {
    if (state.users.length > 0) return;
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        commit("setUsers", res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
};

export default {
  state,
  mutations,
  getters,
  actions
};
