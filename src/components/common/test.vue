<template>

    <div>
        <input v-model="text" v-on:keyup.enter="add" placeholder="Add a todo">
        <ul id="repeat-object" class="demo">
            <li v-for="value in object">
                <span v-on:click="finish" v-bind:class="{finished:value.isFinished}">{{ value.text }}</span>
                <button v-on:click="del(value)">close</button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
       data() {
         return {
         text:'',
         object:[
         { text:'coding',"isFinished":false}
         ]

         }
       },methods:{
            add:function(){
               this.object.push({text:this.text,"isFinished":false })
               this.text = ''
            },del:function(item){
                console.log(item)
                this.object.splice(item,1);
                //将事件置为完成
            },finish:function(item){
            console.log(item);
                 item.isFinished = false;
                console.log(item);
            }
       }
}
</script>
<!-- css 区域化 -->
<style scoped>
.finished{
  text-decoration:underline;
  color:red
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>

