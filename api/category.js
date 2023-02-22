import {$request} from '../utils/request.js'

// 查分类及小分类商品
export const getCategories = () => {
  return $request({
    url: '/api/category/queryCategories',
    method: 'GET'
  })
}