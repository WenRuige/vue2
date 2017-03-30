import Vue from 'vue'
import App from './App'
//使用vue-router路由
import router from '../router/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI);


new Vue({
    el: '#body',
    components: {App},
    router
})