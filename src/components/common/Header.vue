<template>
  <header class="header-area" id="home">
    <div class="main-menu">
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="#">
          <img src="Img/logo.png" class="d-inline-block align-top" alt="logo">
        </a>
        <button class="navbar-toggler" type="button" @click="menuOpened = !menuOpened">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" :class="{ active: menuOpened }">
          <div class="mr-auto"></div>
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home<span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#aboutMe">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#smallProject">Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">Contact</a>
            </li>

          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>

export default {
  name: 'VueHeader',

  data() {
    return {
      menuOpened: false,
    }
  },

  methods: {

  }

}
</script>

<style>

</style>
