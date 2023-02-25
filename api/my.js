import {$request} from '../utils/request.js'

// 添加收货地址
export const insertAddress = (name,gender,phone,address,detailAddress,isDefault) => {
  return $request({
    url: '/api/app-my/insertAddress',
    method: 'POST',
		data: {
			name,
			gender,
			phone,
			address,
			detailAddress,
			isDefault
		}
  })
}

// 查收货地址
export const queryAddress = () => {
  return $request({
    url: '/api/app-my/getAddress',
    method: 'GET',
  })
}
// 删除收货地址
export const deleteAddress = (id) => {
	return $request({
		url: '/api/app-my/deleteAddress?id='+id,
		method: 'DELETE'
	})
}
// 获取地址详情
export const readAddress = (id) => {
	return $request({
		url: '/api/app-my/readAddress?id='+id,
		method: 'GET'
	})
}
// 修改地址
export const updateAddress = (id,name,gender,phone,address,detailAddress,isDefault) => {
	return $request({
		url: '/api/app-my/updateAddress',
		method: 'POST',
		data: {
			id,
			name,
			gender,
			phone,
			address,
			detailAddress,
			isDefault
		}
	})
}