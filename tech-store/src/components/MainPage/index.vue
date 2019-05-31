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
				<good-card
					v-for='good of goods'
					:price='good.price'
					:oldPrice='good.oldPrice'
					:src='good.src'
					:title='good.title'
					:isFavorites='good.isFavorites'
					:isDiscount='good.isDiscount'
					:isNew='good.isNew'
					:id='good.id'
				/>
			</div>
		</div>
		<!-- // Center Part -->
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
	
	computed: {
		goods () {
			return this.$store.state.goods
		}
	},
	
	methods: {
		sort () {
			this.$store.dispatch('sort')
		},

		update () {
			this.$store.dispatch('update')
		}
	}
}
</script>