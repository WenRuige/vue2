/**
 * Created by gewenrui on 2017/3/30.
 */
import Router from 'vue-router'
import Vue from 'vue'
import todo from  '../../components/todo/todo';
import danmu from '../../components/danmu/danmu'
import uploadlist from '../../components/upload/uploadlist'
import uploadpic from '../../components/upload/uploadpic'
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/todo',
            component: todo
        }, {
            path: '/uploadpic',
            component: uploadpic
        }, {
            path: '/uploadlist',
            component: uploadlist
        }
    ]
})