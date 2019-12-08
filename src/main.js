import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { VueSpinners } from "@saeris/vue-spinners";

Vue.config.productionTip = false;

// Window Scroll Reset
router.beforeEach(function(to, from, next) {
  window.scrollTo(0, 0);
  next();
});

Vue.use(VueSpinners);

new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
