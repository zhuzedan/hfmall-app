<template>
	<view>
		<view class="content" v-for="circle in circles">
			<!-- 头像部分 -->
			<view class="head">
				<image :src="getImageUrl(circle.headUrl)" mode=""></image>
				<view class="user">
					<view class="phone">{{circle.phone}}</view>
					<view class="data">{{circle.createTime}}</view>
				</view>
			</view>
			<!-- 内容 -->
			<view class="act">{{circle.title}}</view>
			<!-- 互动 -->
			<view class="photo">
				<image src="../../static/image/A11.png" mode=""></image>
				<image src="../../static/image/A12.png" mode=""></image>
				<image src="../../static/image/A13.png" mode=""></image>
				<image src="../../static/image/A14.png" mode=""></image>
			</view>
			<view class="tableLine"></view>
			<view class="search">
				<view class="searchBox">
					<navigator url="#">
						<input type="text"  @input="getCommitContent">
						<view class="s" @click="gotoCommit(circle.id)">评论</view>
					</navigator>
				</view>
			</view>
			<!-- 评论 -->
			<view class="botton" v-for="reply in circle.postMessageReplyList">
				<image src="../../static/image/All1.png" mode=""></image>
				<text>{{reply.replyUser}}:</text>
				<text>{{reply.replyContent}}</text>
			</view>
		</view>

	</view>	
</template>

<script>
	import { getCircleList,replyCircle } from '@/api/index'
	export default {
		data() {
			return {
				circles: [],
				commit: '',
				username: ''
			}
		},
		methods: {
			// 获取图片连接
			getImageUrl(image) {
				return image
			},
			getCommitContent(e) {
				this.commit = e.detail.value
				console.log(this.commit)
			},
			gotoCommit(e) {
				console.log(e)
				replyCircle(e,this.commit,this.username).then((res) => {
					if(res.code == 200) {
						getCircleList().then((res) => {
							if(res.code == 200) {
								this.circles = res.data
							}
						})
						uni.showToast({
							title: '评论成功',
							icon: 'none'
						})
					}
				})
			}
		},
		onShow() {
			getCircleList().then((res) => {
				if(res.code == 200) {
					this.circles = res.data
				}
			})
			console.log(uni.getStorageSync('userInfo').username)
			this.username = uni.getStorageSync('userInfo').username
		}
	}
</script>

<style>
	page {
		background: #f3f3f3;
	}
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
	.content {
		margin-top: 20rpx;
		background: #fff;
		width: 100%;

	}

	.head {
		width: 100%;
		height: 100rpx;
		display: flex;
		padding: 35rpx 60rpx 30rpx;
	}

	.head image {
		width: 100rpx;
		height: 100rpx;
		border-radius: 30rpx;
	}

	.user {
		padding-left: 20rpx;
	}

	.phone {
		font-size: 30rpx;
	}

	.data {
		margin-top: 10rpx;
		font-size: 10rpx;
		color: #999;
	}

	.act {
		width: 100%;
		margin-left: 60rpx;
		font-size: 38rpx;
	}

	.photo {
		width: 100%;
		/*内部元素水平排列*/
		display: flex;
		/*设置内容两端对齐*/
		justify-content: center;
	}

	.photo image {
		width: 60rpx;
		height: 60rpx;
		margin: 30rpx auto 0;
	}

	.tableLine {
		width: 90%;
		height: 5rpx;
		background: #f3f3f3;
		margin-left: 20rpx;
		margin-top: 20rpx;
	}

	.botton {
		width: 100%;
		height: 40rpx;
		display: flex;
		padding: 35rpx 50rpx 30rpx;

	}

	.botton image {
		width: 60rpx;
		height: 60rpx;
	}

	.botton text {
		margin-top: 10rpx;
		margin-left: 20rpx;
		font-size: 30rpx;

	}
</style>
