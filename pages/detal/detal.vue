<template>
	<view>
		<!--详情页轮播图-->
		<!--swiper属性：
		    indicator-dots：是否显示面板指示点
			autoplay：是否自动切换
		    interval:自动切换时间问题
		    duration：滑动动画时长
		    indicator-color：指示点默认颜色
		    indicator-active-color:当前选中的指示点颜色
			-->
		<swiper class="detailSwiper" indicator-color="#b3b3b3" indicator-active-color="#fe6f06" :indicator-dots="true"
			:autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="swiper in productDetail.productSwiperImageList">
				<view class="swiper-item">
					<image :src="getImageUrl(swiper.image)" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
		<!-- 商品详情信息-->
		<view class="shopInfo">
			<view class="shop-title">
				<label>新品</label>
				{{productDetail.name}}
			</view>
			<view class="shop-title">
				{{productDetail.description}}
			</view>
			<view class="shop-price-sale">
				<view class="shop-price">
					<text>{{productDetail.price}}元</text>
				</view>
				<view class="shop-sale">
					月销量：{{productDetail.stock}}件
				</view>
			</view>
		</view>
		<!-- 商品规格 -->
		<view class="shopAttr" @click="showAttr">
			<label>规格</label>
			<text>请选择商品规格尺寸</text>
			<image src="../../static/image/ALL2.png" mode=""></image>
		</view>
		<!-- 商品查询选项 -->
		<view class="shopTab">
			<view class="shopTabItem" :class="{tabActive:tab==0}" @click="tabChange(0)">图文详情</view>
			<view class="shopTabItem" :class="{tabActive:tab==1}" @click="tabChange(1)">规格参数</view>
		</view>
		<!-- 图片详情 -->
		<view class="content" v-if="tab==0">
			<rich-text :nodes="productDetail.productintroimgs"></rich-text>
		</view>
		<!-- 规格详情 -->
		<view class="shopSpecs" v-if="tab==1">
			<rich-text :nodes="productDetail.productparaimgs"></rich-text>
		</view>

		<!-- 底部页面 站位空白-->
		<view class="bottomBlank"></view>

		<!-- 底部导航按钮 -->
		<view class="bottomDetail">
			<view class="bottomItem">
				<view class="bottomItemIndex" @click="gotoIndex">
					<image src="../../static/image/FirstPage1.png" mode=""></image>
					<text>首页</text>
				</view>
				<view class="bottomItemIndex" @click="gotoShoppingCart">
					<image src="../../static/image/Shopping.png" mode=""></image>
					<text>购物车</text>
				</view>
			</view>
			<view class="bottomButton cartButton">加入购物车</view>
			<view class="bottomButton buyButton">立即购买</view>
		</view>
		<!-- 添加商品属性的布局组件的使用 -->
		<DetailAttr @close="closeAttr" v-if="attrFlag"></DetailAttr>
	</view>
</template>

<script>
	import DetailAttr from "../../components/detailAttr.vue"
	import {
		queryOneProduct
	} from '../../api/index.js'
	export default {
		components: {
			DetailAttr
		},
		data() {
			return {
				tab: 0, //0—表示默认是图文详情选中，1-表示规格参数被选中
				attrFlag: false, //默认表示属性窗口隐藏
				// 商品详情
				productDetail: [],
				// 商品详情id
				productId: 0
			}
		},
		onLoad(option) {
			this.productId = option.id
			queryOneProduct(option.id).then((res) => {
				if (res.code == 200) {
					this.productDetail = res.data
				} else {
					uni.showToast({
						icon: 'error',
						duration: 1000,
						title: res.message
					})
				}
			})
		},
		methods: {
			// 获取图片连接
			getImageUrl(image) {
				return "http://localhost:8888/image/" + image
			},
			tabChange(index) {
				this.tab = index;
			},
			closeAttr() {
				this.attrFlag = false
			},
			showAttr() {
				this.attrFlag = true;
			},
			gotoIndex() {
				uni.switchTab({
					url: '/pages/index/index'
				})
			},
			gotoShoppingCart() {
				uni.switchTab({
					url: '/pages/cart/cart'
				})
			}
			

		},
		created() {}
	}
