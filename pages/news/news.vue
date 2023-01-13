<template>
	<view>
		<!-- 搜索框 -->
		<navigator url="/pages/search-news/search-news">
			<view class="search">
				<view class="searchBox">
					<navigator url="#">
						<image src="../../static/image/search.png" mode="">搜索全部</image>
					</navigator>
				</view>
			</view>
		</navigator>


        <!-- 内容 -->
		<view class="floorTable">	
			<view class="tableItem" >
				<view class="tableBigTitle">正式官宣！第十届西塘汉服文化周时间定了</view>
				<view class="look">
					<view class="tablesmallTitle">汉服资讯 · 12-12</view>
					<image src="../../static/image/all10.png" mode=""></image>
					<view class="tablenumber">132</view>
				</view>
			</view>
			<image src="../../static/image/news1.jpeg" mode=""></image>
			<view class="tableLine"></view>	
		</view>
		<view class="floorTable">
			<view class="tableItem" >
				<view class="tableBigTitle">正式官宣！第十届西塘汉服文化周时间定了</view>
				<view class="look">
					<view class="tablesmallTitle">汉服资讯 · 12-12</view>
					<image src="../../static/image/all10.png" mode=""></image>
					<view class="tablenumber">132</view>
				</view>
			</view>
			<image src="../../static/image/news1.jpeg" mode=""></image>
			<view class="tableLine"></view>	
		</view>
		<view class="floorTable">
			<view class="tableItem" >
				<view class="tableBigTitle">正式官宣！第十届西塘汉服文化周时间定了</view>
				<view class="look">
					<view class="tablesmallTitle">汉服资讯 · 12-12</view>
					<image src="../../static/image/all10.png" mode=""></image>
					<view class="tablenumber">132</view>
				</view>
			</view>
			<image src="../../static/image/news1.jpeg" mode=""></image>
			<view class="tableLine"></view>	
		</view>
		<view class="floorTable">
			<view class="tableItem" >
				<view class="tableBigTitle">正式官宣！第十届西塘汉服文化周时间定了</view>
				<view class="look">
					<view class="tablesmallTitle">汉服资讯 · 12-12</view>
					<image src="../../static/image/all10.png" mode=""></image>
					<view class="tablenumber">132</view>
				</view>
			</view>
			<image src="../../static/image/news1.jpeg" mode=""></image>
			<view class="tableLine"></view>	
		</view>
		<view class="floorTable">
			<view class="tableItem" >
				<view class="tableBigTitle">正式官宣！第十届西塘汉服文化周时间定了</view>
				<view class="look">
					<view class="tablesmallTitle">汉服资讯 · 12-12</view>
					<image src="../../static/image/all10.png" mode=""></image>
					<view class="tablenumber">132</view>
				</view>
			</view>
			<image src="../../static/image/news1.jpeg" mode=""></image>
			<view class="tableLine"></view>	
		</view>
		<view class="floorTable">
			<view class="tableItem" >
				<view class="tableBigTitle">正式官宣！第十届西塘汉服文化周时间定了</view>
				<view class="look">
					<view class="tablesmallTitle">汉服资讯 · 12-12</view>
					<image src="../../static/image/all10.png" mode=""></image>
					<view class="tablenumber">132</view>
				</view>
			</view>
			<image src="../../static/image/news1.jpeg" mode=""></image>
			<view class="tableLine"></view>	
		</view>
		<view class="floorTable">
			<view class="tableItem" >
				<view class="tableBigTitle">正式官宣！第十届西塘汉服文化周时间定了</view>
				<view class="look">
					<view class="tablesmallTitle">汉服资讯 · 12-12</view>
					<image src="../../static/image/all10.png" mode=""></image>
					<view class="tablenumber">132</view>
				</view>
			</view>
			<image src="../../static/image/news1.jpeg" mode=""></image>
			<view class="tableLine"></view>	
		</view>
		<view class="floorTable">
			<view class="tableItem" >
				<view class="tableBigTitle">正式官宣！第十届西塘汉服文化周时间定了</view>
				<view class="look">
					<view class="tablesmallTitle">汉服资讯 · 12-12</view>
					<image src="../../static/image/all10.png" mode=""></image>
					<view class="tablenumber">132</view>
				</view>
			</view>
			<image src="../../static/image/news1.jpeg" mode=""></image>
			<view class="tableLine"></view>	
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



<style >
	.search{
		width: 100%;
		height: 110rpx;
		background: #fff;
		/*垂直改为水平*/
		display: flex;
		/*居中*/
		justify-content: center;
		align-items: center;
	}
	.searchBox{
		width: 690rpx;
		height: 70rpx;
		/*表示边框的弧度*/
		border-radius: 80rpx;
		font-size: 14rpx;
		color: #999;
		background-color: #f7f7f7;
	}
	.searchBox navigator{
		display: flex;
		/*当前标签内部的元素居中*/
		justify-content: center;
		/*此标签内所有元素都居中*/
		align-items: center;
		height: 70rpx;
	}
	.searchBox image{
		width: 38rpx;
		height: 38rpx;
		margin-right: 12rpx;
	}
	
	.floorTable{
		/*垂直改为水平*/
		display: flex;
		/*设置元素自动换行*/
		flex-wrap: wrap;
		background: #f4f4f4;
		height: 240rpx;
		width: 100%;
	}
	.tableItem{
		width: 450rpx;
		height: 200rpx;
	}
	image{
		padding-top: 25rpx;
		width: 280rpx;
		height: 190rpx;
		border-radius: 20rpx;
		margin-right: 10rpx;
	}
	.tableBigTitle{
		font-size: 35rpx;
		line-height: 46rpx;
		color: #000000;
		padding-top: 30rpx;
		padding-left: 30rpx;
		padding-right: 100rpx;
	}
	.look{
		display: flex;
	}
	.tablesmallTitle{
		font-size: 25rpx;
		line-height: 30rpx;
		padding-left: 30rpx;
		padding-right: 40rpx;
		padding-top: 15rpx;
		color: rgba(0, 0, 0, 0.8);
	}
	.look image{
		padding-top: 15rpx;
		line-height: 30rpx;
		width: 30rpx;
		height: 30rpx;
	}
	

	.tablenumber{
		padding-top: 15rpx;
		line-height: 30rpx;
		font-size: 25rpx;	
		color: #000000;
	}
	.tableLine{
		width: 90%;
		height: 5rpx;
		background: #ffffff;
		margin-left: 20rpx;
		margin-top: 20rpx;
	}
	

</style>

