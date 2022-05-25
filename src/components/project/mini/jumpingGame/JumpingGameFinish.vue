<template>
  <div class="jumping-game">
    <a href="https://github.com/Dayoung3460/vue-portfolio/tree/master/src/components/project/mini/jumpingGame" target="_blank" class="github">
      <i class="fab fa-github-square"></i>
    </a>
    <div class="grid">
      <h1>GAME OVER</h1>
      <h3>Your Score<h1 class="score">{{ score }}</h1></h3>
      <div class="game-over-btns">
        <button class="back-btn" @click="goBack()">Back</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JumpingGameFinish",

  data() {
    return {
      score: this.$route.params.score,
    }
  },

  created() {
    if(!this.score) {
      this.$router.push({ name: 'ProjectMiniJumpingGameStart' })
    }

    this.doodlerBottomSpace = this.startPoint
  },

  methods: {
    goBack() {
      this.$router.push({ name: 'ProjectMiniJumpingGameStart' })
    }
  }
}
</script>

<style scoped>

</style>