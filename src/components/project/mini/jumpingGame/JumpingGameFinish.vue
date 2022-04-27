<template>
  <div class="jumping-game">
    <div class="grid">
      <button class="start-btn" :class="{ inactive: isStarted }" @click="gameStart()"></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "JumpingGameFinish",

  data() {
    return {
      isStarted: false,
      doodlerLeftSpace: 50,
      startPoint: 100,
      doodlerBottomSpace: 0,
      isGameOver: false,
      platforms: [],
      upTimerId: null,
      downTimerId: null,
      isJumping: true,
      isGoingLeft: false,
      isGoingRight: false,
      leftTimerId: null,
      rightTimerId: null,
      score: 0,
    }
  },

  created() {
    this.doodlerBottomSpace = this.startPoint
  },

  methods: {
    gameStart() {
      this.isStarted = true
    }
  }
}
</script>

<style scoped>

</style>