<template>
	<div>
		<!-- white-plate -->
		<div class="white-plate">
			<div class="container-fluid">
				<!-- header -->
				<div class="header">
					<div class="row">
						<div class="col-sm-6">
							<a href="index.html" class="site-logo">
							<span>техно</span>Store
							</a>
						</div>
						<div class="col-sm-6 d-flex justify-content-end">
							<div class="fav-list-wrapper">
								<div class="fav-list__button">
									<i class="far fa-heart"></i> Избранное
								</div>
								<div class="list-dropdown">
									<div class="product-list-item">
										<div class="product-list-item__img">
											<img src="@/assets/img/products/iphone.jpg" alt="iPhone">
										</div>
										<div class="product-list-item__title">
											<a href="#">Apple iPhone X 256 ГБ «серый космос»</a>
										</div>
										<a href="#" class="product-list-item__delete">
										<i class="fas fa-times"></i>
										</a>
									</div>
									<div class="product-list-item">
										<div class="product-list-item__img">
											<img src="@/assets/img/products/iphone.jpg" alt="iPhone">
										</div>
										<div class="product-list-item__title">
											<a href="#">Apple iPhone X 256 ГБ «серый космос»</a>
										</div>
										<a href="#" class="product-list-item__delete">
										<i class="fas fa-times"></i>
										</a>
									</div>
									<div class="product-list-item">
										<div class="product-list-item__img">
											<img src="@/assets/img/products/iphone.jpg" alt="iPhone">
										</div>
										<div class="product-list-item__title">
											<a href="#">Apple iPhone X 256 ГБ «серый космос»</a>
										</div>
										<a href="#" class="product-list-item__delete">
										<i class="fas fa-times"></i>
										</a>
									</div>
									<div class="product-list-item">
										<div class="product-list-item__img">
											<img src="@/assets/img/products/iphone.jpg" alt="iPhone">
										</div>
										<div class="product-list-item__title">
											<a href="#">Apple iPhone X 256 ГБ «серый космос»</a>
										</div>
										<a href="#" class="product-list-item__delete">
										<i class="fas fa-times"></i>
										</a>
									</div>
								</div>
							</div>
							<div class="cart-list-wrapper">
								<div class="cart-list__button">
									<i class="fas fa-shopping-cart"></i>
									Корзина
									<span class="cart-btn-badge">4</span>
								</div>
								<div class="list-dropdown">
									<div class="product-list-item">
										<div class="product-list-item__img">
											<img src="@/assets/img/products/iphone.jpg" alt="iPhone">
										</div>
										<div class="product-list-item__title">
											<a href="#">Apple iPhone X 256 ГБ «серый космос»</a>
										</div>
										<a href="#" class="product-list-item__delete">
										<i class="fas fa-times"></i>
										</a>
									</div>
									<div class="product-list-item">
										<div class="product-list-item__img">
											<img src="@/assets/img/products/iphone.jpg" alt="iPhone">
										</div>
										<div class="product-list-item__title">
											<a href="#">Apple iPhone X 256 ГБ «серый космос»</a>
										</div>
										<a href="#" class="product-list-item__delete">
										<i class="fas fa-times"></i>
										</a>
									</div>
									<div class="product-list-item">
										<div class="product-list-item__img">
											<img src="@/assets/img/products/iphone.jpg" alt="iPhone">
										</div>
										<div class="product-list-item__title">
											<a href="#">Apple iPhone X 256 ГБ «серый космос»</a>
										</div>
										<a href="#" class="product-list-item__delete">
										<i class="fas fa-times"></i>
										</a>
									</div>
									<div class="product-list-item">
										<div class="product-list-item__img">
											<img src="@/assets/img/products/iphone.jpg" alt="iPhone">
										</div>
										<div class="product-list-item__title">
											<a href="#">Apple iPhone X 256 ГБ «серый космос»</a>
										</div>
										<a href="#" class="product-list-item__delete">
										<i class="fas fa-times"></i>
										</a>
									</div>
									<div class="dropdown-cart-btn">
										<a href="cart.html" class="btn btn-warning">Перейти в корзину</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- // header -->
				<div class="line-between"></div>
				<!-- content block -->
				<div class="row">
					<div class="col-md-3 col-lg-2">
						<div class="nav-section">
							<div class="nav-section__title">Категории</div>
							<ul class="nav">
								<li class="nav__element">
									<a href="#!" class="nav__link nav__link--active">
									<i class="fas fa-check-square"></i>
									Все товары
									</a>
								</li>
								<li class="nav__element">
									<a href="#!" class="nav__link">
									<i class="far fa-square"></i>
									Телефоны
									</a>
								</li>
								<li class="nav__element">
									<a href="#!" class="nav__link">
									<i class="far fa-square"></i>
									Планшеты
									</a>
								</li>
								<li class="nav__element">
									<a href="#!" class="nav__link">
									<i class="far fa-square"></i>
									Ноутбуки
									</a>
								</li>
								<li class="nav__element">
									<a href="#!" class="nav__link">
									<i class="far fa-square"></i>
									Компьютеры
									</a>
								</li>
							</ul>
						</div>
						<div class="nav-section">
							<div class="nav-section__title">Цена</div>
							<div class="input-price-wrapper form-inline">
								<input type="number" placeholder="От" class="form-control input-price-before">
								<input type="number" placeholder="До" class="form-control input-price-after">
							</div>
						</div>
						<div class="nav-section">
							<div class="nav-section__title">Производители</div>
							<ul class="nav">
								<li class="nav__element">
									<a href="#!" class="nav__link nav__link--active">
									<i class="fas fa-check-square"></i>
									Все
									</a>
								</li>
								<li class="nav__element">
									<a href="#!" class="nav__link">
									<i class="far fa-square"></i>
									Apple
									</a>
								</li>
								<li class="nav__element">
									<a href="#!" class="nav__link">
									<i class="far fa-square"></i>
									Google
									</a>
								</li>
								<li class="nav__element">
									<a href="#!" class="nav__link">
									<i class="far fa-square"></i>
									Huawei
									</a>
								</li>
								<li class="nav__element">
									<a href="#!" class="nav__link">
									<i class="far fa-square"></i>
									Yandex
									</a>
								</li>
							</ul>
						</div>
					</div>
					<!-- Center Part -->
					<div class="col-md-9 col-lg-10">
						<div class="row">
							<good-card
								price="79990"
								oldPrice="89990"
								src="/assets/img/products/iphone.jpg"
								title="Apple iPhone X 256 ГБ «серый космос»"
							/>

							<good-card
								price="79990"
								isFavorites='true'
								isDiscount='true'
								src="/assets/img/products/iphone.jpg"
								title="Apple iPhone X 256 ГБ «серый космос»"
							/>

							<good-card
								price="79990"
								oldPrice="89990"
								isNew="true"
								src="/assets/img/products/iphone.jpg"
								title="Apple iPhone X 256 ГБ «серый космос»"
							/>

							<good-card
								price="79990"
								oldPrice="89990"
								isDiscount='true'
								src="/assets/img/products/iphone.jpg"
								title="Apple iPhone X 256 ГБ «серый космос»"
							/>
						</div>
					</div>
					<!-- // Center Part -->
				</div>
				<!-- content block -->
			</div>
		</div>
		<!-- // white-plate -->
		<div class="copyright">
			<p>
				Сделал John Doe, на курсе
				<a href="http://webcademy.ru" target="_blank">WebCademy.ru</a>
			</p>
		</div>
	</div>
</template>

<script>
import './style.css'

import GoodCard from '@/components/GoodCard/index'

export default {
	components: {
		GoodCard
	},

	data () {
		return {}
	},
	
	computed: {},
	
	methods: {}
}
</script>