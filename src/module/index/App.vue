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


            <el-col :span="5">
                <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-menu"></i>上传图片</template>
                        <el-menu-item-group>
                            <!--<template slot="title">分组一</template>-->
                            <el-menu-item index="1-1">
                                <router-link class="nav-item" to="/uploadlist">列表页</router-link>
                            </el-menu-item>
                            <el-menu-item index="1-2">
                                <router-link class="nav-item" to="/uploadpic">上传图片</router-link>
                            </el-menu-item>
                        </el-menu-item-group>
                        <!--<el-menu-item-group title="分组2">-->
                        <!--<el-menu-item index="1-3">选项3</el-menu-item>-->
                        <!--</el-menu-item-group>-->
                        <!--<el-submenu index="1-4">-->
                        <!--<template slot="title">选项4</template>-->
                        <!--<el-menu-item index="1-4-1">选项1</el-menu-item>-->
                        <!--</el-submenu>-->
                    </el-submenu>
                    <!--<el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>-->
                    <!--<el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>-->
                </el-menu>
            </el-col>
            <!--<el-col :span="3">-->
            <!--<el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo">-->
            <!--<el-menu-item-group title="后端管理系统分组">-->
            <!--<el-menu-item index="1"><i class="el-icon-message"></i>-->
            <!--<router-link class="nav-item" to="/uploadpic">上传图片</router-link>-->
            <!--</el-menu-item>-->
            <!--<el-menu-item index="2"><i class="el-icon-message"></i>-->
            <!--<router-link class="nav-item" to="/danmu">弹幕</router-link>-->
            <!--</el-menu-item>-->
            <!--</el-menu-item-group>-->
            <!--</el-menu>-->
            <!--</el-col>-->

            <el-col :span="15">
            <br>
                <router-view></router-view>
            </el-col>
        </el-row>


    </div>
</template>
<style scoped>
    a:link {
        color: #000000;
        text-decoration: none;
    }

    a:visited {
        color: #000000;
        text-decoration: none;
    }

    a:hover {
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
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }


</script>
