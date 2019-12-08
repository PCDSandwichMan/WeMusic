import Vue from "vue";
import Vuex from "vuex";
// Modules
import users from "./modules/users";
import albums from "./modules/albums";
import songs from "./modules/songs";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    users,
    albums,
    songs
  }
});
