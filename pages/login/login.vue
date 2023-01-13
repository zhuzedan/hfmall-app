<template>
	<view>
		<image class="logo" src="../../static/image/photo.jpg" mode=""></image>
		<view class="formList">
			<view class="formItem">
				<input type="text" value="" placeholder="请输入手机号"/>
			</view>
			<view class="formItem">
				<input type="password" value="" placeholder="请输入密码"/>
			</view>
			<view class="loginBtn">
				登录
			</view>
			<view class="loginNav">
				<navigator url="#" hover-class="none">忘记密码</navigator>
				<text>|</text>
				<!--navigator表示页面的跳转其中uel代表目标页面页面的路径-->
				<navigator url="/pages/register/register" hover-class="none" class="loginRegister">注册账号</navigator>
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
	.loginBtn{
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
	.loginNav{
		display: flex;
		height: 120rpx;
		font-size: 24rpx;
		/*水平居中*/
		justify-content: center;
		/*垂直居中*/
		align-items: center;
	}
	.loginNav .loginRegister{
		color: #fe6f06;
		margin-left: 6rpx;
	}

</style>
