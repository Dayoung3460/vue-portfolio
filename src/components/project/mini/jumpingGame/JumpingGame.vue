<template>
  <div class="jumping-game">
<!--    <a href="https://github.com/Dayoung3460/Jumping-Game.git" target="_blank" class="github"><i class="fab fa-github-square"></i></a>-->
    <button class="start-btn"></button>
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
      <input type="radio" checked="checked" id="character1" name="character" value="character1">
      <img src="/img/character1.png" alt="spongebob"><br>
      <input type="radio" id="character2" name="character" value="character2">
      <img src="/img/character2.png" alt="patrick"><br>
      <input type="radio" id="character3" name="character" value="character3">
      <img src="/img/character3.png" alt="sandy-cheeks"><br>
    </form>
    <form class="level">
      <p>LEVEL</p>
      <input type="radio" checked="checked" id="lv1" name="lv" value="lv1">
      <label for="lv1">1</label>
      <input type="radio" id="lv2" name="lv" value="lv2">
      <label for="lv2">2</label>
      <input type="radio" id="lv3" name="lv" value="lv3">
      <label for="lv3">3</label>
    </form>
    <div class="grid"></div>
  </div>
</template>

<script>
export default {
  name: "JumpingGame",

  data() {
    return {

    }
  },

  created() {

  }
}
</script>

<style scoped>

</style>