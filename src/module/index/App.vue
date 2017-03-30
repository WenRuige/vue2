<template>
    <div>
        <!--此处一个大坑!!!! 根节点只能有一个否则 Vue会找不到根节点-->
        <div class="nav-box">
            <p class="nav-list">
                <router-link class="nav-item" to="/todo">首页</router-link>
                <router-link class="nav-item" to="/danmu">弹幕</router-link>
            </p>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    //APP.vue为入口文件进行查找的路由
    import danmu from '../../components/danmu/danmu'
    export default {
        components: {
            danmu
        }
    }


</script>
