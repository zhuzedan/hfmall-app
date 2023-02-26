import {$request} from '../utils/request.js'

// 登录信息
export const queryUserInfo = () => {
  return $request({
    url: '/api/systemuser/info',
    method: 'GET',
  })
}
