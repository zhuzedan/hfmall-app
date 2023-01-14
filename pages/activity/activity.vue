<template>
	<view>
		<view class="activity">
			<view class="activityItem">
				<view class="mainImg">
					<image src="../../static/image/activity1.jpeg" mode=""></image>
				</view>
				<view class="activityItemContent">
					<view class="contentTitle">
						汉服同城活动
					</view>
					<view class="contentAttr">
						<view class="part">
							<view class="texts">参与数</view>
							<view class="number">7</view>
						</view>
						<view class="part">
							<view class="texts">粉丝</view>
							<view class="number">66</view>
						</view>
					</view>
					<view class="contentPrice">+参与</view>
				</view>
			</view>
			
			<view class="activityItem">
				<view class="mainImg">
					<image src="../../static/image/activity2.jpeg" mode=""></image>
				</view>
				<view class="activityItemContent">
					<view class="contentTitle">
						一殊社团汉服活动
					</view>
					<view class="contentAttr">
						<view class="part">
							<view class="texts">参与数</view>
							<view class="number">100</view>
						</view>
						<view class="part">
							<view class="texts">粉丝</view>
							<view class="number">60</view>
						</view>
					</view>
					<view class="contentPrice">+参与</view>
				</view>
			</view>
			
			<view class="activityItem">
				<view class="mainImg">
					<image src="../../static/image/activity3.png" mode=""></image>
				</view>
				<view class="activityItemContent">
					<view class="contentTitle">
						华风汉服同城活动
					</view>
					<view class="contentAttr">
						<view class="part">
							<view class="texts">参与数</view>
							<view class="number">37</view>
						</view>
						<view class="part">
							<view class="texts">粉丝</view>
							<view class="number">62</view>
						</view>
					</view>
					<view class="contentPrice">+参与</view>
				</view>
			</view>
			
			<view class="activityItem">
				<view class="mainImg">
					<image src="../../static/image/activity4.jpg" mode=""></image>
				</view>
				<view class="activityItemContent">
					<view class="contentTitle">
						国风汉服节
					</view>
					<view class="contentAttr">
						<view class="part">
							<view class="texts">参与数</view>
							<view class="number">66</view>
						</view>
						<view class="part">
							<view class="texts">粉丝</view>
							<view class="number">200</view>
						</view>
					</view>
					<view class="contentPrice">+参与</view>
				</view>
			</view>
			
			<view class="activityItem">
				<view class="mainImg">
					<image src="../../static/image/activity5.jpeg" mode=""></image>
				</view>
				<view class="activityItemContent">
					<view class="contentTitle">
						同袍同城活动
					</view>
					<view class="contentAttr">
						<view class="part">
							<view class="texts">参与数</view>
							<view class="number">12</view>
						</view>
						<view class="part">
							<view class="texts">粉丝</view>
							<view class="number">166</view>
						</view>
					</view>
					<view class="contentPrice">+参与</view>
				</view>
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
