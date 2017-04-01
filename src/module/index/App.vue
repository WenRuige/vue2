<template>
    <div>
        <!--写在开头的话
        Notice:每一个template需要一个根节点
        -->

        <nav class="header">
        </nav>


        <!--引入header头-->
        <!--<headers></headers>-->
        <!--引入header头结束-->

        <!--此处一个大坑!!!! 根节点只能有一个否则 Vue会找不到根节点-->
        <el-row :gutter="20">
            <el-col :span="3">
                <el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo">
                    <el-menu-item-group title="后端管理系统分组">
                        <el-menu-item index="1"><i class="el-icon-message"></i>
                            <router-link class="nav-item" to="/todo">首页</router-link>
                        </el-menu-item>
                        <el-menu-item index="2"><i class="el-icon-message"></i>
                            <router-link class="nav-item" to="/danmu">弹幕</router-link>
                        </el-menu-item>
                    </el-menu-item-group>
                </el-menu>
            </el-col>

            <el-col :span="6">
                <router-view></router-view>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple"></div>
            </el-col>
        </el-row>


    </div>
</template>
<style scoped>
    a:link {
        font-size: 12px;
        color: #000000;
        text-decoration: none;
    }
    a:visited {
        font-size: 12px;
        color: #000000;
        text-decoration: none;
    }
    a:hover {
        font-size: 12px;
        color: #999999;
        text-decoration: underline;
    }

    .header {
        background-color: #20a0ff;
        height: 50px;
    }
</style>

<script>
    //APP.vue为入口文件进行查找的路由
    import danmu from '../../components/danmu/danmu'
    //    import headers from '../../components/common/headers'
    export default {
        components: {
            danmu
        }
    }


</script>
