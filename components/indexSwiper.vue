<!--轮播图-->
<template>
	<view>
		<!--通过uSwiper自动生成swiper代码块-->
		<!--swiper属性：
		    indicator-dots：是否显示面板指示点
			autoplay：是否自动切换
		    interval:自动切换时间问题
		    duration：滑动动画时长
		    indicator-color：指示点颜色
		    indicator-active-color:当前选中的指示点颜色-->
		<swiper 
		    class="swiper" 
			:indicator-dots="true"
			:autoplay="true" 
			:interval="3000" 
			:duration="1000"
			indicator-color="#7d7c82"
			indicator-active-color="#fe6f06">
			<swiper-item>
				<view class="swiper-item">
					<navigator url="#">
						<image src="../static/image/Carousel1.jpg" mode=""></image>
					</navigator>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<navigator url="#">
						<image src="../static/image/Carousel2.jpg" mode=""></image>
					</navigator>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<navigator url="#">
						<image src="../static/image/Carousel3.jpg" mode=""></image>
					</navigator>
				</view>
			</swiper-item>
		</swiper>	
	</view>		
</template>


<script>
</script>

<style>
	.swiper{
		width: 100%;
		height: 300Srpx;
	}
	.swiper image{
		width: 100%;
		height: 300rpx;
	}
</style>
