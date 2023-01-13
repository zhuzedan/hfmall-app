<template>
	<view>
		<!-- 搜索框 -->
		<navigator url="/pages/search/search">
			<view class="search">
				<view class="searchBox">
					<navigator url="#">
						<image src="../../static/image/search.png" mode="">请输入关键字</image>
					</navigator>
				</view>
			</view>
		</navigator>
		<!-- 内容 -->
		<view class="shopList">
			<navigator url="../detal/detal">
				<view class="shopListItem">
					<image class="shopImg" src="../../static/image/p1.jpg" mode="" ></image>
					<view class="shopTitle">
					     钟灵记.柿柿如意
					</view>
					<view class="shopActive">
						<view class="shopActiveInter">
							包邮
						</view>
						<view class="shopActiveText">
							柿子猫咪蝴蝶绣花 定制满地金渐变色
						</view>
					</view>
					<view class="shopPrice">
						¥726.00
					</view>
				</view>
			</navigator>
			
			
			<navigator url="../detal/detal">
				<view class="shopListItem">
					<image class="shopImg" src="../../static/image/p2.jpg" mode="" ></image>
					<view class="shopTitle">
					     织造司.西池
					</view>
					<view class="shopActive">
						<view class="shopActiveInter">
							包邮
						</view>
						<view class="shopActiveText">
							合领半臂立领对襟长衫仿妆花马面裙秋冬
						</view>
					</view>
					<view class="shopPrice">
						¥406.00
					</view>
				</view>
			</navigator>
			
			<navigator url="../detal/detal">
				<view class="shopListItem">
					<image class="shopImg" src="../../static/image/p3.jpg" mode="" ></image>
					<view class="shopTitle">
					     池夏.【花间事 芋泥波波】
					</view>
					<view class="shopActive">
						<view class="shopActiveInter">
							包邮
						</view>
						<view class="shopActiveText">
							明制加绒比甲短衫百迭原创改良汉服女冬
						</view>
					</view>
					<view class="shopPrice">
						¥328.00
					</view>
				</view>
			</navigator>
			
			<navigator url="../detal/detal">
				<view class="shopListItem">
					<image class="shopImg" src="../../static/image/p4.jpg" mode="" ></image>
					<view class="shopTitle">
					     远山乔.秋草鹦鹉
					</view>
					<view class="shopActive">
						<view class="shopActiveInter">
							包邮
						</view>
						<view class="shopActiveText">
							明制汉服女比甲加绒立领琵琶刺绣马面裙冬
						</view>
					</view>
					<view class="shopPrice">
						¥784.00
					</view>
				</view>
			</navigator>
		</view>
		
		<view class="shopList">
			<navigator url="../detal/detal">
				<view class="shopListItem">
					<image class="shopImg" src="../../static/image/p1.jpg" mode="" ></image>
					<view class="shopTitle">
					     钟灵记.柿柿如意
					</view>
					<view class="shopActive">
						<view class="shopActiveInter">
							包邮
						</view>
						<view class="shopActiveText">
							柿子猫咪蝴蝶绣花 定制满地金渐变色
						</view>
					</view>
					<view class="shopPrice">
						¥726.00
					</view>
				</view>
			</navigator>
			
			
			<navigator url="../detal/detal">
				<view class="shopListItem">
					<image class="shopImg" src="../../static/image/p2.jpg" mode="" ></image>
					<view class="shopTitle">
					     织造司.西池
					</view>
					<view class="shopActive">
						<view class="shopActiveInter">
							包邮
						</view>
						<view class="shopActiveText">
							合领半臂立领对襟长衫仿妆花马面裙秋冬
						</view>
					</view>
					<view class="shopPrice">
						¥406.00
					</view>
				</view>
			</navigator>
			
			<navigator url="../detal/detal">
				<view class="shopListItem">
					<image class="shopImg" src="../../static/image/p3.jpg" mode="" ></image>
					<view class="shopTitle">
					     池夏.【花间事 芋泥波波】
					</view>
					<view class="shopActive">
						<view class="shopActiveInter">
							包邮
						</view>
						<view class="shopActiveText">
							明制加绒比甲短衫百迭原创改良汉服女冬
						</view>
					</view>
					<view class="shopPrice">
						¥328.00
					</view>
				</view>
			</navigator>
			
			<navigator url="../detal/detal">
				<view class="shopListItem">
					<image class="shopImg" src="../../static/image/p4.jpg" mode="" ></image>
					<view class="shopTitle">
					     远山乔.秋草鹦鹉
					</view>
					<view class="shopActive">
						<view class="shopActiveInter">
							包邮
						</view>
						<view class="shopActiveText">
							明制汉服女比甲加绒立领琵琶刺绣马面裙冬
						</view>
					</view>
					<view class="shopPrice">
						¥784.00
					</view>
				</view>
			</navigator>
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



<style >
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
	/*给商品列表项设置排列方式为水平排列*/
	.shopList{
		/*垂直改为水平*/
		display: flex;
		/*设置当前行的元素两端对齐*/
		justify-content: space-between;
		/*设置元素自动换行*/
		flex-wrap: wrap;
	}
	.shopList .shopListItem{
		width: 370rpx;
		height: 530rpx;
		background: #f9f9f9;
		overflow: hidden;
		margin-top: 10rpx;
		border-radius: 20rpx;
		
	}
	.shopListItem .shopImg{
		width: 316rpx;
		height: 316rpx;
		display: block;
		margin: 40rpx auto 0;
	}
	.shopListItem .shopTitle {
		height: 50rpx;
		line-height: 50rpx;
		font-size: 14rpx;
		text-align: center;
	}
	.shopListItem .shopActive{
		width: 346rpx;
		height: 40rpx;
		margin:10rpx auto 0;
		border: 1rpx solid #d9000b;
		display: flex;
	}
	.shopActive .shopActiveInter{
		width: 70rpx;
		background: #d9000b;
		font-size: 24rpx;
		color: #fff;
		text-align: center;
		line-height: 40rpx;
	}
	.shopActive .shopActiveText {
		width: 276rpx;
		font-size: 24rpx;
		color: #d9000b;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		line-height: 40rpx;
		margin-left: 10rpx;
	}
	.shopListItem .shopPrice {
		color: #c00;
		font-size: 28rpx;
		text-align: center;
		line-height: 35rpx;
	}

</style>
