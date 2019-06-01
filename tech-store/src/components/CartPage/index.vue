<template>
	<div class="row">
		<div class="col">
			<div class="title-1">Сделать заказ</div>

			<div class="order-item">
				<div class="order-item-data">
					<div class="order-img">
						<img class="order-img" src="/assets/img/products/iphone.jpg">
					</div>
					<div class="order-desc">
						<h4 class="order-title">Apple iPhone X 256 ГБ «серый космос»</h4>
						<div class="order-price">75990 ₽</div>
					</div>
				</div>
				<div class="order-item-controls">
					<div class="order-number">
						<div class="input-group input-group-sm">
							<div class="input-group-prepend">
								<a href="#" class="btn btn-secondary" type="button" id="button-addon1">-</a>
							</div>
							<input disabled="" type="text" class="form-control order-number-input" value="1">
							<div class="input-group-append">
								<a href="#" class="btn btn-secondary" type="button" id="button-addon2">+</a>
							</div>
						</div>
					</div>
					<a href="#" class="order-delete">
						<img width="18" src="/assets/img/icons/delete.svg" alt="Удалить">
					</a>
				</div>
			</div>

			<p>
				<strong>Всего:</strong> 4 товаров
				<br>
				<strong>На сумму:</strong> 361970 рублей
			</p>

			<form action="success.html">
				<div class="form-group">
					<input type="text" class="form-control" placeholder="Имя и Фамилия">
				</div>
				<div class="form-group">
					<input type="text" class="form-control" placeholder="Телефон">
				</div>
				<div class="form-group">
					<input type="email" class="form-control" placeholder="Email">
				</div>
				<div class="form-group">
					<input type="text" class="form-control" placeholder="Адрес">
				</div>

				<div class="d-flex justify-content-between">
					<div class="form-group">
						<button type="submit" class="btn btn-primary">Оформить заказ</button>
					</div>
					<div class="form-group">
						<a href="http://estore-new/actions/cart-reset.php" class="btn btn-light">Очистить корзину</a>
					</div>
				</div>

			</form>

		</div>
	</div>
</template>

<script>
export default {
	computed: {
		products () {
			return this.$store.getters['cart/order']
		}
	}
}
</script>