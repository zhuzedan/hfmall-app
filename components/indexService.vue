<template>
	<view>
		<!--首页服务分类-->
		<view class="shopNav">
			<view class="shopNavItem">
				<image src="../static/image/part1.png" mode=""></image>
				<text>汉服信息</text>
			</view>
			<navigator url="/pages/news/news">
				<view class="shopNavItem">
					<image src="../static/image/part2.png" mode=""></image>
					<text>汉服头条</text>
				</view>
			</navigator>
			
			<view class="shopNavItem">
				<image src="../static/image/part3.png" mode=""></image>
				<text>汉服活动</text>
			</view>
			<navigator url="/pages/mall/mall">
				<view class="shopNavItem">
					<image src="../static/image/part4.png" mode=""></image>
					<text>汉服商城</text>
				</view>
			</navigator>
			
		</view>	
	</view>
</template>

<script>
</script>

<style>
	.shopNav{
		height: 225rpx;
		/*内部元素水平排列*/
		display: flex;
		/*设置内容两端对齐*/
		justify-content: center;
		background:#fff;
	}
	.shopNavItem{
		margin: 0 10rpx;
	}
	.shopNavItem image{
		width: 150rpx;
		height: 150rpx;
		display: block;
		margin: 30rpx auto 0;
	}
	.shopNavItem text{
		display: block;
		font-size: 35rpx;
		counter: #000000;
		line-height: 40rpx;
	}
</style>