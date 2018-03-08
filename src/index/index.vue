<template>
  <div class="index">
    <div :class="['mirana', wideScreen ? 'left-right':'top-bottom']" @click="toMirana">
      <p class="text">Mirana的地盘<br>Java开发，后端技术</p>
    </div>
    <div :class="['vary', wideScreen ? 'left-right':'top-bottom']" @click="toVary">
      <p class="text">Vary的地盘<br>前端技术，生活分享</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      wideScreen: true,
      timerFlag: true
    }
  },
  created () {},
  mounted () {
    window.onresize = () => {
      this.checkScreen()
    }
    this.checkScreen()
  },
  methods: {
    checkScreen () {
      if (this.timerFlag) {
        if (window.innerWidth >= window.innerHeight) {
          this.wideScreen = true
        } else {
          this.wideScreen = false
        }
        this.timerFlag = false
        setTimeout(() => {
          this.timerFlag = true
        }, 300)
      }
    },
    toMirana () {
      this.$router.push({name: 'mirana'})
    },
    toVary () {
      this.$router.push({name: 'vary'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.left-right {
  position: fixed;
  top: 0;
  bottom: 0;
  &.mirana {
    left: 0;
    right: 50%;
  }
  &.vary {
    left: 50%;
    right: 0;
  }
}
.top-bottom {
  position: fixed;
  left: 0;
  right: 0;
  &.mirana {
    top: 0;
    bottom: 50%;
  }
  &.vary {
    top: 50%;
    bottom: 0;
  }
}
.mirana {
  background-image: url("/static/images/mirana-bg.jpg");
  background-size: auto 100%;
  cursor: pointer;
  .text {
    position: absolute;
    top: 50%;
    margin-top: -50px;
    width: 100%;
    color: #df0d4c;
    font-size: 30px;
    line-height: 50px;
    text-align: center;
  }
}
.vary {
  background-image: url("/static/images/vary-bg.jpg");
  background-size: auto 100%;
  cursor: pointer;
  .text {
    position: absolute;
    top: 50%;
    margin-top: -50px;
    width: 100%;
    color: #f30000;
    font-size: 30px;
    line-height: 50px;
    text-align: center;
  }
}
</style>
