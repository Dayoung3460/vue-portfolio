<template>
  <header class="header-area" id="home" v-if="show">
    <div class="main-menu">
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand point" @click="scrollToElement(0)">
          <img src="Img/logo.png" class="d-inline-block align-top" alt="logo">
        </a>
        <button class="navbar-toggler" type="button" @click="toggleBtn">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="header-menu" :class="{ mobileMenuActive: isOpenMobileMenu }" id="navbarNav">
          <div class="mr-auto"></div>
          <ul class="navbar-nav">
            <li class="nav-item point" :class="{ active: activeMenu === 0 }" @click="scrollToElement(0)">
              <a class="nav-link">Home</a>
            </li>
            <li class="nav-item point" :class="{ active: activeMenu === 1 }" @click="scrollToElement(1)">
              <a class="nav-link">About</a>
            </li>
            <li class="nav-item point" :class="{ active: activeMenu === 2 }" @click="scrollToElement(2)">
              <a class="nav-link">Portfolio</a>
            </li>
            <li class="nav-item point" :class="{ active: activeMenu === 3 }" @click="scrollToElement(3)">
              <a class="nav-link">Contact</a>
            </li>
            <li class="nav-item point" @click="selectLang('ko')">
              <a><img src="img/kor.png" alt="Korean"></a>
            </li>
            <li class="nav-item point" @click="selectLang('en')">
              <a><img src="img/usa.png" alt="Chinese"></a>
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
      activeMenu: 0,
      isOpenMobileMenu: false,
      show: true,
    }
  },

  methods: {
    showHeader(bool) {
      this.show = bool
    },

    selectLang(lang) {
      this.$root.$i18n.locale = lang
      localStorage.setItem('lang', this.$root.$i18n.locale)

      this.$emit('closeMobileMenu')
    },

    toggleBtn() {
      this.isOpenMobileMenu = !this.isOpenMobileMenu
    },

    scrollToElement(activeMenu) {
      this.activeMenu = activeMenu

      let el = null
      if(activeMenu === 1) {
        el = document.getElementById('aboutMe')
      } else if(activeMenu === 2) {
        el = document.getElementById('smallProject')
      } else if(activeMenu === 3) {
        el = document.getElementById('contact')
      } else {
        el = document.getElementById('mainHome')
        if(this.$router.history.current.name !== 'Main') {
          this.$router.push({ name: 'Main' })
        }
      }

      if(el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }

    }
  }

}
</script>

<style>

</style>
