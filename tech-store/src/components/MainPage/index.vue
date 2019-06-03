<template>
	<div class="row">
		<div class="col-md-3 col-lg-2">
			<div class="nav-section">
				<ul class="nav">
					<custom-checkbox :isActive.sync='favoriteMode'>Избранное</custom-checkbox>
				</ul>
			</div>
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
					<input type="number" placeholder="От" class="form-control input-price-before" v-model='minPrice'>
					<input type="number" placeholder="До" class="form-control input-price-after" v-model='maxPrice'>
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
				<product-card v-for='item of filteredList' :data='item' />
			</div>
		</div>
		<!-- // Center Part -->
	</div>
</template>

<script>
import './style.css'

import ProductCard from '@/components/ProductCard/index'
import CustomCheckbox from '@/components/CustomCheckbox/index'

export default {
	components: {
		ProductCard,
		CustomCheckbox
	},

	data () {
		return {
			minPrice: null,
			maxPrice: null,
			favoriteMode: false
		}
	},

	created () {
		const query = this.$route.query || {}

		if (query.favoriteMode) {
			this.favoriteMode = true
		}

		this.$router.replace(this.$route.path)
	},
	
	computed: {
		productsList () {
			const list = this.$store.state.products.list
			const favorites = this.$store.state.cart.favorites

			const productsList = list.map(item => {
				return {
					...item,
					isFavorites: favorites.includes(item.id)
				}
			})

			return productsList
		},

		filteredList () {
			let list = this.productsList

			if (this.minPrice !== null) {
				list = list.filter(item => item.price >= this.minPrice)
			}

			if (this.maxPrice !== null) {
				list = list.filter(item => item.price <= this.maxPrice)
			}

			if (this.favoriteMode) {
				list = list.filter(item => item.isFavorites)
			}

			return list
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