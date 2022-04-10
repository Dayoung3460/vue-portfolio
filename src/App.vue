<template>
  <div id="app">
    <Header ref="Header"></Header>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <Footer ref="Footer"></Footer>
  </div>
</template>

<script>
import Header from "@/components/common/Header"
import Footer from "@/components/common/Footer"

export default {
  name: 'App',

  components: {
    'Header': Header,
    'Footer': Footer,
  },

  created () {

  },

  mounted() {

  },

  methods: {
    showHeaderFooter(state) {
      this.$refs.Header.showHeader(state)
      this.$refs.Footer.showFooter(state)
    }
  },

  beforeCreate() {
    // let console = (function(oldCons){
    //   return {
    //     log: function(){
    //       if (process.env.VUE_APP_DEBUG === "1") {
    //         oldCons.log.apply(console, arguments)
    //       }
    //     }
    //   }
    // }(window.console))
    // window.console = console
  }


}
</script>

<style>

</style>
