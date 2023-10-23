console.log(Vue);

const createApp = Vue.createApp;

createApp({
    data() {
        return {
            message: 'Paperella',
            img: './img/01.webp',
        };
    },
}).mount('#app');
