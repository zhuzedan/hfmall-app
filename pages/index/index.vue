<!--template标签中放的内容的页面的布局，一般放Html元素-->
<template>
	<view class="content">
		<!--顶部导航-->
		<NavHeader></NavHeader>
		<!--轮播图-->
		<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000"
			indicator-color="#7d7c82" indicator-active-color="#fe6f06">
			<swiper-item v-for="(item,index) in swipers" :key="item.id">
				<view class="swiper-item">
					<image :src="getImageUrl(item.pic)" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
		<!--首页服务分类-->
		<view class="shopNav">
			<view class="shopNavItem">
				<image src="../../static/image/part1.png" mode=""></image>
				<text>汉服信息</text>
			</view>
			<navigator url="/pages/news/news">
				<view class="shopNavItem">
					<image src="../../static/image/part2.png" mode=""></image>
					<text>汉服头条</text>
				</view>
			</navigator>
			<navigator url="/pages/activity/activity">
				<view class="shopNavItem">
					<image src="../../static/image/part3.png" mode=""></image>
					<text>汉服活动</text>
				</view>
			</navigator>
			<navigator url="/pages/mall/mall">
				<view class="shopNavItem">
					<image src="../../static/image/part4.png" mode=""></image>
					<text>汉服商城</text>
				</view>
			</navigator>
		</view>
		<!--首页广告-->
		<IndexAD></IndexAD>
		<!--楼层-->
		<view class="floor">
			<!--楼层1-->
			<!--楼层的标题-->
			<IndexTitle name="汉服"></IndexTitle>
			<!--楼层广告-->
			<view class="cateAd">
				<image src="../../static/image/cate1.jpg" mode=""></image>
			</view>
			<view class="cateAd">
				<image src="../../static/image/cate2.jpg" mode=""></image>
			</view>
			<view class="cateAd">
				<image src="../../static/image/cate3.jpg" mode=""></image>
			</view>
			<!--商品列表-->
			<ShopList></ShopList>

			<!--楼层2-->
			<IndexTitle name="发簪"></IndexTitle>
			<!--楼层表格布局内容-->
			<IndexTable></IndexTable>
			<!--商品列表-->
			<ShopList></ShopList>
		</view>





	</view>
</template>

<!--JavaScript的相关技术代码声明需要放在script标签内部-->
<script>
	//导入外部的组件文件
	//import +外部组件的名称（自己起的）from目标文件的路径
	import NavHeader from "../../components/navHeader.vue"
	import IndexAD from "../../components/indexAD.vue"
	import IndexTitle from "../../components/indexTitle.vue"
	import ShopList from "../../components/shopList.vue"
	import IndexTable from "../../components/indexTable.vue"
	import {
		getSwiperList,
	} from '../../api/index.js'
	export default {
		data() {
			return {
				title: 'Hello',
				swipers: [],
			}
		},
		methods: {
			// 获取图片链接
			getImageUrl(image) {
				return "http://localhost:8888/image" + image
			},
		},
		onLoad() {
			getSwiperList().then((res) => {
				console.log(res)
				if (res.code == 200) {
					this.swipers = res.data
				}
			})
		},
		components: {
			NavHeader,
			IndexAD,
			IndexTitle,
			ShopList,
			IndexTable
		},

	}
</script>

<!--在styly标签下放的是css样式代码-->
<style>
	/*设置首页背景色*/
	page {
		background: #f4f4f4;
	}

	.cateAd {
		width: 100%;
		height: 344rpx;
	}

	.cateAd image {
		width: 100%;
		height: 344rpx;
	}

	.swiper {
		width: 100%;
		height: 300Srpx;
	}

	.swiper image {
		width: 100%;
		height: 300rpx;
	}

	.shopNav {
		height: 225rpx;
		/*内部元素水平排列*/
		display: flex;
		/*设置内容两端对齐*/
		justify-content: center;
		background: #fff;
	}

	.shopNavItem {
		margin: 0 10rpx;
	}

	.shopNavItem image {
		width: 150rpx;
		height: 150rpx;
		display: block;
		margin: 30rpx auto 0;
	}

	.shopNavItem text {
		display: block;
		font-size: 35rpx;
		counter: #000000;
		line-height: 40rpx;
	}
</style>
