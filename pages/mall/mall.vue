<template>
	<view>
		<!-- 搜索框 -->
		<view class="search">
			<view class="searchBox">
				<navigator url="#">
					<image src="../../static/image/search.png" mode=""></image>
					<input type="text"  @input="getProductName">
					<view class="s" @click="gotoSearch">搜索</view>
				</navigator>
			</view>
		</view>
		<!-- 内容 -->
		<view class="shopList">
			<view class="shopListItem" v-for="item in productList" @click="gotoDetail(item.id)">
				<image class="shopImg" :src="getImageUrl(item.propic)" mode=""></image>
				<view class="shopTitle">
					{{item.name}}
				</view>
				<view class="shopActive">
					<view class="shopActiveInter">
						包邮
					</view>
					<view class="shopActiveText">
						{{item.description}}
					</view>
				</view>
				<view class="shopPrice">
					¥{{item.price}}
				</view>
			</view>
		</view>

	</view>

</template>


<script>
	import {
		queryAllProduct,
	} from '../../api/index.js'
	export default {
		data() {
			return {
				productList: [],
				searchProduct: ''
			}
		},
		methods: {
			getProductName(e) {
				this.searchProduct = e.detail.value
				console.log(this.searchProduct)
			},
			gotoSearch() {
				queryAllProduct(this.searchProduct).then((res) => {
					if (res.code == 200) {
						console.log(res.data)
						this.productList = res.data
					}
				})
			},
			// 获取图片连接
			getImageUrl(image) {
				return "http://localhost:8888/image/" + image
			},
			gotoDetail(id) {
				console.log(id)
				uni.navigateTo({
					url: '/pages/detal/detal?id=' + id
				})
			}
		},
		onShow() {
			queryAllProduct(this.searchProduct).then((res) => {
				if (res.code == 200) {
					console.log(res.data)
					this.productList = res.data
				}
			})
		}
	}
</script>



<style>
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
		color: #999;
		background-color: #f7f7f7;
	}

	.searchBox navigator {
		display: flex;
		/*当前标签内部的元素居中*/
		justify-content: center;
		/*此标签内所有元素都居中*/
		align-items: center;
		height: 70rpx;
	}

	.searchBox image {
		width: 38rpx;
		height: 38rpx;
		margin-right: 12rpx;
	}

	/*给商品列表项设置排列方式为水平排列*/
	.shopList {
		/*垂直改为水平*/
		display: flex;
		/*设置当前行的元素两端对齐*/
		justify-content: space-between;
		/*设置元素自动换行*/
		flex-wrap: wrap;
	}

	.shopList .shopListItem {
		width: 370rpx;
		height: 530rpx;
		background: #f9f9f9;
		overflow: hidden;
		margin-top: 10rpx;
		border-radius: 20rpx;

	}

	.shopListItem .shopImg {
		width: 316rpx;
		height: 316rpx;
		display: block;
		margin: 40rpx auto 0;
	}

	.shopListItem .shopTitle {
		height: 50rpx;
		line-height: 50rpx;
		font-size: 14rpx;
		text-align: center;
	}

	.shopListItem .shopActive {
		width: 346rpx;
		height: 40rpx;
		margin: 10rpx auto 0;
		border: 1rpx solid #d9000b;
		display: flex;
	}

	.shopActive .shopActiveInter {
		width: 70rpx;
		background: #d9000b;
		font-size: 24rpx;
		color: #fff;
		text-align: center;
		line-height: 40rpx;
	}

	.shopActive .shopActiveText {
		width: 276rpx;
		font-size: 24rpx;
		color: #d9000b;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		line-height: 40rpx;
		margin-left: 10rpx;
	}

	.shopListItem .shopPrice {
		color: #c00;
		font-size: 28rpx;
		text-align: center;
		line-height: 35rpx;
	}
</style>
