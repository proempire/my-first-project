import Vue from 'vue'
import App from './src/App.vue'
import VueRouter from 'vue-router'
import router from './src/router/index.js'

import './src/css/index.css'

Vue.use(VueRouter)

new Vue({
    router,
    el: '#app',
    components: { App },
    template: '<App/>',
})
