<template>
	<!-- 商品属性**** -->
	<view class="attrDialog">
		<!--商品背景层-->
		<view class="bg"></view>
		<!-- 商品属性内容 -->
		<view class="attrDialogContent">
			<view class="contentTop">
				<image class="imageleft" src="../static/image/detal-swiper4.jpg" mode=""></image>
				<view class="contentTopText">
					<text class="price">¥128.00-499.00</text>
					<text class="attr">织造司[西池]</text>
				</view>
				<image class="imagetop" @click="closeDialog" src="../static/image/all5.png"></image>
			</view>
	
			<view class="attrList">
				<view class="attrItem">
					<view class="attrItemTitle">
						尺码
					</view>
					<view class="attrItemValue">
						<view class="attrValueItem activeAttr">
							s
						</view>
						<view class="attrValueItem">
							m
						</view>
						<view class="attrValueItem">
							l
						</view>
					</view>
				</view>
				<view class="attrItem">
					<view class="attrItemTitle">
						颜色
					</view>
					<view class="attrItemValue">
						<view class="attrValueItem activeAttr">
							合领半袖衫
						</view>
						<view class="attrValueItem">
							马面裙
						</view>
					</view>	
				</view>
				<view class="attrItem">
					<view class="attrItemTitle">
						数量
					</view>
					<view class="attrItemValue">
						<view class="shopNum">
							<view class="button">-</view>
							<view><input type="text" value="1" disabled /></view>
							<view class="button">+</view>
						</view>
						<text class="stock">(库存5件)</text>
					</view>
				</view>
			</view>
		</view>
		
		<!-- 底部立即购买 -->
		<view class="attrButton">
			立即购买
		</view>
	</view>
	
</template>

<script>
	export default{
		methods:{
			closeDialog(){
				this.$emit('close')
			}
		}
	}
</script>

<style>
	.attrDialog{
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
	}
	.attrDialog .bg{
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
	}
	.attrDialogContent{
		width: 100%;
		height: 1070rpx;
		position: absolute;
		bottom: 0;
		background: #fff;
	}
	.contentTop{
		height: 200rpx;
		position: relative;
		border-bottom: 1rpx solid #e5e5e5;
	}
	.imageleft{
		position: absolute;
		top: -40rpx;
		left: 30rpx;
		width: 210rpx;
		height: 210rpx;
		border: 1rpx solid #e5e5e5;
	}
	.contentTopText{
		margin-left: 280rpx;
	}
	.contentTopText .price{
		height: 44rpx;
		line-height: 44rpx;
		padding-top: 44rpx;
		color: #f0415f;
		font-size: 36rpx;
		display: block;
	}
	.contentTopText .attr{
		font-size: 24rpx;
		color: #000;
		height: 40rpx;
		line-height: 40rpx;
	}
	.imagetop{
		position: absolute;
		top: 25rpx;
		right: 30rpx;
		width: 40rpx;
		height: 40rpx;
	}
	.attrList{
		padding: 0 30rpx;
	}
	.attrItem{
		height: auto;
		overflow: hidden;
	}
	.attrItemTitle{
		color: #999;
		line-height: 70rpx;
		font-size: 28rpx;
	}
	.attrValueItem{
		padding: 0 30rpx;
		border: 1rpx solid #e5e5e5;
		height: 70rpx;
		line-height: 70rpx;
		float: left;
		font-size: 24rpx;
		color: #666;
		margin-right: 30rpx;
		border-radius: 20rpx;
	}
	.attrValueItem.activeAttr{
		color: #fe6f06;
		border-color: #fe6f06;
	}
	.shopNum{
		width: 240rpx;
		height: 70rpx;
		border: 1rpx solid #e5e5e5;
		display: flex;
		float: left;
		border-radius: 60rpx;
	}
	.shopNum .button{
		width: 70rpx;
		line-height: 70rpx;
		text-align: center;
	}
	.shopNum input{
		width: 100rpx;
		height: 70rpx;
		line-height: 70rpx;
		text-align: center;
		font-size: 24rpx;
		border-right: 1rpx solid #e5e5e5;
		border-left: 1rpx solid #e5e5e5;
	}
	.stock{
		height: 70rpx;
		line-height: 70rpx;
		font-size: 24rpx;
		color: #999;
		margin-left: 20rpx;
	}
	.attrButton{
		width: 100%;
		height: 90rpx;
		line-height: 90rpx;
		color: #fff;
		font-size: 28rpx;
		text-align: center;
		background: #fe6f06;
		position: absolute;
		bottom: 0;
		border-radius: 60rpx;
	}
</style>