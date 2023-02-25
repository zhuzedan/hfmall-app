<template>
	<view>
		<view class="cartEmpty" style="display: none;">
			<image class="cartEmptyImg" src="../../static/image/cart.png" mode=""></image>
			<view class="cartEmptyTip">亲，您需要登录才能查看购物车哦~~</view>
			<navigator url="../login/login">
				<view class="cartLogin">立即登录</view>
			</navigator>
		</view>
		<!-- 登录状态下，购物车列表的布局 -->
		<view class="cartListBox">
			<view class="cartList">
				<view class="cartItem" v-for="item in cart">
					<checkbox-group @change="handleItemChange(item.id)">
						<label>
							<checkbox value="" checked="item.checked" />
						</label>
					</checkbox-group>
					<view class="mainImg">
						<image :src="getImageUrl(item.propic)" mode=""></image>
					</view>
					<view class="cartItemContent">
						<view class="contentTitle">
							{{item.name}}
						</view>
						<view class="contentAttr">{{item.description}}</view>
						<view class="contentPrice">
							<text>¥{{item.price}}.00</text>
							<view class="numOption">
								<view class="optionBtn" @click="subNumEdit(item.id)">-</view>
								<view class="numText">
									<input type="text" :value="item.cartNum" />
								</view>
								<view class="optionBtn" @click="sumNumEdit(item.id)">+</view>
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
					<checkbox-group @change="handleItemAllCheck">
						<label>
							<checkbox :checked="allChecked" value="" />
							<text>全选</text>
						</label>
					</checkbox-group>
					
				</label>
				<view class="cartBottomRight">
					总价：{{totalPrice}}<text style="color: #d9000b;"></text>
					<view class="payBtn">
						去结算<text>(共{{totalNum}}件)</text>
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
				allChecked: false,
				cart: [],
				totalPrice: 0,
				totalNum: 0
			}
		},
		methods: {
			// 获取图片连接
			getImageUrl(image) {
				return "http://localhost:8888/image/" + image
			},
			// 商品选中or未选中
			handleItemChange(e,a) {
				console.log('当前选中的id',e)
				console.log(a)
				let id = e;
				console.log(id)
				let index = this.cart.findIndex(v=>v.id===id);
				console.log('当前下标'+index)
				this.cart[index].checked = !this.cart[index].checked
				console.log(this.cart)
				this.setCart(this.cart)
			},
			// 商品全选
			handleItemAllCheck() {
				this.allChecked = !this.allChecked
				console.log(this.cart,this.allChecked)
				this.cart.map(v=>v.checked = this.allChecked)
				this.setCart(this.cart)
			},
			// 加减商品
			subNumEdit(e) {
				console.log(e)
				let id = e;
				console.log(id)
				let index = this.cart.findIndex(v=>v.id===id);
				this.cart[index].cartNum -=1
				this.setCart(this.cart)
			},
			sumNumEdit(e) {
				let id = e;
				let index = this.cart.findIndex(v=>v.id===id);
				this.cart[index].cartNum +=1
				this.setCart(this.cart)
			},
			// 重新设置购物车
			setCart(cart) {
				let allChecked = true;
				let totalPrice = 0;
				let totalNum = 0;
				this.cart.map(v => {
					if (v.checked) {
						totalPrice += v.cartNum * v.price
						totalNum += v.cartNum;
					} else {
						allChecked = false
					}
				})
				allChecked = this.cart.length != 0 ? allChecked : false;
				this.allChecked = allChecked
				this.totalNum = totalNum
				this.totalPrice = totalPrice
				
				uni.setStorageSync('cart',this.cart)
			}
		},
		onShow() {
			this.cart = uni.getStorageSync('cart')
			const cart = uni.getStorageSync('cart')
			console.log(this.cart)
			this.setCart(cart)
		}
	}
</script>

<style>
	page {
		background: #f3f3f3;
	}

	.cartEmpty {
		width: 100%;
		height: 600rpx;
		display: block;
		margin: 154rpx auto 0;
	}

	.cartEmpty image {
		width: 100%;
	}

	.cartEmptyTip {
		font-size: 33rpx;
		height: 80rpx;
		color: #999;
		text-align: center;
	}

	.cartLogin {
		width: 315rpx;
		background: #fe6f06;
		color: #fff;
		font-size: 28rpx;
		line-height: 80rpx;
		text-align: center;
		margin: 0 auto;
		border-radius: 10rpx;
	}

	.cartList {
		border-top: 1rpx solid #e5e5e5;
	}

	.cartItem {
		display: flex;
		padding: 35rpx 20rpx 30rpx;
		border-bottom: 1rpx solid #e5e5e5;
	}

	.cartItem label {
		display: flex;
		/* 垂直居中 */
		align-items: center;
	}

	.cartItem checkbox {
		transform: scale(0.7);
	}

	.mainImg image {
		width: 200rpx;
		height: 200rpx;
	}

	.contentTitle {
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

	.contentAttr {
		font-size: 24rpx;
		color: #999;
		line-height: 40rpx;
	}

	.contentPrice {
		height: 80rpx;
		display: flex;
		align-items: center;
		/* 两端对齐 */
		justify-content: space-between;
		font-size: 28rpx;
	}

	.contentPrice text {
		color: #d9000b;
	}

	.contentPrice .numOption {
		display: flex;
		width: 154rpx;
		border: 1prx solid #e5e5e5;
	}

	.numOption .optionBtn {
		width: 44rpx;
		text-align: center;
	}

	.numOption .numText {
		flex: 1;
		border-left: 1prx solid #e5e5e5;
		border-right: 1prx solid #e5e5e5;
	}

	.numOption .numText input {
		width: 100%;
		text-align: center;
	}

	.bottomEmpty {
		bottom: var(--window-bottom);
	}

	.cartBottom {
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

	.cartBottom checkbox {
		transform: scale(0.7);
	}

	.cartBottom .cartBottomRight {
		display: flex;
		align-items: center;
	}

	.cartBottomRight .payBtn {
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

	.payBtn text {
		font-size: 22rpx;
	}
</style>
