export default {
  changeCity (state, city) {
    state.city = city
    // 页面刷新后，vuex的state的值复位了
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
