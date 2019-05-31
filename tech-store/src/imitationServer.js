import fake from './fake.json'

const api = {}

if (!localStorage.getItem('goods')) {
	localStorage.setItem('goods', JSON.stringify(fake))
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