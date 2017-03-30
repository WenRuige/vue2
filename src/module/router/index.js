/**
 * Created by gewenrui on 2017/3/30.
 */
import Router from 'vue-router'
import Vue from 'vue'
import todo from  '../../components/todo/todo';
import danmu from '../../components/danmu/danmu'
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/todo',
            component: todo
        }, {
            path:'/danmu',
            component :danmu
        }
    ]
})