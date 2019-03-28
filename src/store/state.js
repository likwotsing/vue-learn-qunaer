let defaultCity = '上海'
// 注意：若用户关闭了localStorage，可能会出错，建议使用try...catch
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity
}
