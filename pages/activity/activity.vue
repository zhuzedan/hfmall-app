<template>
	<view>
		<view class="activity">
			<view class="activityItem" v-for="item in activityList">
				<view class="mainImg">
					<image :src="getImageUrl(item.img)" mode=""></image>
				</view>
				<view class="activityItemContent">
					<view class="contentTitle">
						{{item.name}}
					</view>
					<view class="contentAttr">
						<view class="part">
							<view class="texts">参与数</view>
							<view class="number">{{item.num}}</view>
						</view>
						<view class="part">
							<view class="texts">粉丝</view>
							<view class="number">{{item.funs}}</view>
						</view>
					</view>
					<view class="contentPrice" @click="joinThis(item.id)">+参与</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getActivityList,
		joinActivity
	} from '../../api/index.js'
	export default {
		data() {
			return {
				activityList: []
			}
		},
		methods: {
			getImageUrl(image) {
				return "http://localhost:8888/image/" + image
			},
			joinThis(id) {
				console.log(id)
				uni.showModal({
					title: '是否参与此活动',
					success: res => {
						if(res.confirm) {
							joinActivity(id).then((res) => {
								if(res.code == 200) {
									uni.showToast({
										title: '参与成功'
									})
									getActivityList().then((res) => {
										if(res.code == 200) {
											this.activityList = res.data
										}
									})
								}else {
									uni.showToast({
										title: res.message,
										icon: 'error'
									})
								}
							})
							
						}
						if(res.cancel) {
							
						}
					},
					fail: () => {},
					complete: () => {}
				});
				
			}
		},
		onLoad() {
			
		},
		onShow() {
			getActivityList().then((res) => {
				if(res.code == 200) {
					this.activityList = res.data
				}
			})
		}
	}
</script>

<style>
	page{
		background: #f3f3f3;
	}
	
	.activityItem{
		height: 230rpx;
		display: flex;
		margin: 20rpx 20rpx 30rpx;
		padding: 35rpx 20rpx 30rpx;
		border-bottom: 1rpx solid #e5e5e5;
		background: #fff;
		border-radius: 30rpx;
	}
	.mainImg image{
		width: 230rpx;
		height: 230rpx;
	}
	.activityItemContent{
		height: 230rpx;
	}
	.contentTitle{
		font-size: 38rpx;
		font-weight: bold;
	}
	.contentAttr{
		display: flex;
		margin: 30rpx 0rpx 30rpx;
	}
	.part{
		display: flex;
		margin-left: 20rpx;
	}
	.texts{
		color: #999;
	}
	.number{
		font-weight: bold;
	}
	.contentPrice{
		background: #fe6f06;
		height: 60rpx;
		width: 150rpx;
		border-radius: 20rpx;
		line-height: 60rpx;
		font-size: 33rpx;
		text-align: center;
		color: #fff;
	}
	
	
	
	

</style>
