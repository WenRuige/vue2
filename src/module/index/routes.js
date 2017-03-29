import Router from 'vue-router'
import Vue from 'vue'
import todo from  '../../components/todo/todo';
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/todo',
            component: todo
        }
    ]
})