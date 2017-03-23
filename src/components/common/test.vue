<template>

    <div id="app">
        <!--//自动过滤收尾的空格-->
        <input v-model.trim="text" v-on:keyup.enter="add" placeholder="Add a sstodo">
        <p>{{text}}</p>
        <ul id="repeat-object" class="demo">
            <div v-for="value in object">
                <span v-on:click="finish" v-bind:class="{finished:value.isFinished}">{{ value.text }}</span>
                <button v-on:click="del(value)">close</button>
            </div>
        </ul>
    </div>
</template>
<!--todo 将数据存到localStorage,持久化存储 增加checkbox-->
<script>
    export default {
       data() {
         return {
         text:'',
         object:[

         ]

         }
       },methods:{
            add:function(){
            //输入为空直接返回false
            if(this.text == ''){
                return false;
              }
               localStorage.lastname="Smith"
               this.object.push({text:this.text,"isFinished":false })
               this.text = ''
            },del:function(item){
                //删除当前的list
                this.object.splice(this.object.indexOf(item),1);
                //将事件置为完成
            },finish:function(item){
                 item.isFinished = true;
            }
       },

}
</script>
<!-- css 区域化 -->
<style scoped>
.finished{
  text-decoration:underline;
  color:red
}
#app {
    width:400px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
     background-color:#ffffff;
    -moz-box-shadow: 10px 10px 5px #888888; /* 老的 Firefox */
    box-shadow: 10px 10px 5px #888888;
}


</style>

