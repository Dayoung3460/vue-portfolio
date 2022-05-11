<template>
  <div class="clock">
    <div class="hand hour data-hour-hand" :style="{ '--rotation': hoursRatio * 360 }"></div>
    <div class="hand minute data-minute-hand" :style="{ '--rotation': minutesRatio * 360 }"></div>
    <div class="hand second data-second-hand" :style="{ '--rotation': secondsRatio * 360 }"></div>

    <div class="number number1">&#x2160;</div>
    <div class="number number2">&#x2161;</div>
    <div class="number number3">&#x2162;</div>
    <div class="number number4">&#x2163;</div>
    <div class="number number5">&#x2164;</div>
    <div class="number number6">&#x2165;</div>
    <div class="number number7">&#x2166;</div>
    <div class="number number8">&#x2167;</div>
    <div class="number number9">&#x2168;</div>
    <div class="number number10">&#x2169;</div>
    <div class="number number11">&#x216A;</div>
    <div class="number number12">&#x216B;</div>

    <a href="https://github.com/Dayoung3460/vue-portfolio/tree/master/src/components/project/mini/clock" target="_blank" class="github">
      <i class="fab fa-github-square"></i>
    </a>

  </div>
</template>

<script>
export default {
  name: "VueClock",

  data() {
    return {
      currentDate: null,
      secondsRatio: 0,
      minutesRatio: 0,
      hoursRatio : 0,
    }
  },

  created() {
    this.setClock()
    setInterval(this.setClock, 1000)
  },

  methods: {
    setClock() {
      this.currentDate = new Date()
      this.secondsRatio = this.currentDate.getSeconds() / 60
      this.minutesRatio = (this.secondsRatio + this.currentDate.getMinutes()) / 60
      this.hoursRatio = (this.minutesRatio + this.currentDate.getHours()) / 12
    }
  }
}
</script>

<style scoped>

</style>