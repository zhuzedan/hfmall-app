<template>
	<view>
		<!-- 搜索框 -->
		<view class="search">
			<view class="searchBox">
				<image src="../../static/image/search.png" mode=""></image>
				<input type="text">
			</view>
		</view>

		<!-- 内容 -->
		<view class="floorTable" v-for="(item,index) in news" :key="item.id">
			<view class="tableItem" @click="detailNews(item.id)">
				<view class="tableBigTitle">{{item.title}}</view>
				<view class="look">
					<view class="tablesmallTitle">{{item.publishTime}}</view>
					<image src="../../static/image/all10.png" mode=""></image>
					<view class="tablenumber">{{item.click}}</view>
				</view>
			</view>
			<image :src="getImageUrl(item.image)" mode=""></image>
			<view class="tableLine"></view>
		</view>

	</view>

</template>


<script>
	import {
		getNewsList
	} from '../../api/index.js'
	export default {
		data() {
			return {
				news: []
			}
		},
		methods: {
			getImageUrl(image) {
				return "http://localhost:8888/image" + image
			},
			detailNews(newId) {
				uni.navigateTo({
					url: '/pages/newsDetail/newsDetail?newId='+newId
				})
			}
		},
		onLoad() {
			
		},
		onShow() {
			getNewsList().then((res) => {
				console.log(res)
				if (res.code == 200) {
					this.news = res.data
				}
			})
		}
	}
</script>



<style lang="scss" scoped>
	.search {
		width: 100%;
		height: 110rpx;
		background: #fff;
		/*垂直改为水平*/
		display: flex;
		/*居中*/
		justify-content: center;
		align-items: center;
	}

	.searchBox {
		width: 690rpx;
		height: 70rpx;
		/*表示边框的弧度*/
		border-radius: 80rpx;
		font-size: 14rpx;
		flex-direction: row;
		display: flex;
		color: #999;
		background-color: #f7f7f7;
		image {
			width: 38rpx;
			height: 38rpx;
			padding: 12rpx;
		}
	}

	.floorTable {
		/*垂直改为水平*/
		display: flex;
		/*设置元素自动换行*/
		flex-wrap: wrap;
		background: #f4f4f4;
		height: 240rpx;
		width: 100%;
	}

	.tableItem {
		width: 450rpx;
		height: 200rpx;
	}

	image {
		padding-top: 25rpx;
		width: 280rpx;
		height: 190rpx;
		border-radius: 20rpx;
		margin-right: 10rpx;
	}

	.tableBigTitle {
		font-size: 35rpx;
		line-height: 46rpx;
		color: #000000;
		padding-top: 30rpx;
		padding-left: 30rpx;
		padding-right: 100rpx;
	}

	.look {
		display: flex;
	}

	.tablesmallTitle {
		font-size: 25rpx;
		line-height: 30rpx;
		padding-left: 30rpx;
		padding-right: 40rpx;
		padding-top: 15rpx;
		color: rgba(0, 0, 0, 0.8);
	}

	.look image {
		padding-top: 15rpx;
		line-height: 30rpx;
		width: 30rpx;
		height: 30rpx;
	}


	.tablenumber {
		padding-top: 15rpx;
		line-height: 30rpx;
		font-size: 25rpx;
		color: #000000;
	}

	.tableLine {
		width: 90%;
		height: 5rpx;
		background: #ffffff;
		margin-left: 20rpx;
		margin-top: 20rpx;
	}
</style>
