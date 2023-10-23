console.log(Vue)

const createApp = Vue.createApp

createApp({
	data() {
		return {
			message: 'Paperella',
		}
	},
}).mount('#app')