<template>
	<view>
		<view class="image_view">
			<image :src="getImageUrl(newInformation.image)"></image>
		</view>
		<view class="look">
			<view class="tablesmallTitle">发布时间 {{newInformation.publishTime}}</view>
			<image src="../../static/image/all10.png" mode=""></image>
			<view class="tablenumber">浏览量 {{newInformation.click}}</view>
		</view>
		<view class="content">{{newInformation.content}}</view>
	</view>
</template>

<script>
	import {
		getNewsDetail
	} from '../../api/index.js'
	export default {
		data() {
			return {
				newId: '',
				newInformation: []
			};
		},
		methods: {
			// 获取图片连接
			getImageUrl(image) {
				return "http://localhost:8888/image"+image
			},
		},
		onLoad(option) {
			this.newId = option.newId
			getNewsDetail(option.newId).then((res) => {
				if(res.code == 200) {
					console.log(res)
					this.newInformation = res.data
				}
			})
		}
	}
</script>

<style lang="scss">
	.image_view {
		padding: 20rpx;
		image {
			width: 100%;
			height: 400rpx;
		}
	}
	.title {
		font-size: 40rpx;
		font-weight: bold;
	}
	.look {
		display: flex;
		image {
			padding-top: 15rpx;
			line-height: 30rpx;
			width: 30rpx;
			height: 30rpx;
		}
		.tablesmallTitle {
			font-size: 25rpx;
			line-height: 30rpx;
			padding-left: 30rpx;
			padding-right: 40rpx;
			padding-top: 15rpx;
			color: rgba(0, 0, 0, 0.8);
		}
		.tablenumber {
			padding-top: 15rpx;
			line-height: 30rpx;
			font-size: 25rpx;
			color: #000000;
		}
	}
	.content {
		padding: 20rpx;
	}
</style>
