<template>
  <div
    class="container"
    @click="handleGalleryClick"
  >
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide
          v-for="(item, index) of imgs"
          :key="index"
        >
          <img class="gallery-img" :src="item" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallery',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    handleGalleryClick () {
      this.$emit('close')
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        // swiper显示/隐藏或者修改swiper子元素时，自动初始化swiper
        observer: true,
        // 父元素变化时，swiper更新
        observeParents: true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow: inherit
  .container
    display: flex
    justify-content: center
    align-items: center
    z-index: 99
    position: fixed
    top: 0
    right: 0
    bottom: 0
    left: 0
    background: #000
    .wrapper
      // overflow: hidden
      width: 100%
      height: 0
      padding-bottom: 100%
      background: #fff
      .gallery-img
        width: 100%
      .swiper-pagination
        bottom: -1rem
        color: #fff
</style>
