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
					<view class="cateNameItem cateActive">
						汉服女装<view class="cateLine"></view>
					</view>
					<view class="cateNameItem">
						汉服男装<view class="cateLine"></view>
					</view>
					<view class="cateNameItem">
						汉服童装<view class="cateLine"></view>
					</view>
					<view class="cateNameItem">
						汉服帽子<view class="cateLine"></view>
					</view>
					<view class="cateNameItem">
						汉服鞋子<view class="cateLine"></view>
					</view>
					<view class="cateNameItem">
						汉服配饰<view class="cateLine"></view>
					</view>
					<view class="cateNameItem">
						汉服布料<view class="cateLine"></view>
					</view>
					<view class="cateNameItem">
						汉服材料<view class="cateLine"></view>
					</view>
					<view class="cateNameItem">
						汉服测试1<view class="cateLine"></view>
					</view>
					<view class="cateNameItem">
						汉服测试2<view class="cateLine"></view>
					</view>
					<view class="cateNameItem">
						汉服测试3<view class="cateLine"></view>
					</view>
					<view class="cateNameItem">
						汉服测试4<view class="cateLine"></view>
					</view>
					<view class="cateNameItem">
						汉服测试5<view class="cateLine"></view>
					</view>
					<view class="cateNameItem">
						汉服测试6<view class="cateLine"></view>
					</view>
					
				</scroll-view>
			</view>
			
			<!--2.右侧分类布局-->
			<view class="cateRight">
				<scroll-view class="cateRightScroll" scroll-y="true" >
					<view class="cateItem">
						<view class="cateRightTitle">
							--<text>汉服女装</text>--
						</view>
						
						<view class="cateRightList">
							<navigator url="../detal/detal">
								<view class="cateRightItem">
									<image src="../../static/image/p1.jpg" mode=""></image>
									<text>汉</text>
								</view>
							</navigator>
							
							<navigator url="../detal/detal">
								<view class="cateRightItem">
									<image src="../../static/image/p1.jpg" mode=""></image>
									<text>魏晋南北朝</text>
								</view>
							</navigator>
							
							<navigator url="../detal/detal">
								<view class="cateRightItem">
									<image src="../../static/image/p1.jpg" mode=""></image>
									<text>唐</text>
								</view>
							</navigator>
							<navigator url="../detal/detal">
								<view class="cateRightItem">
									<image src="../../static/image/p2.jpg" mode=""></image>
									<text>宋</text>
								</view>
							</navigator>
							<navigator url="../detal/detal">
								<view class="cateRightItem">
									<image src="../../static/image/p3.jpg" mode=""></image>
									<text>明</text>
								</view>
							</navigator>
							
					
						</view>
					</view>
					
					<view class="cateItem">
						<view class="cateRightTitle">
							--<text>汉服男装</text>--
						</view>
						<view class="cateRightList">
							<navigator url="../detal/detal">
								<view class="cateRightItem">
									<image src="../../static/image/p1.jpg" mode=""></image>
									<text>汉</text>
								</view>
							</navigator>
							
							<navigator url="../detal/detal">
								<view class="cateRightItem">
									<image src="../../static/image/p1.jpg" mode=""></image>
									<text>魏晋南北朝</text>
								</view>
							</navigator>
							<navigator url="../detal/detal">
								<view class="cateRightItem">
									<image src="../../static/image/p2.jpg" mode=""></image>
									<text>唐</text>
								</view>
							</navigator>
							<navigator url="../detal/detal">
								<view class="cateRightItem">
									<image src="../../static/image/p3.jpg" mode=""></image>
									<text>宋</text>
								</view>
							</navigator>
							<navigator url="../detal/detal">
								<view class="cateRightItem">
									<image src="../../static/image/p4.jpg" mode=""></image>
									<text>明</text>
								</view>
							</navigator>
					
						</view>
					</view>
					
					
					<view class="cateItem">
						<view class="cateRightTitle">
							--<text>汉服童装</text>
						</view>
						<view class="cateRightList">
							<navigator url="../detal/detal">
								<view class="cateRightItem">
									<image src="../../static/image/p1.jpg" mode=""></image>
									<text>汉</text>
								</view>
							</navigator>
							
							<navigator url="../detal/detal">
								<view class="cateRightItem">
									<image src="../../static/image/p1.jpg" mode=""></image>
									<text>魏晋南北朝</text>
								</view>
							</navigator>
							<navigator url="../detal/detal">
								<view class="cateRightItem">
									<image src="../../static/image/p2.jpg" mode=""></image>
									<text>唐</text>
								</view>
							</navigator>
							<navigator url="../detal/detal">
								<view class="cateRightItem">
									<image src="../../static/image/p3.jpg" mode=""></image>
									<text>宋</text>
								</view>
							</navigator>
							<navigator url="../detal/detal">
								<view class="cateRightItem">
									<image src="../../static/image/p4.jpg" mode=""></image>
									<text>明</text>
								</view>
							</navigator>
					
						</view>
					</view>
					
					<view class="cateItem">
						<view class="cateRightTitle">
							--<text>汉服帽子</text>
						</view>
						<view class="cateRightList">
							<navigator url="../detal/detal">
								<view class="cateRightItem">
									<image src="../../static/image/p1.jpg" mode=""></image>
									<text>汉</text>
								</view>
							</navigator>
							
							<navigator url="../detal/detal">
								<view class="cateRightItem">
									<image src="../../static/image/p1.jpg" mode=""></image>
									<text>魏晋南北朝</text>
								</view>
							</navigator>
							<navigator url="../detal/detal">
								<view class="cateRightItem">
									<image src="../../static/image/p2.jpg" mode=""></image>
									<text>唐</text>
								</view>
							</navigator>
							<navigator url="../detal/detal">
								<view class="cateRightItem">
									<image src="../../static/image/p3.jpg" mode=""></image>
									<text>宋</text>
								</view>
							</navigator>
							<navigator url="../detal/detal">
								<view class="cateRightItem">
									<image src="../../static/image/p4.jpg" mode=""></image>
									<text>明</text>
								</view>
							</navigator>
					
						</view>
					</view>
					
					
					<view class="cateItem">
						<view class="cateRightTitle">
							--<text>汉服鞋子</text>
						</view>
						<view class="cateRightList">
							<navigator url="../detal/detal">
								<view class="cateRightItem">
									<image src="../../static/image/p1.jpg" mode=""></image>
									<text>汉</text>
								</view>
							</navigator>
							
							<navigator url="../detal/detal">
								<view class="cateRightItem">
									<image src="../../static/image/p1.jpg" mode=""></image>
									<text>魏晋南北朝</text>
								</view>
							</navigator>
							<navigator url="../detal/detal">
								<view class="cateRightItem">
									<image src="../../static/image/p2.jpg" mode=""></image>
									<text>唐</text>
								</view>
							</navigator>
							<navigator url="../detal/detal">
								<view class="cateRightItem">
									<image src="../../static/image/p3.jpg" mode=""></image>
									<text>宋</text>
								</view>
							</navigator>
							<navigator url="../detal/detal">
								<view class="cateRightItem">
									<image src="../../static/image/p4.jpg" mode=""></image>
									<text>明</text>
								</view>
							</navigator>
					
						</view>
					</view>
					
					
					<view class="cateItem">
						<view class="cateRightTitle">
							--<text>汉服配饰</text>
						</view>
						<view class="cateRightList">
							<navigator url="../detal/detal">
								<view class="cateRightItem">
									<image src="../../static/image/p1.jpg" mode=""></image>
									<text>汉</text>
								</view>
							</navigator>
							
							<navigator url="../detal/detal">
								<view class="cateRightItem">
									<image src="../../static/image/p1.jpg" mode=""></image>
									<text>魏晋南北朝</text>
								</view>
							</navigator>
							<navigator url="../detal/detal">
								<view class="cateRightItem">
									<image src="../../static/image/p2.jpg" mode=""></image>
									<text>唐</text>
								</view>
							</navigator>
							<navigator url="../detal/detal">
								<view class="cateRightItem">
									<image src="../../static/image/p3.jpg" mode=""></image>
									<text>宋</text>
								</view>
							</navigator>
							<navigator url="../detal/detal">
								<view class="cateRightItem">
									<image src="../../static/image/p4.jpg" mode=""></image>
									<text>明</text>
								</view>
							</navigator>
					
						</view>
					</view>
					
					
					<view class="cateItem">
						<view class="cateRightTitle">
							--<text>汉服布料</text>
						</view>
						<view class="cateRightList">
							<navigator url="../detal/detal">
								<view class="cateRightItem">
									<image src="../../static/image/p1.jpg" mode=""></image>
									<text>汉</text>
								</view>
							</navigator>
							
							<navigator url="../detal/detal">
								<view class="cateRightItem">
									<image src="../../static/image/p1.jpg" mode=""></image>
									<text>魏晋南北朝</text>
								</view>
							</navigator>
							<navigator url="../detal/detal">
								<view class="cateRightItem">
									<image src="../../static/image/p2.jpg" mode=""></image>
									<text>唐</text>
								</view>
							</navigator>
							<navigator url="../detal/detal">
								<view class="cateRightItem">
									<image src="../../static/image/p3.jpg" mode=""></image>
									<text>宋</text>
								</view>
							</navigator>
							<navigator url="../detal/detal">
								<view class="cateRightItem">
									<image src="../../static/image/p4.jpg" mode=""></image>
									<text>明</text>
								</view>
							</navigator>
					
						</view>
					</view>
					
				</scroll-view>
				
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
	.cateNameList .cateNameItem {
		font-size: 28rpx;
		color: #000;
		line-height: 100rpx;
		text-align: center;
		/*相对定位*/
		position: relative;
	}
	.cateNameList .cateActive {
		background: #fff;
	}
	.cateNameList .cateLine{
		background: #f7f7f7;
		width: 6rpx;
		height: 30rpx;
		top: 30rpx;
		position: absolute;
	}
	.cateActive .cateLine{
		background: #fe6f06;
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
	}
	.cateRightItem{
		width: 33.3%;
		/*左浮动：从左侧开始展示图片*/
		float: left;
		margin-top: 20rpx;
	}
	.cateRightItem image{
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

