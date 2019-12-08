<template>
  <div id="app">
    <div class="nav">
      <h1>WeMusic</h1>
      <nav>
        <router-link class="nav__item" to="/">
          Home
          <div class="nav__underBar" />
        </router-link>
        <router-link class="nav__item" to="/users">
          Users
          <div class="nav__underBar" />
        </router-link>
        <router-link class="nav__item" to="/albums">
          Albums
          <div class="nav__underBar" />
        </router-link>
      </nav>
    </div>
    <transition name="view">
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss">
// Fonts
@import url("https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900&display=swap");

// Reset
html {
  box-sizing: border-box;
  font-size: 16px;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-family: "Montserrat", sans-serif;
}

::selection {
  background: #ff000056;
}
::-moz-selection {
  background: #ff000056;
}

body {
  background: #13181d;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: linear-gradient(
      90deg,
      #201c29,
      #201c29 1px,
      #100e17 0,
      #100e17
    );
  }
  &::-webkit-scrollbar-thumb {
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(red),
      to(magenta)
    );
    background: linear-gradient(180deg, red, magenta);
    border-radius: 30px;
    box-shadow: inset 2px 2px 2px hsla(0, 0%, 100%, 0.25),
      inset -2px -2px 2px rgba(0, 0, 0, 0.25);
  }
}

ol,
ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

// Page Transition
.view-enter-active,
.view-leave-active {
  transition: all 0.4s ease-in-out;
}

.view-enter-active {
  transition-delay: 0.4s;
}

.view-enter,
.view-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.view-enter-to,
.view-leave {
  opacity: 1;
  transform: translateX(0px);
}

// Spinners
.spinner-wrapper {
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

// Custom CSS
.nav {
  position: sticky;
  top: 0;
  z-index: 10;
  background: #111;
  min-height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  color: #fff;
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav__item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    text-decoration: none;
    margin: 0 15px;
    padding: 5px;
    transition: all ease-in-out 100ms;
    &:hover {
      cursor: pointer;
      color: firebrick;
      .nav__underBar {
        width: 100%;
      }
    }
  }
  .router-link-exact-active {
    color: firebrick !important;
  }
}

.nav__underBar {
  width: 0;
  height: 2px;
  background-color: #b22222a8;
  transition: all 200ms ease-in;
}

// Media Queries
@media (max-device-width: 600px) {
  .nav {
    .nav__item {
      margin: 0 5px;
    }
  }
}
@media (max-device-width: 600px) {
  .nav {
    h1 {
      font-size: 1.5rem;
    }
    .nav__item {
      margin: 0 5px;
      padding: 5px;
      font-size: 0.8rem;
    }
  }
}
</style>
