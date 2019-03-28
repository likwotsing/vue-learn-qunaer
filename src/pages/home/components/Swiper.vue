<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- http://touch.piao.qunar.com/ -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    // 因为是自动轮播，一开始渲染的是空数组，加上判断后，空数组不渲染，有了数据再渲染
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
// .wrapper /deep/ .swiper-pagination-bullet-active
.wrapper >>> .swiper-pagination-bullet-active
  background: #fff
.wrapper
  //防止图片加载慢，下面的内容顶上来
  overflow: hidden
  width: 100%
  height: 0
  padding-bottom: 26.67%
  // 方法2：使用视口宽度，兼容性不好
  // height: 26.67vw
  .swiper-img
    width: 100%
</style>
