<template>
	<view>
		<image class="logo" src="../../static/image/photo.jpg" mode=""></image>
		<view class="formList">
			<view class="formItem">
			    <input type="text" value="" placeholder="请输入手机号"/>
		    </view>
			<view class="formItem">
				<input type="text" value="" placeholder="请输入验证码"/>
				<view class="getCode activeCode">获取验证码</view>
			</view>
			<view class="formItem">
				<input type="password" value="" placeholder="请输入密码"/>
			</view>
			<view class="registerBtn">
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
				
			}
		},
		methods: {
			
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
