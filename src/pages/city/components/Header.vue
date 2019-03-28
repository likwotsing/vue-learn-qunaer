<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont back-icon">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables'
  .header
    position: relative
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    font-size: .32rem
    background: $bgColor
    color: #fff
    .back-icon
      position: absolute
      top: 0
      left: 0
      width: .64rem
      // router-link会转变成a标签，需要设置下字体颜色
      color: #fff
</style>
