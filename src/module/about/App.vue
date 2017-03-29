<template>
    <div>
        <!--此处一个大坑!!!! 根节点只能有一个否则 Vue会找不到根节点-->
        <common></common>
        <danmu></danmu>
        <!--<test></test>-->
        <!--<about></about>-->
    </div>
</template>

<script>
//APP.vue为入口文件进行查找的路由
import common from '../../components/common/header'
import danmu from '../../components/danmu/danmu'
export default {
	components: {
      common,danmu
    }
}



</script>
