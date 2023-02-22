let baseUrl = 'http://localhost:8888'
// 封装网络请求函数
export const $request = (params = {}) => {
	return new Promise((resolve, reject) => {
		const head_tmp = {
			"Authorization": "Bearer " + uni.getStorageSync('token') || ''
		}
		uni.showLoading({
			title: '加载中',
		})
		uni.request({
			url: baseUrl + params.url,
			header: head_tmp,
			data: params.data || {},
			method: params.method,
			success: (res) => {
				// console.log('success', res.data)
				if (res.data.code == 401) {
					uni.showModal({
						title: '登录过期，请重新登录登录',
						confirmText: '确定',
						showCancel: false,
						complete: (res) => {
							if (res.cancel) {

							}
							if (res.confirm) {
								uni.removeStorageSync('token')
								uni.reLaunch({
									url: '/pages/login/login',
								})
							}
						}
					})
				}
				uni.hideLoading()
				resolve(res.data)
			},
			fail: (err) => {
				uni.hideLoading()
				uni.showToast({
					title: 'error',
					icon: 'error'
				})
				reject(err)
			}
		})
	})
}
