<template>
	<div class="col-sm-6 col-md-6 col-lg-4">{{ isNew }}
		<article class="card mb-4">
			<div class="card-top">
				<div class="card-top__left">
					<div class="card-top__sale">Скидка</div>
				</div>
				<div class="card-top__right">
					<div class="card-top__fav" title="Добавить в избранное">
						<i class="far fa-heart"></i>
					</div>
				</div>
			</div>
			<div class="product-img">
				<img src="@/assets/img/products/iphone.jpg">
			</div>
			<div class="card-body">
				<div class="card-price-wrapper">
					<div v-if="oldPrice === undefined" class="card-price-regular">
						{{ price }} <span>₽</span>
					</div>
					<div v-if="oldPrice !== undefined" class="card-price-new">
						{{ price }} <span>₽</span>
					</div>
					<div v-if="oldPrice !== undefined" class="card-price-old">
						{{ oldPrice }} <span>₽</span>
					</div>
				</div>
				<h4 class="item-title">
					<a href="product-page.html">Apple iPhone X 256 ГБ «серый космос»</a>
				</h4>
				<div class="card-buy">В корзину</div>
			</div>
		</article>
	</div>
</template>

<script>
export default {
	props: ['price', 'oldPrice', 'isNew'],
	name: 'goodCard'
}
</script>