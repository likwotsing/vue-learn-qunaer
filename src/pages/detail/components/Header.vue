<template>
  <div>
    <div class="header-abs" v-show="showAbs">
      <router-link tag="div" class="iconfont header-abs-icon" to="/">
        &#xe624;
      </router-link>
    </div>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link tag="div" class="iconfont header-fixed-icon" to="/">
        &#xe624;
      </router-link>
      景点详情
    </div>
    <div class="content">content</div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      console.log('scroll')
      const top = document.documentElement.scrollTop
      if (top > 50) {
        let opacity = top / 140
        // 做个判断，是否超过1
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle.opacity = opacity
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  mounted () {
  },
  activated () {
    window.document.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    // 解绑全局事件
    window.document.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables'
  .header-abs
    position: absolute
    top: .2rem
    left: .2rem
    width: .8rem
    height: .8rem
    line-height: .8rem
    border-radius: 50%
    text-align: center
    background: rgba(0, 0, 0, .8)
    .header-abs-icon
      font-size: .4rem
      color: #fff
  .header-fixed
    position: fixed
    top: 0
    right: 0
    bottom: 0
    left: 0
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    font-size: .32rem
    background: $bgColor
    color: #fff
    .header-fixed-icon
      position: absolute
      top: 0
      left: 0
      width: .64rem
  .content
    height: 50rem
</style>
