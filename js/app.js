console.log(Vue);

const createApp = Vue.createApp;

createApp({
    data() {
        return {
            message: 'Scegliere un numero da 01 a 05',
            img: '',
        };
    },
    computed: {
        imgPath() {
            return './img/' + this.img + '.webp';
        },
    },
}).mount('#app');
