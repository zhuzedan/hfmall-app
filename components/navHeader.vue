<!--顶部导航栏的封装-->
<template>
	<view >
		<!--顶部导航配置-->
		<view class="status"></view>
		<!--编写导航的布局-->
		<view class="header">
		    <!--1.顶部导航布局-->
			<view class="navBar">
			    <view class="search">
				    <image src="../static/image/search.png" mode=""></image>
				</view>
				<view class="logo">
				    <image src="../static/image/Icon3.png" mode=""></image>
				</view>
				<view class="cart">
				    <image src="../static/image/ShoppingCart1.png" mode=""></image>
				</view>
			</view>
			
			<!--2.顶部菜单导航布局-->
			<view class="menuTab">
			    <view class="menuTabItem menuActive">推荐</view>
				<view class="menuTabItem ">汉服</view>
				<view class="menuTabItem">发簪</view>
				<view class="menuTabItem">发冠</view>
				<view class="menuTabItem">荷包</view>
			</view>	
		</view>
		
		<!--解决顶部被遮盖问题-->
		<view class="headerEmpty"></view>
		
	</view>
</template>

<script>
</script>

<style>
	.headerEmpty{
		height: 140rpx;
	}
	.status{
		width: 100%;
		/*高度根据手机自动调节*/
		height: var(--status-bar-height);
		/*修复顶部被遮挡的问题*/
		position: fixed;
		top: 0;
		background: #fff;
		z-index: 9;
	}
	.header{
		width: 100%;
		height: 140rpx;
		/*固定定位*/
		position: fixed;
		background-color: #fff;
		/*设置图层级别(数字越大越上层)*/
		z-index: 9;
		/*修复顶部问题*/
		
	}
	.navBar{
		height: 80rpx;
		/*内部元素水平排列*/
		display: flex;
		margin: 0 20rpx;
		align-items: center;
		/*设置内容两端对齐*/
		justify-content: space-between;
	}
	.search image{
		width: 30rpx;
		height: 30rpx;
	}
	.logo image{
		width: 140rpx;
		height: 30rpx;
	}
	.cart image{
		width: 30rpx;
		height: 30rpx;
	}
	.menuTab{
		height: 50rpx;
		display: flex;
		margin: 0 20rpx;
		justify-content: space-between;
	}
	.menuTabItem{
		font-size: 15rpx;
		color: 000;
		width: 50rpx;
		line-height: 50rpx;
	}
	.menuTabItem.menuActive{
		color: #fe6f06;
		border-bottom: 1rpx solid #fe6f06;
		
	}
</style>