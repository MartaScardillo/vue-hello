console.log(Vue)

const createApp = Vue.createApp

createApp({
	data() {
		return {
			message: 'Paperella',
            img: 'https://boolean-landings.s3.eu-central-1.amazonaws.com/blog/1651666448paperella-169.jpeg'
		}
	},
}).mount('#app')