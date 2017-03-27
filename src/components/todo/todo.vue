<template>


    <div class="main">
        <el-button
                plain
                @click="open3">
            成功

        </el-button>
        <div class="title">
            <h4>ToDoList</h4>
        </div>
        <div>
            <div class="input">
                <!--v-on:keyup.enter="add"-->
                <el-input type="text" class="entry" v-model="text"></el-input>
            </div>
            <!--移除全部-->
            <!--未完成任务-->
            <h4>未完成任务</h4>
            <li v-for="item in items">
                <span class="task" v-on:click="finish(item)">{{item.text}}</span>
                <button v-on:click="remove(item)">close</button>
            </li>
            <hr>
            <!--完成任务-->
            <h4>完成任务</h4>
            <li v-for="item in object ">
                <span class="task" style="text-decoration:line-through;">{{item.text}}</span>
            </li>
            <el-button type="primary" @click="add">主要按钮</el-button>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                text: '',
                items: [],
                object: []
            }
        }, created: function () {
            console.log(1)
        },
        methods: {
            add: function () {
                if (this.text == '') {
                    return false;
                }
                this.items.push({text: this.text})
                this.text = '';
            }, remove: function (item) {
                this.items.splice(this.items.indexOf(item), 1);
            }, finish: function (item) {
                this.object.push({text: item.text});
                this.items.splice(this.items.indexOf(item), 1)
            }, open3() {
                this.$notify({
                    title: '成功',
                    message: '这是一条成功的提示消息',
                    type: 'success'
                });
            }
        }
    }


</script>

<style scoped>
</style>