<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">
              北京
            </div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hotCities" :key="item.id">
            <div class="button">
              {{item.name}}
            </div>
          </div>
        </div>
      </div>
      <!-- of遍历对象，第2个元素是key值 -->
      <div
        class="area"
        v-for="(item, key) of cities"
        :key="key"
        :ref="key"
      >
      <!--
        v-for里的ref和:ref的区别：
        1、ref="key", 此时的key只是一个字符串，this.$refs只增加了一个引用, 即this.$refs.key, 是一个数组，数组的每一项就是对应的DOM元素
        2、:ref="key", 此时的key是data里的一个变量，循环了多少次，this.$refs就增加了多少个引用，新增的每一个引用都是一个数组，数组的第1项是对应的DOM元素
       -->
        <div class="title border-topbottom">{{key}}</div>
        <!-- 内层循环 -->
        <div class="item-list" v-for="innerItem of item" :key="innerItem.id">
          <div class="item border-bottom">{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  watch: {
    // 监听父元素传递的值
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        // 参数element需要是一个DOM元素或者选择器
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'

  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    // 注意list的css属性的设置
    overflow: hidden
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    left: 0
    .area
      .title
        line-height: .4rem
        padding-left: .2rem
        font-size: .26rem
        background: #eee
        color: #666
      .button-list
        overflow: hidden
        padding: .1rem .6rem .1rem .1rem
        .button-wrapper
          float: left
          width: 33.3%
          .button
            margin: .1rem
            padding: .1rem 0
            text-align: center
            border: .02rem solid #ccc
            border-radius: .06rem
      .item-list
        line-height: .76rem
        padding-left: .2rem
</style>
