<template>
    <div>
        <!--此处一个大坑!!!! 根节点只能有一个否则 Vue会找不到根节点-->
        <common></common>
        <test></test>
    </div>
</template>

<script>
//APP.vue为入口文件进行查找的路由
import common from '../../components/common/common'
import test from '../../components/common/test'
export default {
	components: {
      test,
      common
    }
}



</script>
