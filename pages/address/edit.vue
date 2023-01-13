<template>
	<view>
		<!-- 收货人项 -->
		<view class="addressItem username">
			<view class="addressItemTitle">收货人：</view>
			<input type="text" value="" placeholder="收货人姓名"/>
		</view>
		<!-- 收货地址项 -->
		<view class="addressItem">
			<view class="addressItemTitle"></view>
			<text class="sexActive">先生</text>
			<text>女士</text>
		</view>
		<view class="addressItem">
			<view class="addressItemTitle">电话号码</view>
			<input type="text" value="" placeholder="收货人联系电话"/>
		</view>
		<view class="addressItem">
			<view class="addressItemTitle">收货地址</view>
			<!-- <input type="text" value="" placeholder="请选择收货地址"/> -->
			<pickerAddress @change="change" class="city">{{city}}</pickerAddress>
		</view>
		<view class="addressItem detaiAddress">
			<view class="addressItemTitle">详细地址:</view>
			<textarea type="text" value="" placeholder="请输入详细地址"></textarea>
		</view>
		<view class="addressItem defaultAddress">
			<view class="addressItemTitle">默认地址:</view>
			<!-- 如需调节switch大小，可通过css的scale方法调节，如缩小到70% -->
			<switch checked="ture" color="#fe6f06" style="transform:scale(0.7)"></switch>
		</view>
		<!-- 保存收货地址 -->
		<view class="saveAddress">保存收货地址</view>
		
		
		
	</view>
</template>

<script>
	  import pickerAddress from '../../components/pickerAddress/wangding-pickerAddress.vue'
	    export default {
	        components:{
	            pickerAddress
	        },
	        data() {
	            return {
	                city: '选择地址'
	            }
	        },
	        onLoad() {
	
	        },
	        methods: {
	            change(data) {
	                this.city = data.data.join('')
	                console.log(data.data.join(''))
	            }
	        }
	    }
</script>

<style>
	/* 收货地址项 */
	.addressItem{
		height: 90rpx;
		align-items: center;
		display: flex;
		margin: 0 30rpx;
		border-bottom: 1rpx solid #e5e5e5;
	}
	.username{
		border-bottom: 1rpx solid #fff;
	}
	.username input{
		flex: 1;
		height: 90rpx;
		line-height: 90rpx;
		border-bottom: 1rpx solid #e5e5e5;
	}
	/* 选中所有地址项的标题 */
	.addressItemTitle{
		width: 140rpx;
		font-size: 28rpx;
	}
	.addressItem text{
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
	.addressItem text.sexActive{
		background: #fe6f06;
		color: #fff;
		border: none;
	}
	/* 详细地址 */
	.detaiAddress{
		/* 取消align-items居中显示 */
		align-items: unset;
		height: 180rpx;
	}
	.detaiAddress .addressItemTitle{
		line-height: 90rpx;
	}
	.detaiAddress textarea{
		flex: 1;
		height: 180rpx;
		padding-top: 20rpx;
	}
	
	/* 保存收货地址 */
	.saveAddress{
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
	.detaiAddress{
		/* 设置默认地址两端对齐 */
		justify-content: space-between;
	}

</style>
