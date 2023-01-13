<!--template标签中放的内容的页面的布局，一般放Html元素-->
<template>
	<view class="content">
		<!--顶部导航-->
		<NavHeader></NavHeader>
		<!--轮播图-->
		<IndexSwiper></IndexSwiper>
		<!--首页服务分类和分类导航-->
		<IndexService></IndexService>
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
	import NavHeader from"../../components/navHeader.vue"
	import IndexSwiper from"../../components/indexSwiper.vue"
	import IndexService from"../../components/indexService.vue"
	import IndexAD from"../../components/indexAD.vue"
	import IndexTitle from"../../components/indexTitle.vue"
	import ShopList from"../../components/shopList.vue"
	import IndexTable from"../../components/indexTable.vue"
	
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		components:{
			NavHeader, IndexSwiper, IndexService,IndexAD,IndexTitle,
			ShopList,IndexTable
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<!--在styly标签下放的是css样式代码-->
<style>
	/*设置首页背景色*/
	page{
		background: #f4f4f4;
	}
	.cateAd{
		width: 100%;
		height: 344rpx;
	}
	.cateAd image {
		width: 100%;
		height: 344rpx;
	}

	
</style>
