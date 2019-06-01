<template>
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
				<product-card
					v-for='item of productsList'
					:isFavorites='item.isFavorites'
					:isDiscount='item.isDiscount'
					:oldPrice='item.oldPrice'
					:price='item.price'
					:isNew='item.isNew'
					:title='item.title'
					:src='item.src'
					:key='item.id'
					:id='item.id'
				/>
			</div>
		</div>
		<!-- // Center Part -->
	</div>
</template>

<script>
import './style.css'

import ProductCard from '@/components/ProductCard/index'

export default {
	components: {
		ProductCard
	},

	data () {
		return {}
	},
	
	computed: {
		productsList () {
			return this.$store.state.products.list
		}
	},
	
	methods: {
		sort () {
			this.$store.dispatch('products/sort')
		},

		update () {
			this.$store.dispatch('products/update')
		}
	}
}
</script>