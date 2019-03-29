<template>
  <div>
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :gallaryImgs="gallaryImgs"
    ></detail-banner>
    <detail-header></detail-header>
    <detail-list :list="list"></detail-list>
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
  // 组件name的3个用处：
  // 1、递归组件会使用到组件的name
  // 2、在keep-alive的include和exclude属性里使用
  // 3、在devTool是可以查看到vue组件的名称
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: [{
        title: '成人票',
        children: [{
          title: '成人3联票',
          children: [{
            title: '成人3联票---'
          }, {
            title: '成人3联票--2'
          }]
        }, {
          title: '成人4联票'
        }]
      }, {
        title: '学生票'
      }, {
        title: '儿童票'
      }, {
        title: '特惠票'
      }]
    }
  },
  methods: {
    getDetailInfo () {
      // axios.get('/api/detail.json?id=' + this.$route.params.id)
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      })
        .then(this.handleGetDetailInfoSucc)
    },
    handleGetDetailInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
      }
    }
  },
  mounted () {
    // 若使用了keep-alive，会缓存到内存里，该函数只会在页面创建的时候触发一次
    // 因为detail组件的参数id不同需要发送不同的请求，所以需要放到activated里
    // 下面的函数不能去掉注释，否则在该页面首次加载会调用2次函数：mounted、activated
    // this.getDetailInfo()
  },
  activated () {
    // 此处可以使用activated解决点击每个详情都发送ajax的问题，
    // 也可以在keep-alive里设置exclude属性，不缓存某个页面
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 50rem
</style>
