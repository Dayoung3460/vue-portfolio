<template>
  <div class="jumping-game">
    <div class="grid">
      <div class="platform" :style="{ left: platform.left + 'px', bottom: platform.bottom + 'px' }" v-for="(platform, idx) in platforms" :key="idx"></div>
      <div class="doodler" :style="{ left: platforms[0].left + 'px', bottom: doodlerBottomSpace + 'px' }" :class="{ character1: character === '1', character2: character === '2', character3: character === '3' }"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JumpingGame",

  data() {
    return {
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
      character: this.$route.params.character,
      lv: this.$route.params.lv,
    }
  },

  created() {
    if(!this.character || !this.lv) {
      this.$router.back()
    }

    this.doodlerBottomSpace = this.startPoint

    this.createdPlatforms()
    setInterval(this.movePlatforms, 30)
  },

  methods: {
    createdPlatforms() {
      const platformCount = 5
      let platGap = 600 / platformCount

      for (let i = 0; i < platformCount; i++) {
        let newPlatBottom = 60 + i * platGap
        this.platforms.push({
          bottom: newPlatBottom,
          left: Math.random() * 315,
        });
      }
    },

    movePlatforms() {
      if (this.doodlerBottomSpace > 100) {
        this.platforms.forEach((platform) => {
          if(this.lv === '1') {
            platform.bottom -= 2
          } else if(this.lv === '2') {
            platform.bottom -= 4
          } else {
            platform.bottom -= 6
          }

          if (platform.bottom < 10) {
            this.platforms.shift()
            this.score++

            this.platforms.push({
              bottom: 600,
              left: Math.random() * 315,
            })
          }
        });
      }
    },
  }
}
</script>

<style scoped>

</style>