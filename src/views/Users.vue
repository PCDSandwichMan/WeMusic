<template>
  <div class="usersView">
    <header>
      <h1 data-test="userView">Our Proud Artists</h1>
      <div />
    </header>
    <div v-if="allUsers.length === 0" class="spinner-wrapper">
      <ScaleLoader color="red" size="350" sizeUnit="px" />
    </div>
    <main>
      <UserCard v-for="user in allUsers" :key="user.id" v-bind:user="user" />
    </main>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import UserCard from "@/components/UserCard";
import { ScaleLoader } from "@saeris/vue-spinners";

export default {
  name: "usersView",
  components: {
    UserCard,
    ScaleLoader
  },
  computed: mapGetters(["allUsers"]),
  methods: {
    ...mapActions(["getUsers"])
  },
  created() {
    this.getUsers();
  }
};
</script>

<style lang="scss" scoped>
#usersView {
  padding: 0 0 10vh;
}

header {
  margin: 60px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  text-align: center;
  div {
    transform: translateY(-120%);
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

@media (max-device-width: 643px) {
  header {
    margin: 40px auto;
    width: 60%;
    h1 {
      font-size: 2rem;
    }
    div {
      transform: translateY(-100%);
      height: 13px;
    }
  }
}
</style>