</script>

<style>
	.detailSwiper {
		width: 100%;
		height: 525rpx;
	}

	.detailSwiper image {
		width: 470rpx;
		height: 470rpx;
		display: block;
		margin: 0 auto;
	}

	.shopInfo {
		padding: 0 30rpx;
		border-top: 1rpx solid #e9e9e9;
	}

	.shop-title {
		line-height: 40rpx;
		font-size: 28rpx;
		color: #000;
		padding-top: 24rpx;
	}

	.shop-title label {
		display: block;
		width: 64rpx;
		height: 40rpx;
		color: #fff;
		background: #fe6f06;
		/* 左浮动 */
		float: left;
		text-align: center;
		margin-right: 10rpx;
		border-radius: 10rpx;
	}

	.shop-summary {
		font-size: 24rpx;
		color: #9a9a9a;
		line-height: 35rpx;
		padding-top: 10rpx;
	}

	.shop-summary label {
		display: block;
		width: 125rpx;
		height: 45rpx;
		color: #000;
		background: #ddd;
		/* 左浮动 */
		float: left;
		text-align: center;
		margin-right: 10rpx;
		border-radius: 10rpx;
	}

	.shop-price-sale {
		line-height: 83rpx;
		height: 83rpx;
		display: flex;
		justify-content: space-between;
		color: #999;
		font-size: 28rpx;
		border-bottom: 1rpx solid #e9e9e9;
	}

	.shop-price-sale .shop-price {
		font-size: 36rpx;
		color: #f0415f;
	}

	.shop-price-sale label {
		font-size: 28rpx;
		color: #999;
		/* 添加横线从文字水平中央位置穿过 */
		text-decoration: line-through;
		margin-left: 10rpx;
	}

	.shopAttr {
		line-height: 90rpx;
		padding: 0 30rpx;
		border-top: 20rpx solid #f7f7f7;
		border-bottom: 20rpx solid #f7f7f7;
		color: #999;
	}

	.shopAttr label {
		font-size: 28rpx;

	}

	.shopAttr text {
		color: #000;
		margin-left: 24rpx;
		font-size: 28rpx;
	}

	.shopAttr image {
		width: 50rpx;
		height: 50rpx;
		float: right;
		margin-top: 25rpx;
		color: #999;
	}

	.shopTab {
		height: 80rpx;
		display: flex;
		align-items: center;
		border-bottom: 1rpx solid #e5e5e5;
	}

	.shopTab .shopTabItem {
		width: 50%;
		text-align: center;
		font-size: 28rpx;
		/* 字体加粗 */
		font-weight: bold
	}

	/* 如果两个类之间没有空格表示选中一个元素，而这个元素同时需要具有这两个类属性 */
	.shopTabItem.tabActive {
		color: #fe6f06;
	}

	.content image {
		width: 100%;
	}

	.shopSpecs image {
		width: 100%;
	}

	.bottomBlank {
		width: 100%;
		height: 80rpx;
	}

	.bottomDetail {
		width: 100%;
		height: 100rpx;
		background: #fff;
		/* 固定定位 */
		position: fixed;
		bottom: 0;
		/* 内部元素水平排列 */
		display: flex;
	}

	.bottomItem {
		flex: 1;
		display: flex;
	}

	.bottomItemIndex {
		width: 50%;
	}

	.bottomItemIndex image {
		width: 40rpx;
		height: 40rpx;
		display: block;
		margin: 10rpx auto 6rpx;
	}

	.bottomItemIndex text {
		height: 40rpx;
		line-height: 40rpx;
		font-size: 24rpx;
		color: #999;
		display: block;
		text-align: center;
	}

	.bottomButton {
		width: 275rpx;
		color: #fff;
		font-size: 28rpx;
	}

	.cartButton {
		background: #fe6f06;
		text-align: center;
		line-height: 100rpx;
	}

	.buyButton {
		background: #fe6f06;
		text-align: center;
		line-height: 100rpx;
	}
</style>
