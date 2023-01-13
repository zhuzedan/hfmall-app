<template>
	<view>
		<view class="cartEmpty" style="display: none;">
			<image class="cartEmptyImg" src="../../static/image/cart.png" mode=""></image>
			<view class="cartEmptyTip" >亲，您需要登录才能查看购物车哦~~</view>
			<navigator url="../login/login">
				<view class="cartLogin">立即登录</view>
			</navigator>	
		</view>
		<!-- 登录状态下，购物车列表的布局 -->
		<view class="cartListBox">
			<view class="cartList">
				<view class="cartItem">
					<label>
						<checkbox value=""/>
					</label>
					<view class="mainImg">
						<image src="../../static/image/detal-swiper4.jpg" mode=""></image>
					</view>
					<view class="cartItemContent">
						<view class="contentTitle">
							池夏.【花间事 芋泥波波】
						</view>
						<view class="contentAttr">合领半臂立领对襟长衫仿妆花马面裙秋冬</view>
						<view class="contentPrice">
							<text>¥328.00</text>
							<view class="numOption">
								<view class="optionBtn">-</view>
								<view class="numText">
									<input type="text" value="1"/>
								</view>
								<view class="optionBtn">+</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 底部空白占位 -->
			<view class="bottomEmpty"></view>
			<!-- 底部结算布局 -->
			<view class="cartBottom">
				<label>
					<checkbox value="" />
					<text>全选</text>
				</label>
				<view class="cartBottomRight">
					总价：<text style="color: #d9000b;"></text>
					<view class="payBtn">
						去结算<text>(共1件)</text>
					</view>
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
	.cartEmpty{
		width: 100%;
		height: 600rpx;
		display: block;
		margin: 154rpx auto 0;
	}
	.cartEmpty image{
		width: 100%;
	}
	.cartEmptyTip{
		font-size: 33rpx;
		height: 80rpx;
		color: #999;
		text-align: center;
	}
	.cartLogin{
		width: 315rpx;
		background: #fe6f06;
		color:#fff;
		font-size: 28rpx;
		line-height: 80rpx;
		text-align: center;
		margin: 0 auto;
		border-radius: 10rpx;
	}
	.cartList{
		border-top: 1rpx solid #e5e5e5;
	}
	.cartItem{
		display: flex;
		padding: 35rpx 20rpx 30rpx;
		border-bottom: 1rpx solid #e5e5e5;
	}
	.cartItem label{
		display: flex;
		/* 垂直居中 */
		align-items: center;
	}
	.cartItem checkbox{
		transform: scale(0.7);
	}
	.mainImg image{
		width: 200rpx;
		height: 200rpx;
	}
	.contentTitle{
		height: 80rpx;
		line-height: 40rpx;
		font-size: 28rpx;
		/* 设置文本内容两行显示 */
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.contentAttr{
		font-size: 24rpx;
		color: #999;
		line-height: 40rpx;
	}
	.contentPrice{
		height: 80rpx;
		display: flex;
		align-items: center;
		/* 两端对齐 */
		justify-content: space-between;
		font-size: 28rpx;
	}
	.contentPrice text{
		color: #d9000b;
	}
	.contentPrice .numOption{
		display: flex;
		width: 154rpx;
		border: 1prx solid #e5e5e5;
	}
	.numOption .optionBtn{
		width: 44rpx;
		text-align: center;
	}
	.numOption .numText{
		flex: 1;
		border-left: 1prx solid #e5e5e5;
		border-right: 1prx solid #e5e5e5;
	}
	.numOption .numText input {
		width: 100%;
		text-align: center;
	}
	.bottomEmpty{
		bottom: var(--window-bottom);
	}
	.cartBottom{
		width: 100%;
		height: 106rpx;
		position: fixed;
		bottom: var(--window-bottom);
		background: #fff;
		display: flex;
		justify-content: space-between;
		/* 垂直居中 */
		align-items: center;
		font-size: 28rpx;
		border-top: 1rpx solid #e5e5e5;
	}
	.cartBottom checkbox{
		transform: scale(0.7);
	}
	.cartBottom .cartBottomRight{
		display: flex;
		align-items: center;
	}
	.cartBottomRight .payBtn{
		width: 230rpx;
		height: 80rpx;
		background: #fe6f06;
		color: #fff;
		margin: 0 20rpx;
		border-radius: 60rpx;
		line-height: 80rpx;
		line-height: 80rpx;
		text-align: center;
	}
	.payBtn text{
		font-size: 22rpx;
	}
	

</style>
