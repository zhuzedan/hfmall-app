<template>
	<view class="floorTable">
		<!--表格中的第一项-->
		<view class="tableItem">
			<image src="../static/image/table1.jpg" mode=""></image>
		</view>
		
		<!--表格中的第二项-->
		<view class="tableItem" style="background: #DAA520;">
			<view class="tableBigTitle">银杏叶流苏发簪</view>
			<view class="tablesmallTitle">
				珍珠|古风簪子|简约现代|后脑勺盘发发簪|气质头饰
			</view>
			<view class="tableLine"></view>
			<view class="tablePrice">¥17.8</view>
			
		</view>
		
		<!--表格中的第三项-->
		<view class="tableItem" style="background: #f65c5c;">
			<view class="tableBigTitle">青雀记 陌上桑</view>
			<view class="tablesmallTitle">
				明制|步摇|头饰|汉服发簪|原创手工
			</view>
			<view class="tableLine"></view>
			<view class="tablePrice">¥69</view>
		</view>
		<!--表格中的第四项-->
		<view class="tableItem">
			<image src="../static/image/table2.jpg" mode=""></image>
		</view>
	</view>
</template>

<script>
</script>

<style>
	.floorTable{
		/*垂直改为水平*/
		display: flex;
		/*设置当前行的元素两端对齐*/
		justify-content: space-between;
		/*设置元素自动换行*/
		flex-wrap: wrap;
		
	}
	.tableItem{
		width: 50%;
		height: 330rpx;
	}
	.tableItem image{
		width: 100%;
		height: 330rpx;
	}
	.tableBigTitle{
		font-size: 35rpx;
		line-height: 46rpx;
		color: #fff;
		padding-top: 30rpx;
		padding-left: 30rpx;
		padding-right: 100rpx;
	}
	.tablesmallTitle{
		font-size: 31rpx;
		line-height: 30rpx;
		padding-left: 30rpx;
		padding-right: 40rpx;
		padding-top: 15rpx;
		color: rgba(255, 255, 255, 0.8);
		/*需求：对溢出的内容使用...来替换*/
		/*超出的内容隐藏*/
		overflow: hidden;
		/*超出的内容使用三个点进行替换*/
		text-overflow: ellipsis;
		/*自动适配*/
		display: -webkit-box;
		/*设置总体最多展示的行数*/
		-webkit-line-clamp: 2;
		/*设置内容垂直*/
		-webkit-box-orient: vertical;
	}
	.tableLine{
		width: 55rpx;
		height: 5rpx;
		background: #fff;
		margin-left: 30rpx;
		margin-top: 20rpx;
	}
	.tablePrice{
		font-size: 36rpx;
		line-height: 100rpx;
		padding-left: 30rpx;
		color: #fff;
	}
</style>