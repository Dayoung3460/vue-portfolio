<template>
  <footer class="footer-area" v-if="show">
    <div class="container">
      <div class="site-logo text-center">
        <a href="#"><img src="img/logo.png" alt="logo"></a>
      </div>
      <div class="social text-center">
        <a href="https://www.linkedin.com/in/dayoung-clara-kim-5b2b0b140" target="_blank">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/Dayoung3460/vue-portfolio.git" target="_blank">
          <i class="fab fa-github-square"></i>
        </a>
      </div>
      <div class="copyright text-center">
        <p class="para">
          Copyright &copy;2020 Dayoung Kim All Rights Reserved
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "VueFooter",

  data() {
    return {
      show: true,
    }
  },

  methods: {
    showFooter(bool) {
      this.show = bool
    },
  }
}
</script>

<style scoped>

</style>