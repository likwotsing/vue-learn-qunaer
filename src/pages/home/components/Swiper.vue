<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- http://touch.piao.qunar.com/ -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgSrc" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgSrc: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/2df3ba0f23801d7ed5607f4767a18482.jpg_750x200_b4d6aa93.jpg'
      }, {
        id: '0002',
        imgSrc: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/ed5f4115226306e48e6fad106a038afe.jpg_750x200_64df48d6.jpg'
      }]
    }
  }
};
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
