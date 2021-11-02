const mockBaseUrl =
  'https://mock.mengxuegu.com/mock/617e644eb17b351d1beab504/meituan'

const meituanBaseUrl = 'https://meituan.thexxdd.cn/api'
// 获取首页轮播图数组
export function swiperList() {
  return new Promise((resolve, reject) => {
    uni.request({
      url: `${mockBaseUrl}/swiperlist`,
      method: 'GET',
      success: (res) => {
        resolve(res.data.data)
      },
      fail: (err) => {
        reject(err)
      }
    })
  })
}
// 测试
export function meituanTest() {
  return new Promise((resolve, reject) => {
    uni.request({
      url: `${meituanBaseUrl}/forshop/starting`,
      method: 'post',
      success: (res) => {
        resolve(res)
      },
      fail: (error) => {
        reject(error)
      }
    })
  })
}
