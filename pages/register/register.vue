<template>
	<view>
		<image class="logo" src="../../static/image/photo.jpg" mode=""></image>
		<view class="formList">
			<view class="formItem">
			    <input type="text" value="" placeholder="请输入手机号" v-model="phone"/>
		    </view>
			<view class="formItem">
			    <input type="text" value="" placeholder="请输入用户名" v-model="username"/>
			</view>
			<view class="formItem">
			    <input type="text" value="" placeholder="请输入邮箱" v-model="email"/>
			</view>
			<view class="formItem">
				<input type="password" value="" placeholder="请输入密码" v-model="password"/>
			</view>
			<view class="registerBtn" @click="submitRegister">
				注册
			</view>
			<view class="loginText">
				已有账号
				<navigator url="/pages/login/login">点击登录</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username: '',
				password: '',
				phone: '',
				email: ''
			}
		},
		methods: {
			submitRegister() {
				uni.showLoading({
				  title: '加载中',
				})
				uni.request({
					url: 'http://localhost:8888/api/app-user/register',
					method: 'POST',
					data: {
						username: this.username,
						password: this.password,
						phone: this.phone,
						email: this.email
					},
					success: (res) => {
						if(res.data.code == 200) {
							uni.hideLoading()
							uni.showToast({
								icon:'success',
								title:'注册成功，进入登录页',
								duration:1000
							})
							setTimeout(() => {
								uni.navigateTo({
									url:'/pages/login/login'
								})
							},2000)
						}else {
							uni.hideLoading()
							uni.showToast({
								icon:'error',
								duration:1000,
								title: res.data.message
							})
						}
						console.log(res.data.code)
					}
				})
			}
		}
	}
</script>

<style>
	.logo{
		width: 250rpx;
		height: 250rpx;
		display: block;
		/*提供三个值，第一个用于上，第二个用于左、右，第三个用于下。*/
		margin: 70rpx auto 15rpx;
		border-radius: 60rpx;
	}
	.formItem{
		height: 74rpx;
		padding-top: 36rpx;
		border-bottom: 1rpx solid #e5e5e5;
		margin:0 100rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.formItem input{
		font-size: 28rpx;
	}
	.getCode{
		width: 180rpx;
		height: 60rpx;
		line-height: 60rpx;
		background: #f7f7f7;
		color: #fe6f06;
		font-size: 24rpx;
		text-align: center;
		border-radius: 10rpx;
	}
	.getCode .activeCode{
		background: #fe6f06;
		color: #fff;
	}
	.registerBtn{
		width: 550rpx;
		height: 86rpx;
		line-height: 86rpx;
		margin: 60rpx 100rpx 0;
		background: #fe6f06;
		color: #fff;
		font-size: 28rpx;
		text-align: center;
		border-radius: 20rpx;
	}
	.loginText{
		display: flex;
		height: 120rpx;
		font-size: 24rpx;
		justify-content: center;
		align-items: center;
	}
	.loginText navigator{
		color: #fe6f06;
		margin-left: 6rpx;
	}
</style>
