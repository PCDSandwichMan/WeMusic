<template>
  <div @click="handleCardClick" class="artistCard">
    <div class="image-wrapper">
      <div class="image-overlay">
        <i class="fas fa-music" />
      </div>
      <img
        src="@/assets/images/demoUserCardBg.jpg"
        alt="WeMusic user singing on stage"
      />
    </div>
    <div class="artistCard__content">
      <h4>{{ user.name }}</h4>
      <p>"{{ user.company.catchPhrase }}"</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "artistCard",
  props: ["user"],
  methods: {
    handleCardClick() {
      this.$router.push(`/albums/${this.user.id}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.artistCard {
  overflow: hidden;
  width: 20rem;
  height: 30rem;
  margin: 20px;
}

.image-wrapper {
  height: 80%;
  position: relative;
  img {
    height: 100%;
    width: 100%;
  }
  &:hover {
    cursor: pointer;
    .image-overlay {
      opacity: 1;
    }
  }

  .image-overlay {
    opacity: 0;
    transition: 400ms ease-in-out all;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111111c7;
    i {
      font-size: 6.5rem;
      color: #ff0000c0;
      transform: rotate(20deg);
    }
  }
}

.artistCard__content {
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: firebrick;
  color: #dcdcdc;
  padding: 10px 0;
  h4 {
    font-size: 0.8rem;
    text-transform: uppercase;
    font-weight: 500;
    margin: 0 0 5px;
  }
  p {
    font-size: 0.8rem;
    font-weight: 300;
    font-style: italic;
  }
}

@media (max-device-width: 643px) {
  .artistCard {
    width: 15rem;
    height: 25rem;
  }
}
</style>
