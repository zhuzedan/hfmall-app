<template>
	<view>
		<!--搜索框-->
		<view class="search">
			<view class="searchBox">
				<navigator url="#">
					<image src="../../static/image/search.png" mode="">搜索全部</image>
				</navigator>
			</view>
		</view>
		
		<!--分类页面-->
		<view class="cate">
			<!--1.左侧分类布局-->
			<view class="cateLeft">
				<!--scroll-y="ture"表示垂直进行滚动-->
				<scroll-view class="cateNameList" scroll-y="true" >
					<!--滚动的项-->
					<view class="cateNameItem" v-for="(left,index) in leftMenuList" :key="left.id" @click="changeActive(index)">
						<view class="leftName">{{left}}</view>
						<view v-if="activeIndex == index" class="cateLine"></view>
					</view>
					
				</scroll-view>
			</view>
			
			<!--2.右侧分类布局-->
			<view class="cateRight">
				<scroll-view class="cateRightScroll" scroll-y="true" >
					<view class="cateItem" v-for="subCat in rightContent">
						<view class="cateRightTitle">
							--<text>{{subCat.name}}</text>--
						</view>
						
						<view class="cateRightList" v-for="product in subCat.productList">
							<view class="cateRightItem" @click="gotoDetail(product.id)">
								<image :src="'http://localhost:8888/image/'+'p1.jpg'" mode=""></image>
								<text>{{product.name}}</text>
							</view>
						</view>
					</view>
					
				</scroll-view>
				
			</view>
		</view>
	</view>
</template>

<script>
	import config from '../../config/index.js'
	export default {
		data() {
			return {
				leftMenuList: [],
				rightContent: [],
				activeIndex: 0
			}
		},
		Cates: [],
		created() {
			this.getCategories()
		},
		methods: {
			// 获取图片连接
			getImageUrl(image) {
				return "http://localhost:8888/image/"+image
			},
			getCategories() {
				uni.showLoading({
				  title: '加载中',
				})
				uni.request({
					url: 'http://localhost:8888/api/category/queryCategories',
					method: 'GET',
					header: {
						"Authorization": config.token
					},
					success: (res) => {
						if(res.data.code == 200) {
							uni.hideLoading()
							this.Cates = res.data.data
							this.leftMenuList = this.Cates.map(v=>v.name)
							this.rightContent = this.Cates[0].subCategoryList
						}else {
							uni.showToast({
								icon:'error',
								duration:1000,
								title: res.data.message
							})
						}
						console.log(res.data.code)
					}
				})
			},
			//更改点击项的索引号
			changeActive(i) {
				this.activeIndex = i
				// 已经获取到索引号
				this.rightContent = this.Cates[i].subCategoryList
			},
			// 跳转到详情页
			gotoDetail(id) {
				uni.navigateTo({
					url: '/pages/detal/detal?id=' + id
				})
			}
		}
	}
</script>

<style>
	page{
		background: #f7f7f7;
	}
	.search{
		width: 100%;
		height: 110rpx;
		background: #fff;
		/*垂直改为水平*/
		display: flex;
		/*居中*/
		justify-content: center;
		align-items: center;
	}
	.searchBox{
		width: 690rpx;
		height: 70rpx;
		/*表示边框的弧度*/
		border-radius: 80rpx;
		font-size: 14rpx;
		color: #999;
		background-color: #f7f7f7;
	}
	.searchBox navigator{
		display: flex;
		/*当前标签内部的元素居中*/
		justify-content: center;
		/*此标签内所有元素都居中*/
		align-items: center;
		height: 70rpx;
	}
	.searchBox image{
		width: 38rpx;
		height: 38rpx;
		margin-right: 12rpx;
	}
	.cate{
		/*绝对定位，固定在一个位置上*/
		position: absolute;
		width: 100%;
		top:120rpx;
		bottom: 0;
		background: white;
		/*水平排列*/
		display: flex;
	}
	.cate .cateLeft {
		width: 200rpx;
		height: 100%;
		background: #f7f7f7;
	}
	.cateNameItem {
		height: 60px;
	}
	.cateNameItem .leftName {
		font-size: 28rpx;
		display: flex;
		align-items: center;
		margin-left: 10px;
	}
	.cateNameItem .cateLine{
		background: #fe6f06;
		width: 8rpx;
		height: 60rpx;
		top: 30rpx;
		position: absolute;
	}
	.cateNameList .cateNameItem {
		font-size: 28rpx;
		color: #000;
		line-height: 100rpx;
		text-align: center;
		position: relative;
	}
	.cateRight{
		width: 550rpx;
		height: 100%;
		background: #fff;
	}
	.cateRightScroll{
		height: 100%;
	}
	.cateRightTitle{
		line-height: 86rpx;
		padding-top: 16rpx;
		font-size: 28rpx;
		color: #999;
		text-align: center;
	}
	.cateRightTitle text{
		padding: 0 30rpx;
	}
	.cateRightList{
		/*自动根据图片控制行高*/
		height: auto;
		/*自动隐藏*/
		overflow: hidden;
		display: flex;
		flex-direction: row;
	}
	.cateRightList .cateRightItem{
		width: 33.3%;
		/*左浮动：从左侧开始展示图片*/
		float: left;
		margin-top: 20rpx;
	}
	.cateRightList .cateRightItem image{
		width: 160rpx;
		height: 160rpx;
		display: block;
		/*左右居中*/
		margin: 0 auto;
	}
	.cateRightItem text{
		display: block;
		width: 100%;
		line-height: 36rpx;
		font-size: 24rpx;
		text-align: center;
		/*当商品的标题内容一行展示不下的时候，需要使用省略号进行样式的展示*/
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	

</style>

