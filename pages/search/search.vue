<template>
	<view>
		<!-- 头部搜索栏 -->
		<view class="search-top">
			<navigator url="/pages/mall/mall">
				<image src="../../static/image/all8.png" mode=""></image>
			</navigator>
			<view class="searchBox">
				<image src="../../static/image/search.png" mode=""></image>
				<text>汉服女装</text>
				<view class="search-title">搜索</view>	
				
			</view>
		</view>
		
		<!-- 历史搜索 -->
		<view class="history">
			<view class="history-title">
				<text>历史搜索</text>
				<image src="../../static/image/all9.png" mode=""></image>
			</view>
			<view class="history-content">
				<view class="history-item">汉服童装</view>
				<view class="history-item">汉服男装</view>
			</view>
		</view>
		
		<!-- 搜索发现 -->
		<view class="find">
			<view class="find-title">
				<text>搜索发现</text>
				<image src="../../static/image/all10.png" mode=""></image>
			</view>
			<view class="find-content">
				<view class="find-item">织造丝</view>
				<view class="find-item">汤婆子</view>
				<view class="find-item">马面裙</view>
				<view class="find-item">发簪</view>
				<view class="find-item">手链</view>
				<view class="find-item">短袄裙</view>
				<view class="find-item">明制</view>
				
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
	.search-top{
		width: 100%;
		height: 110rpx;
		background: #fff;
		/*垂直改为水平*/
		display: flex;
		/*居中*/
		justify-content: center;
		align-items: center;
	}
	.search-top image{
		width: 68rpx;
		height: 68rpx;
		margin-left: 12rpx;
		
	}
	.searchBox{
		width: 690rpx;
		height: 70rpx;
		/*表示边框的弧度*/
		border-radius: 80rpx;
		color: #999;
		margin-right: 15rpx;
		background-color: #f7f7f7;
		align-items: center;
		display: flex;
		justify-content: space-between;
	}
	
	.searchBox image{
		width: 28rpx;
		height: 28rpx;
		margin-top: 5rpx;
		margin-right: 12rpx;
	}
	.searchBox text{
		font-size: 28rpx;
	}
	.search-title{
		width: 150rpx;
		height: 60rpx;
		line-height: 60rpx;
		font-size: 28rpx;
		text-align: center;
		border-radius: 80rpx;
		background-color: #fe6f06;
		color: #fff;
	}
	.history-title{
		width: 90%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 34rpx;
		margin-left: 20rpx;
		margin-top: 20rpx;
		font-weight: bold;
	}
	.history-title image{
		width: 50rpx;
		height: 50rpx;
	}
	.history-content{
		width: 90%;
		margin: 10rpx auto;
		display: flex;
		flex-wrap: wrap;
	}
	.history-item{
		height: 50rpx;
		line-height: 50rpx;
		background-color: #f8f8f8;
		margin-top: 10rpx;
		margin-right: 20rpx;
		padding: 0 20rpx;
		border-radius: 20rpx;
		
	}
	.find-title{
		width: 90%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 34rpx;
		margin-left: 20rpx;
		margin-top: 80rpx;
		font-weight: bold;
	}
	.find-title image{
		width: 50rpx;
		height: 50rpx;
	}
	.find-content{
		width: 90%;
		margin: 10rpx auto;
		display: flex;
		flex-wrap: wrap;
	}
	.find-item{
		height: 50rpx;
		line-height: 50rpx;
		background-color: #f8f8f8;
		margin-top: 10rpx;
		margin-right: 20rpx;
		padding: 0 20rpx;
		border-radius: 20rpx;
		
	}

</style>
