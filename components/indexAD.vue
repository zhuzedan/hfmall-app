<!--广告-->
<template>
	<view class="indexAD">
		<view class="indexLeft">
			<image src="../static/image/AD1.jpg" mode=""></image>
		</view>
		<view class="indexRight">
			<view class="indexRightItem">
				<image src="../static/image/AD2.jpg" mode=""></image>
			</view>
			<view class="indexRightItem">
			    <image src="../static/image/AD3.jpg" mode=""></image>
		    </view>
		</view>	
	</view>
</template>

<script>
</script>

<style>
	.indexAD{
		/*水平排列*/
		display: flex;
		border-top: 20rpx solid #f4f4f4;
	}
	.indexLeft{
		width: 50%;
		height: 520rpx;
	}
	.indexLeft image{
		width: 100%;
		height: 520rpx;
	}
	.indexRight{
		width: 50%;
		height: 520rpx;	
	}
	.indexRightItem {
		height: 260rpx;
	}
	.indexRightItem image{
		width: 100%;
		height: 260rpx;
		
	}
	
</style>