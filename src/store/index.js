import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  // 没有异步操作，可以不使用actions，直接使用mutations
  // actions: {
  //   changeCity (ctx, city) {
  //     ctx.commit('changeCity', city)
  //   }
  // },
  mutations,
  // getters是vuex的计算属性，会缓存，只有当依赖变化时才会重新计算
  getters: {
    doubleCity (state) {
      return state.city + ' ' + state.city
    }
  }
})
