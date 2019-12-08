import Vue from "vue";
import VueRouter from "vue-router";
// Views
import Home from "@/views/Home.vue";
import Users from "@/views/Users.vue";
import Albums from "@/views/Albums.vue";
import ArtistsAlbums from "@/views/ArtistsAlbums.vue";
import Songs from "@/views/Songs.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/users",
    name: "users",
    component: Users
  },
  {
    path: "/albums",
    name: "albums",
    component: Albums
  },
  {
    path: "/albums/:artistId",
    name: "artistAlbums",
    component: ArtistsAlbums
  },
  {
    path: "/songs/:albumId",
    name: "songs",
    component: Songs
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
