<template>
	<view>
		<!--1.顶部用户信息的布局-->
		<view class="member-top">
			<!--用户头像-->
			<image class="member-tx" src="../../static/image/head1.png" mode=""></image>
			<!--用户信息-->
			<view class="userInfo">
				<!--登录注册-->
				<!--style="none"当前页面不展示 -->
				<view class="loginReg" style="display: none">
					<navigator url="/pages/login/login">登录注册</navigator>
				</view>
				<!-- 用户登录成功后显示的内容 -->
				<view class="loginUserInfo">
					<text class="username">蘋入瑶山翠黛中</text>
					<text class="nickname">蘋蘋</text>	
				</view>
			</view>
			
			<!-- 二维码 -->
			<view class="QRcode">
				<image src="../../static/image/ewm.png" mode=""></image>
			</view>
			<!-- 消息与设置 -->
			<view class="memberIcon">
				<!--添加消息和设置的按钮布局（字体的样式进行布局）-->
				<image src="../../static/image/All3.png" mode=""></image>
				<image src="../../static/image/All4.png" mode=""></image>
			</view>
		</view>
		<!--2.订单选项-->
		<view class="orderStetus">
			<view class="orderItem">
				<image src="../../static/image/order2.png" mode=""></image>
				<text>待付款</text>
			</view>
			<view class="orderItem">
				<image src="../../static/image/order3.png" mode=""></image>
				<text>待收货</text>
			</view>
			<view class="orderItem">
				<image src="../../static/image/order5.png" mode=""></image>
				<text>待评价</text>
			</view>
			<view class="orderItem">
				<image src="../../static/image/order1 (1).png" mode=""></image>
				<text>全部订单</text>
			</view>
		</view>
		<!-- 分隔线 -->
		<view class="splitLine"></view>
		<!-- 菜单列表 -->
		<view class="menuList">
			<navigator url="/pages/address/list" hover-class="none">
				<view class="menuItem">
					<image src="../../static/image/menu 5.png" mode=""></image>
					<text>收货地址</text>
				</view>
			</navigator>
			
			
			<view class="menuItem">
				<image src="../../static/image/menu 2.png" mode=""></image>
				<text>在线客服</text>
			</view>
			<view class="menuItem">
				<image src="../../static/image/menu 3.png" mode=""></image>
				<text>邀请有礼</text>
			</view>
			<view class="menuItem">
				<image src="../../static/image/menu 4.png" mode=""></image>
				<text>关于我们</text>
			</view>
		</view>
		<!-- 退出登录按钮 -->
		<view class="logout" @tap="goLogout" >
			退出登录
		</view>
		<!--3.-->
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			goLogout() {
				uni.showModal({
					title:'是否退出登录',
					content: '',
					success: res => {
						uni.removeStorageSync('token')
						if(res.confirm) {
							uni.reLaunch({
								url: "/pages/login/login"
							})
						}
					},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style>
	.member-top{
		height: 336rpx;
		/*设置背景图片并且图片不平铺 */
		background: url(../../static/image/bg.png) no-repeat;
		background-size: 100% 336rpx;
		/* 相对定位 */
		position: relative;
	}
	.member-tx{
		height: 110rpx;
		width: 110rpx;
		/*绝对定位*/
		position: absolute;
		top: 165rpx;
		left: 30rpx;
		/*设置图形的边角弧度，如果弧度为50%则就是园*/
		border-radius: 50%;
		background: #ddd;
	}
	.loginReg{
		width: 160rpx;
		height: 45rpx;
		color: #fff;
		font-size: 28rpx;
		border: 1rpx solid #fff;
		text-align: center;
		line-height: 45rpx;
		position: absolute;
		top: 190rpx;
		left: 160rpx;
		border-radius: 10rpx;
	}
	.loginUserInfo{
		position: absolute;
		top: 180rpx;
		left: 160rpx;
	}
	.loginUserInfo text.username{
		height: 42rpx;
		line-height: 30rpx;
		font-size: 35rpx;
		color: #fff;
		/* 块级元素 */
		display: block;
	}
	.loginUserInfo text.nickname{
		height: 38rpx;
		margin-left: 20rpx;
		line-height: 38rpx;
		font-size: 28rpx;
		color: #fff;
		display: block;
	}	
	.QRcode{
		width: 35rpx;
		height: 35rpx;
		position: absolute;
		top: 130rpx;
		right: 30rpx;
	}
	.QRcode image{
		width: 35rpx;
		height: 35rpx;
	}
	.orderStetus{
		display: flex;
		
	}
	.orderItem{
		width: 25%;
		
	}
	.orderItem image{
		width: 70rpx;
		height: 56rpx;
		display: block;
		margin: 20rpx auto 0;
	}
	.orderItem text{
		display: block;
		line-height: 80rpx;
		font-size: 28rpx;
		text-align: center;
		padding-bottom: 10rpx;
	}
	.splitLine{
		width: 100%;
		height: 20rpx;
		background: #f5f5f5;
	}
	.menuItem{
		height: 90rpx;
		margin: 0 30rpx;
		border-top: 1rpx solid #e5e5e5;
		font-size: 28rpx;
		display: flex;
		align-items: center;
		background: url(../../static/image/menu 6.png) no-repeat;
		background-size: 26rpx 26rpx;
		background-position: right center;
	}
	.menuItem image{
		width: 60rpx;
		height: 60rpx;
		margin-right: 25rpx;
	}
	.logout{
		margin: 30rpx;
		height: 85rpx;
		line-height: 85rpx;
		border: 1rpx solid #fff;
		border-radius: 8rpx;
		background: #fe6f06;
		color: #ddd;
		font-size: 28rpx;
		text-align: center;
		border-radius: 20rpx;
	}
	.memberIcon image{
		width: 40rpx;
		height: 40rpx;
		margin-left: 35rpx;
	}
		
	.memberIcon{
		position: absolute;
		top: 50rpx;
		right: 30rpx;
		color: #fff;
	}
	
	

</style>
