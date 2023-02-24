<template>
	<view>
		<!-- 收货人项 -->
		<view class="addressItem username">
			<view class="addressItemTitle">收货人：</view>
			<input type="text" value="" placeholder="收货人姓名" @input="getName" />
		</view>
		<!-- 收货地址项 -->
		<view class="addressItem">
			<view class="addressItemTitle"></view>
			<view :class="{sex_active:tab==0}" @click="tabChange(0)">先生</view>
			<view :class="{sex_active:tab==1}" style="margin-left: 20rpx;" @click="tabChange(1)">女士</view>
		</view>
		<view class="addressItem">
			<view class="addressItemTitle">电话号码</view>
			<input type="text" value="" placeholder="收货人联系电话" @input="getPhone" />
		</view>
		<view class="addressItem">
			<view class="addressItemTitle">收货地址</view>
			<pickerAddress @change="change" class="city">{{city}}</pickerAddress>
		</view>
		<view class="addressItem detaiAddress">
			<view class="addressItemTitle">详细地址:</view>
			<textarea type="text" value="" placeholder="请输入详细地址" @input="getDetailAddress"></textarea>
		</view>
		<view class="addressItem defaultAddress">
			<view class="addressItemTitle">默认地址:</view>
			<!-- 如需调节switch大小，可通过css的scale方法调节，如缩小到70% -->
			<switch checked="false" @change="switchChange" color="#fe6f06" style="transform:scale(0.7)"></switch>
		</view>
		<!-- 保存收货地址 -->
		<view class="saveAddress" @click="saveAddress">保存收货地址</view>



	</view>
</template>

<script>
	import pickerAddress from '../../components/pickerAddress/wangding-pickerAddress.vue'
	import {
		insertAddress
	} from '../../api/my.js'
	export default {
		components: {
			pickerAddress
		},
		data() {
			return {
				city: '选择地址',
				tab: 0,     //性别 0男1女
				ifDefaultAddress: 'false',
				// 数据库要存的字段
				name: '',
				phone: '',
				detailAddress: '',
				ifDefault: 0,
			}
		},
		onLoad() {

		},
		methods: {
			getName(e) {
				this.name = e.detail.value
				console.log('name='+this.name)
			},
			getPhone(e) {
				this.phone = e.detail.value
				console.log('phone='+this.phone)
			},
			// 选收货的省市区地址
			change(data) {
				this.city = data.data.join('')
				console.log(this.city)
			},
			getDetailAddress(e) {
				this.detailAddress = e.detail.value
				console.log(this.detailAddress)
			},
			// 选性别
			tabChange(index) {
				this.tab = index;
				console.log(this.tab)
			},
			// switch选择器默认地址
			switchChange(e) {
				var ifDefault = e.detail.value ? 1 : 0
				console.log(ifDefault)
			},
			saveAddress() {
				console.log('执行添加地址方法')
				uni.showModal({
					title: '确定添加该条地址吗',
					content: '',
					cancelText: '取消',
					confirmText: '确认',
					success: res => {
						insertAddress(this.name,this.tab,this.phone,this.city,this.detailAddress,this.ifDefault).then((res) => {
							if(res.code == 200) {
								uni.showToast({
									title: '添加成功',
									icon:'none'
								})
								uni.redirectTo({
									url: '/pages/address/list'
								})
							}
						})
					},
					fail: () => {},
					complete: () => {}
				});
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	/* 收货地址项 */
	.addressItem {
		height: 90rpx;
		align-items: center;
		display: flex;
		margin: 0 30rpx;
		border-bottom: 1rpx solid #e5e5e5;
		margin-left: 20rpx;
		margin-right: 20rpx;
		.sex_active {
			background: #fe6f06;
			color: #fff;
			margin-right: 20rpx;
			border-radius: 10rpx;
			padding: 10rpx;
		}

	}

	.username {
		border-bottom: 1rpx solid #fff;
	}

	.username input {
		flex: 1;
		height: 90rpx;
		line-height: 90rpx;
		border-bottom: 1rpx solid #e5e5e5;
	}

	/* 选中所有地址项的标题 */
	.addressItemTitle {
		width: 140rpx;
		font-size: 28rpx;
	}

	.addressItem text {
		width: 85rpx;
		height: 45rpx;
		display: block;
		border-radius: 30rpx;
		border: 1rpx solid #e5e5e5;
		font-size: 24rpx;
		color: #999;
		margin-right: 20rpx;
		text-align: center;
		line-height: 45rpx;
	}

	/* 详细地址 */
	.detaiAddress {
		/* 取消align-items居中显示 */
		align-items: unset;
		height: 180rpx;
	}

	.detaiAddress .addressItemTitle {
		line-height: 90rpx;
	}

	.detaiAddress textarea {
		flex: 1;
		height: 180rpx;
		padding-top: 20rpx;
	}

	/* 保存收货地址 */
	.saveAddress {
		width: 600rpx;
		height: 80rpx;
		margin: 80rpx auto;
		color: #fff;
		background: #fe6f06;
		font-size: 28rpx;
		text-align: center;
		line-height: 80rpx;
		border-radius: 80rpx;
	}

	.detaiAddress {
		/* 设置默认地址两端对齐 */
		justify-content: space-between;
	}
</style>
