import Vue from 'vue'
import App from './App'
//使用vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter);


new Vue({
    el: '#body',
    components: { App }
})
