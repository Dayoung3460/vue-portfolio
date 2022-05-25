<template>
  <div class="jumping-game">
    <a href="https://github.com/Dayoung3460/vue-portfolio/tree/master/src/components/project/mini/jumpingGame" target="_blank" class="github">
      <i class="fab fa-github-square"></i>
    </a>
    <div class="grid">
      <div class="platform" :style="{ left: platform.left + 'px', bottom: platform.bottom + 'px' }" v-for="(platform, idx) in platforms" :key="idx"></div>
      <div
          class="doodler"
          :style="{ left: doodlerLeftSpace + 'px', bottom: doodlerBottomSpace + 'px' }"
          :class="{ character1: character === '1', character2: character === '2', character3: character === '3', goLeft: isGoingLeft, goRight: isGoingRight }">
      </div>
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
    this.jump()

    document.addEventListener('keyup', this.control)
  },

  methods: {
    control(e) {
      if (e.key === "ArrowLeft") {
        this.moveLeft()
      } else if (e.key === "ArrowRight") {
        this.moveRight()
      } else if (e.key === "ArrowUp") {
        this.moveStraight()
      }
    },

    moveLeft() {
      if (this.isGoingRight) {
        clearInterval(this.rightTimerId)
        this.isGoingRight = false
      }
      this.isGoingLeft = true
      this.leftTimerId = setInterval(this.goLeft, 10)
    },

    goLeft() {
      if (this.doodlerLeftSpace >= 0) {
        this.doodlerLeftSpace -= 2
      } else {
        this.moveRight()
      }
    },

    moveRight() {
      if (this.isGoingLeft) {
        clearInterval(this.leftTimerId)
        this.isGoingLeft = false
      }
      this.isGoingRight = true
      this.rightTimerId = setInterval(this.goRight, 10)
    },

    goRight() {
      // (grid width 400px) - (doodler width 60px)
      if (this.doodlerLeftSpace <= 340) {
        this.doodlerLeftSpace += 2
      } else {
        this.moveLeft()
      }
    },

    moveStraight() {
      this.isGoingLeft = false
      this.isGoingRight = false
      clearInterval(this.leftTimerId);
      clearInterval(this.rightTimerId);
    },

    jump() {
      clearInterval(this.downTimerId)
      this.isJumping = true
      this.upTimerId = setInterval(() => {
        this.doodlerBottomSpace += 10
        if (this.doodlerBottomSpace > this.startPoint + 250) {
          this.fall()
        }
      }, 30)
    },

    fall() {
      this.isJumping = false
      clearInterval(this.upTimerId)
      this.downTimerId = setInterval(() => {
        if(this.lv === '1') {
          this.doodlerBottomSpace -= 5
        } else if(this.lv === '2') {
          this.doodlerBottomSpace -= 10
        } else {
          this.doodlerBottomSpace -= 15
        }

        if (this.doodlerBottomSpace <= 0) {
          this.gameOver()
        }

        this.platforms.forEach((platform) => {
          if (
              // check if doodler is on the platform
              this.doodlerBottomSpace >= platform.bottom &&
              // platform height = 15px
              this.doodlerBottomSpace <= platform.bottom + 15 &&
              // doodler width = 60px
              this.doodlerLeftSpace + 60 >= platform.left &&
              // platform width = 85px
              this.doodlerLeftSpace <= platform.left + 85 &&
              !this.isJumping
          ) {
            this.startPoint = this.doodlerBottomSpace
            this.jump()
          }
        })
      }, 30)
    },

    gameOver() {
      this.isGameOver = true
      this.$router.push({ name: 'ProjectMiniJumpingGameFinish', params: { score: this.score } })
      clearInterval(this.upTimerId)
      clearInterval(this.downTimerId)
      clearInterval(this.leftTimerId)
      clearInterval(this.rightTimerId)
    },

    createdPlatforms() {
      const platformCount = 5
      let platGap = 600 / platformCount

      for (let i = 0; i < platformCount; i++) {
        let newPlatBottom = 60 + i * platGap
        this.platforms.push({
          bottom: newPlatBottom,
          left: Math.random() * 315,
        });
        this.doodlerLeftSpace = this.platforms[0].left
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