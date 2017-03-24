import Vue from 'vue'
import App from './App'
//使用vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter);


// const routes = [
//     {path: '/foo', component: App},
// ];
//
// const router = new VueRouter({
//     routes
// });


new Vue({
    el: '#body',
    components: {App},
})
