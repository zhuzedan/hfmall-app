<template>
	<view>
		<!-- 收货地址列表 -->
		<view class="addressList" v-for="item in addressList">
			<uni-swipe-action>
				<uni-swipe-action-item :rightOptions="options" @click="onClick($event)">
					<view class="addressItem">
						<view class="userInfo">
							<text class="username">{{item.name}}</text>
							<text class="telphone">{{item.phone}}</text>
							<text class="default" v-if="item.ifDefault == 1">{{item.ifDefault==1?'默认': ''}}</text>
						</view>
						<view class="detaiAddress">
							{{item.address}}{{item.detailAddress}}
						</view>
					</view>
				</uni-swipe-action-item>
			</uni-swipe-action>
		</view>

		<!-- 收货地址列表数据为空默认展示的布局 -->
		<view class="addressEmpty">
			<image src="../../static/image/all6.png" mode=""></image>
			<text>用户没有收货地址,请添加!</text>
		</view>

		<!-- 添加收货地址 -->
		<view class="addAddressBtn" @click="toAddAddress">添加收货地址</view>
		<!-- 解决因收货地址过多导致收货地址被底部添加按钮遮挡的问题 -->
		<view class="bottomSeat"></view>
	</view>
</template>

<script>
	import uniSwipeAction from "../../components/uni-swipe-action/uni-swipe-action.vue"
	import uniSwipeActionItem from "../../components/uni-swipe-action-item/uni-swipe-action-item.vue"
	import {
		queryAddress
	} from '../../api/my.js'
	export default {
		data() {
			return {
				addressList: [],
				options: [{
					text: '删除',
					style: {
						backgroundColor: '#dd524d'
					}
				}, {
					text: '编辑',
					style: {
						backgroundColor: '#0bbbef'
					}
				}]
			}
		},
		components: {
			uniSwipeAction,
			uniSwipeActionItem
		},
		methods: {
			onClick(e) {
				console.log(e.content.text)
				console.log('点击了' + (e.position === 'left' ? '左侧' : '右侧') + e.content.text + '按钮')
			},
			Change(open) {
				console.log('当前开启状态：' + open)
			},
			toAddAddress() {
				//navigateTo表示跳转到目标页面，url属性表示目标页面的位置
				uni.navigateTo({
					url: 'add'
				})
			}
		},
		onShow() {
			queryAddress().then((res) => {
				if (res.code == 200) {
					console.log(res)
					this.addressList = res.data
				} else {
					wx.showToast({
						title: res.msg,
						icon: 'none'
					})
				}
			})
		}
	}
</script>

<style>
	.addressItem {
		padding: 0 35rpx;
		border-bottom: 1rpx solid #e5e5e5;
	}

	.userInfo {
		line-height: 40rpx;
		font-size: 28rpx;
		padding-top: 30rpx;
	}

	.userInfo .telphone {
		padding: 0 20rpx 0 10rpx;
	}

	.userInfo .default {
		background: #fe6f06;
		color: #fff;
		font-size: 20rpx;
		padding: 0 10rpx;
	}

	.detaiAddress {
		font-size: 24rpx;
		line-height: 36rpx;
		color: #999;
		padding-bottom: 36rpx;
	}

	.addressEmpty image {
		width: 330rpx;
		height: 210rpx;
		display: block;
		margin: 200rpx auto 0;
	}

	.addressEmpty text {
		line-height: 80rpx;
		font-size: 24rpx;
		color: #999;
		display: block;
		text-align: center;
	}

	.addAddressBtn {
		width: 100%;
		height: 90rpx;
		color: #fff;
		background: #fe6f06;
		font-size: 28rpx;
		position: fixed;
		bottom: 0;
		left: 0;
		text-align: center;
		line-height: 90rpx;
		border-radius: 40rpx;
	}

	.bottomSeat {
		height: 90rpx;
	}
</style>
