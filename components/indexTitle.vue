<template>
	<view class="floorTitle">
		<view class="title">
			{{ name }}
		</view>
		<view class="line">
			<!-- 通过css样式控制楼层标题下的线条-->
		</view>
	</view>
	
</template>

<script>
	export default {
		props:['name']
	}
</script>

<style>
	.floorTitle{
		height: 180rpx;
	}
	.floorTitle .title{
		line-height: 90rpx;
		font-size: 36rpx;
		color: #000;
		font-weight: bold;
		text-align: center;
		padding-top: 50rpx;
	}
	.floorTitle .line{
		width: 88rpx;
		height: 6rpx;
		background: #fe6f06;
		margin: 0 auto;
	}
	
</style>