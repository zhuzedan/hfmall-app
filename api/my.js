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