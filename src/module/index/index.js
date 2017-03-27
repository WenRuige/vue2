import Vue from 'vue'
import App from './App'
//使用vue-router
//import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css'
//Vue.component(Button.name, Button)
Vue.use(ElementUI);
//Vue.use(VueRouter);


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
