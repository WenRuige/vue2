<template>

    <div>
        <input v-model="text" v-on:keyup.enter="add" placeholder="Add a todo">
        <ul id="repeat-object" class="demo">
            <li v-for="value in object">
                {{ value }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
       data() {
         return {
         msg:'qq',
         text:'',
         object: [
            'Do the dishes',
            'Take out the trash',
               'Mow the lawn'
                ]
         }
       },methods:{
            add:function(){
               this.object.push(this.text)
               this.text = ''
            }
       }
}

</script>
<!-- css 区域化 -->
<style scoped>
	h1{
		color: rgb(5, 110, 234);
	}




</style>