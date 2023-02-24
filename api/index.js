import {$request} from '../utils/request.js'

// 查轮播图
export const getSwiperList = () => {
  return $request({
    url: '/api/app-index/swiper',
    method: 'POST'
  })
}

// 查文章列表
export const getNewsList = () => {
  return $request({
    url: '/api/app-index/news',
    method: 'POST'
  })
}

// 查单个文章详情
export const getNewsDetail = (newid) => {
  return $request({
    url: '/api/app-index/readOneNew?newId='+newid,
    method: 'GET'
  })
}

// 查全部商品
export const queryAllProduct = () => {
  return $request({
    url: '/api/app-index/queryAllProduct',
    method: 'GET'
  })
}
// 获取单个商品详情
export const queryOneProduct = (id) => {
  return $request({
    url: '/api/product/read?id='+id,
    method: 'GET'
  })
}