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