const api = {}

if (!localStorage.getItem('goods')) {
	localStorage.setItem('goods', JSON.stringify([
			{
				price: 79989,
				oldPrice: 89989,
				src: "/assets/img/products/iphone.jpg",
				title: "Apple iPhone X 256 ГБ «серый космос»"
			},
			{
				price: 79989,
				isFavorites: true,
				isDiscount: true,
				src: "/assets/img/products/iphone.jpg",
				title: "Apple iPhone X 256 ГБ «серый космос»"
			},
			{
				price: 79989,
				oldPrice: 89989,
				isNew: true,
				src: "/assets/img/products/iphone.jpg",
				title: "Apple iPhone X 256 ГБ «серый космос»"
			},
			{
				price: 79989,
				oldPrice: 89989,
				isDiscount: true,
				src: "/assets/img/products/iphone.jpg",
				title: "Apple iPhone X 256 ГБ «серый космос»"
			}
		])
	)
}

api.getGoods = () => {
	return new Promise(async (resolve, reject) => {
		await delay(500)
		const json = localStorage.getItem('goods')
		const goods = JSON.parse(json)

		resolve(goods)
	})
}

export default api

function delay (milliseconds) {
	return new Promise(resolve => {
		setTimeout(resolve, milliseconds)
	})
}