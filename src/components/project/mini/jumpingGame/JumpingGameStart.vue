<template>
  <div class="jumping-game">
    <a href="https://github.com/Dayoung3460/vue-portfolio/tree/master/src/components/project/mini/jumpingGame" target="_blank" class="github"><i class="fab fa-github-square"></i></a>
    <div class="grid">
      <button class="start-btn" @click="gameStart()"></button>
      <div class="arrow-key">
        <div><i class="fas fa-caret-square-left"></i></div>
        <div><i class="fas fa-caret-square-up"></i></div>
        <div><i class="fas fa-caret-square-right"></i></div>
      </div>
      <div class="direction">
        <span>left</span>
        <span>straight</span>
        <span>right</span>
      </div>
      <form class="character">
        <input type="radio" v-model="character" id="character1" name="character" value="1">
        <img src="/img/character1.png" alt="spongebob"><br>
        <input type="radio" v-model="character" id="character2" name="character" value="2">
        <img src="/img/character2.png" alt="patrick"><br>
        <input type="radio" v-model="character" id="character3" name="character" value="3">
        <img src="/img/character3.png" alt="sandy-cheeks"><br>
      </form>
      <form class="level">
        <p>LEVEL</p>
        <input type="radio" v-model="lv" id="lv1" name="lv" value="1">
        <label for="lv1">1</label>
        <input type="radio" v-model="lv" id="lv2" name="lv" value="2">
        <label for="lv2">2</label>
        <input type="radio" v-model="lv" id="lv3" name="lv" value="3">
        <label for="lv3">3</label>
      </form>
    </div>

  </div>
</template>

<script>
export default {
  name: "JumpingGameStart",

  data() {
    return {
      character: '1',
      lv: '1',
    }
  },

  methods: {
    gameStart() {
      this.$router.push({ name: 'ProjectMiniJumpingGame', params: { character: this.character, lv: this.lv } })
    }
  }
}
</script>

<style scoped>

</style>