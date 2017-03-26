<template>
    <div class="main">
        <div class="title">
            <h4>ToDoList</h4>
        </div>
        <div>
            <div class="input">
                输入: <input type="text" class="entry" v-model="text" v-on:keyup.enter="add">
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
            <el-button>默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="text">文字按钮</el-button>
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
        },created:function(){
           console.log(1)
        } ,
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
            }
        }
    }


</script>

<style scoped>
    .main {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 200px;
        margin-left: 10px;
        box-shadow: 0px 1px 3px rgba(34, 25, 25, 0.2);
    }
    .entry{
        margin-left: 10px;
    }

    li {
        list-style: none;
    }
    .input{
        margin-left: 5px;
    }
    h4{
        margin-left: 10px;
    }.task{
        margin-left: 10px;
         }

</style>